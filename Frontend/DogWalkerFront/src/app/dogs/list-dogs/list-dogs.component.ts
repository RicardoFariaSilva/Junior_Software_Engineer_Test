import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../dog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-dogs',
  templateUrl: './list-dogs.component.html',
  styleUrls: ['./list-dogs.component.css']
})
export class ListDogsComponent implements OnInit {

  constructor(
    private api: DogService,
    private router: Router
    ) { }

  dogModel: Dog[];

  ngOnInit() {
    this.api.getDogs()
    .subscribe( res => {
      this.dogModel = res;
    }, err => {
      console.log(err);
    }
  );
  }

  showDog(dog: Dog) {
    this.router.navigate(['show-dog', dog.id]);
  }

  createDog() {
    this.router.navigate(['create-dog']);
  }
}
