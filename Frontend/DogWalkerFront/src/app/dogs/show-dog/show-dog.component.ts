import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { ActivatedRoute } from '@angular/router';
import { Dog } from '../dog';

@Component({
  selector: 'app-show-dog',
  templateUrl: './show-dog.component.html',
  styleUrls: ['./show-dog.component.css']
})
export class ShowDogComponent implements OnInit {

  constructor(
    private api: DogService,
    private route: ActivatedRoute
    ) { }

  dogModel: Dog;

  ngOnInit() {
    const id = + this.route.snapshot.params.id;
    this.api.getDogById(id)
    .subscribe( res => {
        this.dogModel  = res;
        console.log(this.dogModel);
      }, err => {
        console.log(err);
      }
    );
  }

}
