import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDogsComponent } from './dogs/list-dogs/list-dogs.component';
import { CreateDogComponent } from './dogs/create-dog/create-dog.component';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { CreateClientComponent } from './clients/create-client/create-client.component';
import { ListWalkersComponent } from './walkers/list-walkers/list-walkers.component';
import { CreateWalkerComponent } from './walkers/create-walker/create-walker.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDogsComponent,
    CreateDogComponent,
    ListClientsComponent,
    CreateClientComponent,
    ListWalkersComponent,
    CreateWalkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
