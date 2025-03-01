import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ColumnModelPin, VisibilityState } from '@qgrid/core';
import { GridLet } from '../grid/grid-let';
import { GridPlugin } from '../plugin/grid-plugin';
import { TableCoreService } from './table-core.service';

@Component({
	selector: 'q-grid-core-table',
	templateUrl: './table-core.component.html',
	providers: [TableCoreService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableCoreComponent implements OnInit {
	@Input() pin: ColumnModelPin = 'mid';

	constructor(
		public $view: GridLet,
		private plugin: GridPlugin,
		private tableHost: TableCoreService,
		private cd: ChangeDetectorRef
	) {
	}

	ngOnInit() {
		const { model, observe } = this.plugin;

		this.tableHost.pin = this.pin;

		observe(model.visibilityChanged)
			.subscribe(() => {
				this.cd.markForCheck();
				this.cd.detectChanges();
			});
	}

	get visibility(): VisibilityState {
		const { model } = this.plugin;
		return model.visibility();
	}
}
