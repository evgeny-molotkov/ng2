import { Component, Input, OnInit, ChangeDetectionStrategy, Optional, Inject, forwardRef, SkipSelf } from '@angular/core';
import { isUndefined, clone } from 'ng2-qgrid/core/utility/kit';
import { ColumnModel } from 'ng2-qgrid/core/column-type/column.model';
import { RootService } from '../../infrastructure/component/root.service';
import { TemplateHostService } from '../../template/template-host.service';
import { ColumnListService } from '../../main/column/column-list.service';

@Component({
	selector: 'q-grid-column',
	template: '<ng-content></ng-content>',
	providers: [TemplateHostService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColumnComponent implements OnInit {
	model: ColumnModel;

	@Input() type: string;
	@Input() key: string;
	@Input() class: string;
	@Input() title: string;
	@Input() pin: string;
	@Input() aggregation: string;
	@Input() aggregationOptions: any;
	@Input() editor: string;
	@Input() editorOptions: any;
	@Input() format: string;
	@Input() symbol: string;
	@Input() code: string;

	@Input() width: number;
	@Input() minWidth: number;
	@Input() maxWidth: number;
	@Input() viewWidth: number;

	@Input() canEdit: boolean;
	@Input() canResize: boolean;
	@Input() canSort: boolean;
	@Input() canMove: boolean;
	@Input() canFilter: boolean;
	@Input() canHighlight: boolean;
	@Input() canFocus: boolean;

	@Input() isVisible: boolean;
	@Input() index: number;

	@Input() label: any;
	@Input() labelPath: string;
	@Input() value: any;
	@Input() path: string;
	@Input() compare: any;

	constructor(
		private root: RootService,
		private columnList: ColumnListService,
		private templateHost: TemplateHostService,
		@SkipSelf() @Optional() private parent: ColumnComponent
	) { }

	ngOnInit() {
		const withKey = !isUndefined(this.key);
		const withType = !isUndefined(this.type);
		if (!withKey) {
			this.key = this.columnList.generateKey(this);
		}

		const column = this.columnList.extract(this.key, this.type);

		this.templateHost.key = source => {
			const parts = [source, 'cell'];

			if (withType) {
				parts.push(column.type);
			}

			if (withKey) {
				parts.push(column.key);
			}

			return parts.join('-') + '.tpl.html';
		};

		this.columnList.copy(column, this);

		if (withKey) {
			this.columnList.add(column, this.parent && this.parent.model);
		} else {
			const settings = Object.keys(this)
				.filter(
					key => !isUndefined(this[key]) && column.hasOwnProperty(key)
				)
				.reduce((memo, key) => {
					memo[key] = column[key];
					return memo;
				}, {});

			this.columnList.register(settings);
		}

		this.model = column;
	}
}