import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  constructor(
    private api: ClientService,
    private router: Router
    ) { }

  clientModel: Client[];

  ngOnInit() {
    this.api.getClients()
    .subscribe( res => {
        this.clientModel = res;
        console.log(this.clientModel);
      }, err => {
        console.log(err);
      }
    );
  }

  showClient(client: Client) {
    this.router.navigate(['show-client', client.id]);
  }

}
