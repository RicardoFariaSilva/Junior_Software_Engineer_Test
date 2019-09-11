import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDogsComponent } from './dogs/list-dogs/list-dogs.component';
import { CreateDogComponent } from './dogs/create-dog/create-dog.component';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { CreateClientComponent } from './clients/create-client/create-client.component';
import { ListWalkersComponent } from './walkers/list-walkers/list-walkers.component';
import { CreateWalkerComponent } from './walkers/create-walker/create-walker.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowWalkerComponent } from './walkers/show-walker/show-walker.component';
import { ShowClientComponent } from './clients/show-client/show-client.component';
import { ShowDogComponent } from './dogs/show-dog/show-dog.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDogsComponent,
    CreateDogComponent,
    ListClientsComponent,
    CreateClientComponent,
    ListWalkersComponent,
    CreateWalkerComponent,
    ShowWalkerComponent,
    ShowClientComponent,
    ShowDogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
