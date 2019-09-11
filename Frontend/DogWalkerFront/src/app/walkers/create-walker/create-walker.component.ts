import { Component, OnInit, Input } from '@angular/core';
import { WalkerService } from '../walker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-walker',
  templateUrl: './create-walker.component.html',
  styleUrls: ['./create-walker.component.css']
})
export class CreateWalkerComponent implements OnInit {

  constructor(
    private api: WalkerService,
    private router: Router
  ) { }

  @Input()
  newWalkerName: string;
  newWallkerPhoneNumber: string;
  newWalkerEmail: string;
  newWalkerLocation: string;
  newWalkerDescription: string;

  list;

  ngOnInit() {
    this.api.getWalkers()
      .subscribe(res => {
        this.list = res;
        console.log(this.list);
      }, err => {
        console.log(err);
      }
      );
  }

  getWalkersSize() {
    return this.list.size;
  }

  createWalker() {
    const data = new FormData();
    data.append('id', +this.getWalkersSize() + 1 + '');
    data.append('name', this.newWalkerName);
    data.append('phone_number', this.newWallkerPhoneNumber);
    data.append('email', this.newWalkerEmail);
    data.append('location', this.newWalkerLocation);
    data.append('description', this.newWalkerDescription);

    console.log(data);
    this.api.postNewClient(data)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['list-walkers']);
      }, (err) => {
        console.log(err);
      });
  }

}
