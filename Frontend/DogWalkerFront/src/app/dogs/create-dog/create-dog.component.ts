import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-create-dog',
  templateUrl: './create-dog.component.html',
  styleUrls: ['./create-dog.component.css']
})
export class CreateDogComponent implements OnInit {

  constructor(
    private api: DogService,
    private router: Router) { }


  @Input()
  newDogName: string;
  newDogGender: boolean;
  newDogRace: string;
  newDogWeight: number;

  list;

  ngOnInit() {
    this.api.getDogs()
      .subscribe(res => {
        this.list = res;
        console.log(this.list);
      }, err => {
        console.log(err);
      }
      );
  }

  getDogsSize() {
    return this.list.size;
  }

  createDog() {
    const data = new FormData();
    data.append('id', +this.getDogsSize() + 1 + '');
    data.append('name', this.newDogName);
    data.append('gender', this.newDogGender + '');
    data.append('race', this.newDogRace);
    data.append('weight', this.newDogWeight + '');
    console.log(data);
    this.api.postNewDog(data)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['list-dogs']);
      }, (err) => {
        console.log(err);
      });
  }

}
