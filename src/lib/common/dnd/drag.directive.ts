import { Directive, ElementRef, Input, Optional } from '@angular/core';
import { EventManager } from 'ng2-qgrid/core/infrastructure/event.manager';
import { EventListener } from 'ng2-qgrid/core/infrastructure/event.listener';
import { DragService } from 'ng2-qgrid/core/drag/drag.service';
import { GRID_PREFIX } from 'ng2-qgrid/core/definition';
import { Command } from 'ng2-qgrid/core/command/command';
import { RootService } from '../../infrastructure/component/root.service';

@Directive({
	selector: '[q-grid-drag]'
})
export class DragDirective {
	@Input('q-grid-drag-data') data: any;
	@Input('q-grid-drag-effect') effect: string;
	@Input('q-grid-drag') drag: Command;
	@Input('q-grid-drop-area') area: string;

	constructor(@Optional() private root: RootService, private elementRef: ElementRef) {
		const element = elementRef.nativeElement;
		const listener = new EventListener(element, new EventManager(this));
		element.classList.add(`${GRID_PREFIX}-can-drag`);

		listener.on('dragstart', this.onStart);
		listener.on('dragend', this.onEnd);
	}

	onStart(e: DragEvent) {
		const transfer = e.dataTransfer;
		const eventArg = {
			data: this.data
		};

		if (this.drag.canExecute(eventArg) === false) {
			e.preventDefault();
			transfer.effectAllowed = 'none';
			return false;
		}

		const data = this.data;
		this.drag.execute(eventArg);

		this.elementRef.nativeElement.classList.add(`${GRID_PREFIX}-drag`);

		transfer.setData(DragService.mimeType, DragService.encode(data));
		transfer.effectAllowed = this.effect || 'move';

		DragService.data = data;
		DragService.area = this.area;

		if (this.root) {
			const model = this.root.model;
			model.drag({ isActive: true });
		}
	}

	onEnd() {
		this.elementRef.nativeElement.classList.remove(`${GRID_PREFIX}-drag`);
		DragService.data = null;
		DragService.area = null;

		if (this.root) {
			const model = this.root.model;
			model.drag({ isActive: false });
		}
	}
}