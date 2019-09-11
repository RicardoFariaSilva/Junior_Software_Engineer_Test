import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  constructor(
    private api: ClientService,
    private router: Router
  ) { }

  @Input()
  newClientName: string;
  newClientPhoneNumber: string;
  newClientEmail: string;
  newClientLocation: string;

  list;

  ngOnInit() {
    this.api.getClients()
      .subscribe(res => {
        this.list = res;
        console.log(this.list);
      }, err => {
        console.log(err);
      }
      );
  }

  getClientsSize() {
    return this.list.size;
  }

  createClient() {
    const data = new FormData();
    data.append('id', +this.getClientsSize() + 1 + '');
    data.append('name', this.newClientName);
    data.append('phone_number', this.newClientPhoneNumber);
    data.append('email', this.newClientEmail);
    data.append('location', this.newClientLocation);

    console.log(data);
    this.api.postNewClient(data)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['list-clients']);
      }, (err) => {
        console.log(err);
      });
  }
}
