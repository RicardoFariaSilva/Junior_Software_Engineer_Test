import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.css']
})
export class ShowClientComponent implements OnInit {

  constructor(
    private api: ClientService,
    private route: ActivatedRoute
    ) { }

    clientModel; // I couldn't use Client model because underline problems with [phone_number]


  ngOnInit() {
    const id = + this.route.snapshot.params.id;
    this.api.getClientById(id)
    .subscribe( res => {
        this.clientModel = res;
        console.log(this.clientModel);
      }, err => {
        console.log(err);
      }
    );
  }

}
