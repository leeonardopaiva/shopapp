import { TheatersComponent } from './theaters/theaters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { CadastroComponent } from './cadastro/cadastro.component';


const routes: Routes = [
 {path: '', component:EventsComponent },
 {path:'theaters', component: TheatersComponent},
 {path:'events', component: EventsComponent},
 {path:'cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
