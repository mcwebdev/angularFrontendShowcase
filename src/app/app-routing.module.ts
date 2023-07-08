import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeckOfCardsComponent } from './deck-of-cards/deck-of-cards.component';
import { PokerSlotsComponent } from './poker-slots/poker-slots.component';
import { DirectivesComponent } from './directives/directives.component';
import { HttpComponent } from './http/http.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { UxComponent } from './ux/ux.component';
import { WebWorkersComponent } from './web-workers/web-workers.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { ChartsComponent } from './charts/charts.component';
import { MediaDetectionComponent } from './media-detection/media-detection.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { GraphQLComponent } from './graph-ql/graph-ql.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { XlsxComponent } from './xlsx/xlsx.component';

const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: 'deckOfCards',
        component: DeckOfCardsComponent,
        data: { animationState: 'One' }
      },
      {
        path: 'xlsx',
        component: XlsxComponent,
        data: { animationState: 'One' }
      },
      {
        path: 'pokerSlots',
        component: PokerSlotsComponent,
        data: { animationState: 'Two' }
      },
      {
        path: 'widgets',
        component: WidgetsComponent,
        data: { animationState: 'Three' }
      },
      {
        path: 'charts',
        component: ChartsComponent,
        data: { animationState: 'One' }
      },
      {
        path: 'directives',
       component: DirectivesComponent,
        data: { animationState: 'Two' }
      },
      {
        path: 'pipes',
        component: PipesComponent,
       data: { animationState: 'Three' }
      },
      {
        path: 'services',
        component: ServicesComponent,
        data: { animationState: 'One' }
      },
      {
        path: 'graph',
        component: GraphQLComponent,
        data: { animationState: 'Three' }
      },
      {
        path: 'decorators',
        component: DecoratorsComponent,
        data: { animationState: 'Three' }
      },
      {
        path: 'webworkers',
        component: WebWorkersComponent,
        data: { animationState: 'Two' }
      },
      {
        path: 'http',
        component: HttpComponent,
        data: { animationState: 'Three' }
      },
      {
        path: 'ux',
        component: UxComponent,
        data: { animationState: 'One' }
      },
      {
        path: 'media',
        component: MediaDetectionComponent,
        data: { animationState: 'Two' }
      },
      {
        path: 'firebase',
        component: FirebaseComponent,
        data: { animationState: 'Three' }
      },
      {
        path: 'concepts',
        component: ConceptsComponent,
        data: { animationState: 'One' }
      },
      {
        path: '**',
        redirectTo: 'one'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'one'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
