import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

//ploty,js
//import * as PlotlyJS from 'node_modules/plotly.js';
import { PlotlyViaCDNModule } from './plotly-via-cdn/plotly-via-cdn.module';
//import { PlotlyViaWindowModule } from 'node_modules/angular-plotly.js';
PlotlyViaCDNModule.plotlyVersion = '1.57.1';



// Primeng imports
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ColorPickerModule } from 'primeng/colorpicker';
import { EditorModule } from 'primeng/editor';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { RatingModule } from 'primeng/rating';
import { PasswordModule } from 'primeng/password';
import { ListboxModule } from 'primeng/listbox';
import { KeyFilterModule } from 'primeng/keyfilter';
import { SliderModule } from 'primeng/slider';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ChartModule } from 'primeng/chart';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CalendarModule,
    ColorPickerModule,
    AutoCompleteModule,
    EditorModule,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    RadioButtonModule,
    RatingModule,
    PasswordModule,
    ListboxModule,
    KeyFilterModule,
    SliderModule,
    SelectButtonModule,
    TableModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    ToastModule,
    ProgressBarModule,
    DropdownModule,
    OrganizationChartModule,
    ToggleButtonModule,
    ChartModule,
    TieredMenuModule,
    CardModule,
    MenubarModule,
    PanelModule,
    FlexLayoutModule,
    PlotlyViaCDNModule,
  ],
exports: [
CommonModule,
    ButtonModule,
    CalendarModule,
    ColorPickerModule,
    AutoCompleteModule,
    EditorModule,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    RadioButtonModule,
    RatingModule,
    PasswordModule,
    ListboxModule,
    KeyFilterModule,
    SliderModule,
    SelectButtonModule,
    TableModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    ToastModule,
    ProgressBarModule,
    DropdownModule,
    OrganizationChartModule,
    ToggleButtonModule,
    ChartModule,
    TieredMenuModule,
    CardModule,
    MenubarModule,
    PanelModule,
    FlexLayoutModule,
    PlotlyViaCDNModule,
]
})
export class SharedGlobalModule {

}
