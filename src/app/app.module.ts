import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { DeckOfCardsComponent } from './deck-of-cards/deck-of-cards.component';
import { PokerSlotsComponent } from './poker-slots/poker-slots.component';


import { BasicDirective } from 'src/shared-services/basic.directive';
import { BasicPipe } from 'src/shared-services//basic-pipe.pipe';


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

import { CustomerService } from 'src/shared-services/customerservice';

import { HttpComponent } from './http/http.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { ServicesComponent } from './services/services.component';
import { WebWorkersComponent } from './web-workers/web-workers.component';
import { UxComponent } from './ux/ux.component';




import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { ChartsComponent } from './charts/charts.component';
import { MediaDetectionComponent } from './media-detection/media-detection.component';
import { MachineLearningComponent } from './machine-learning/machine-learning.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { GraphQLComponent } from './graph-ql/graph-ql.component';


import { GraphQLModule } from './graphql.module';
import { UpvoterComponent } from './graph-ql/upvoter.component';



@NgModule({
  declarations: [
    AppComponent,
    DeckOfCardsComponent,
    PokerSlotsComponent,
    HttpComponent,
    WidgetsComponent,
    PipesComponent,
    DirectivesComponent,
    ServicesComponent,
    WebWorkersComponent,
    UxComponent,
    BasicPipe,
    BasicDirective,
    ChartsComponent,
    MediaDetectionComponent,
    MachineLearningComponent,
    ConceptsComponent,
    GraphQLComponent,
    UpvoterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GraphQLModule,
    FormsModule,
    FlexLayoutModule,
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
    HighlightModule,
    TieredMenuModule,
    CardModule,
    MenubarModule,
    PanelModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: HIGHLIGHT_OPTIONS, useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }, CustomerService],
})
export class AppModule { }
