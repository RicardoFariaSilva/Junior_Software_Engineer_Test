import { Component, OnInit } from '@angular/core';
import { WalkerService } from '../walker.service';
import { Walker } from '../walker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-walkers',
  templateUrl: './list-walkers.component.html',
  styleUrls: ['./list-walkers.component.css']
})
export class ListWalkersComponent implements OnInit {

  constructor(
    private api: WalkerService,
    private router: Router
    ) { }

  walkerModel: Walker[];

  ngOnInit() {
    this.api.getWalkers()
    .subscribe( res => {
      this.walkerModel = res;
    }, err => {
      console.log(err);
    }
  );
  }

  showWalker(walker: Walker) {
    this.router.navigate(['show-walker', walker.id]);
  }

  createWalker() {
    this.router.navigate(['create-walker']);
  }
}
