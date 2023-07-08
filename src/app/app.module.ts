import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedGlobalModule } from 'src/shared-services/shared-global.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppComponent } from './app.component';
import { DeckOfCardsComponent } from './deck-of-cards/deck-of-cards.component';
import { PokerSlotsComponent } from './poker-slots/poker-slots.component';
import { HttpComponent } from './http/http.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { ServicesComponent } from './services/services.component';
import { WebWorkersComponent } from './web-workers/web-workers.component';
import { UxComponent } from './ux/ux.component';
import { ChartsComponent } from './charts/charts.component';
import { MediaDetectionComponent } from './media-detection/media-detection.component';
import { MachineLearningComponent } from './machine-learning/machine-learning.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { GraphQLComponent } from './graph-ql/graph-ql.component';

import { GraphQLModule } from './graphql.module';
import { UpvoterComponent } from './graph-ql/upvoter.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseComponent } from './firebase/firebase.component';

import { BasicDirective } from 'src/shared-services/basic.directive';
import { BasicPipe } from 'src/shared-services//basic-pipe.pipe';
import { CustomerService } from 'src/shared-services/customerservice';
import { DecoratorsComponent } from './decorators/decorators.component';
import { XlsxComponent } from './xlsx/xlsx.component';


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
    UpvoterComponent,
    FirebaseComponent,
    DecoratorsComponent,
    XlsxComponent
  ],
  imports: [
    SharedGlobalModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    GraphQLModule,
    HighlightModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
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
