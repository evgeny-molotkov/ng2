import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChipsModule } from './components/chips/chips.module';
import { DateAdapterModule } from './components/date-adapter/date-adpater.module';
import { MenuModule } from './components/menu/menu.module';
import { SelectModule } from './components/select/select.module';
import { ThemeComponent } from './theme.component';
import { ThemeOverlayModule } from './components/theme-overlay/theme-overlay.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
	ActionBarModule,
	ActionModule,
	AutoCompleteEditorModule,
	BackdropModule,
	BoolEditorModule,
	CaptionModule,
	CellEditorModule,
	CellTooltipModule,
	ChangeDetectorModule,
	ColumnChooserModule,
	ColumnChooserTriggerModule,
	ColumnFilterModule,
	ColumnSortModule,
	CommandModule,
	DataManipulationModule,
	DateModule,
	DndModule,
	EbModule,
	EditFormModule,
	ExportModule,
	FileModule,
	FocusModule,
	GridModule,
	ImportModule,
	LayerModule,
	LayoutModule,
	LegendModule,
	LiveCellModule,
	LiveColumnModule,
	LiveRowModule,
	MarkupModule,
	PagerModule,
	PaneModule,
	PersistenceModule,
	PipeModule,
	ProgressModule,
	QueryBuilderModule,
	ReferenceEditorModule,
	ResizeModule,
	RestModule,
	StatusBarModule,
	TabTrapModule,
	TemplateModule,
	ThemeService,
	TimeModule,
	ValidationModule,
	VisibilityModule,
	VscrollModule,
} from 'ng2-qgrid';

@NgModule({
    declarations: [
        ThemeComponent
    ],
    exports: [
        ThemeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        GridModule,
        TemplateModule,
        DndModule,
        VscrollModule,
        ResizeModule,
        ChipsModule,
        SelectModule,
        ThemeOverlayModule,
        ActionBarModule,
        ActionModule,
        AutoCompleteEditorModule,
        BackdropModule,
        BoolEditorModule,
        CaptionModule,
        CellTooltipModule,
        CellEditorModule,
        ChangeDetectorModule,
        ColumnChooserModule,
        ColumnChooserTriggerModule,
        ColumnFilterModule,
        ColumnSortModule,
        CommandModule,
        DataManipulationModule,
        DateAdapterModule,
        DateModule,
        EbModule,
        EditFormModule,
        ExportModule,
        FileModule,
        FocusModule,
        ImportModule,
        LayerModule,
        LayoutModule,
        LegendModule,
        LiveCellModule,
        LiveColumnModule,
        LiveRowModule,
        MarkupModule,
        MenuModule,
        PagerModule,
        PaneModule,
        PersistenceModule,
        PipeModule,
        ProgressModule,
        QueryBuilderModule,
        ReferenceEditorModule,
        RestModule,
        StatusBarModule,
        TabTrapModule,
        TimeModule,
        ValidationModule,
        VisibilityModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatProgressBarModule,
        MatRadioModule,
        MatSelectModule,
        MatToolbarModule,
        MatTooltipModule,
    ]
})
export class ThemeModule {
	constructor(theme: ThemeService) {
		theme.name = 'material';
		theme.component = ThemeComponent;
	}
}
