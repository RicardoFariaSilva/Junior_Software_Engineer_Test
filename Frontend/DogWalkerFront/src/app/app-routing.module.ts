import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateClientComponent } from './clients/create-client/create-client.component';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { CreateDogComponent } from './dogs/create-dog/create-dog.component';
import { ListDogsComponent } from './dogs/list-dogs/list-dogs.component';
import { CreateWalkerComponent } from './walkers/create-walker/create-walker.component';
import { ListWalkersComponent } from './walkers/list-walkers/list-walkers.component';
import { ShowClientComponent } from './clients/show-client/show-client.component';
import { ShowDogComponent } from './dogs/show-dog/show-dog.component';
import { ShowWalkerComponent } from './walkers/show-walker/show-walker.component';

const routes: Routes = [
  { path: 'create-client', component: CreateClientComponent },
  { path: 'show-client/:id', component: ShowClientComponent },
  { path: 'list-clients', component: ListClientsComponent },
  { path: 'create-dog', component: CreateDogComponent },
  { path: 'show-dog/:id', component: ShowDogComponent },
  { path: 'list-dogs', component: ListDogsComponent },
  { path: 'create-walker', component: CreateWalkerComponent },
  { path: 'show-walker/:id', component: ShowWalkerComponent },
  { path: 'list-walkers', component: ListWalkersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
