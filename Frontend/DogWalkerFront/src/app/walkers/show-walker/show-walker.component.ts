import { Component, OnInit } from '@angular/core';
import { WalkerService } from '../walker.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-walker',
  templateUrl: './show-walker.component.html',
  styleUrls: ['./show-walker.component.css']
})
export class ShowWalkerComponent implements OnInit {

  constructor(
    private api: WalkerService,
    private route: ActivatedRoute
  ) { }


  walkerModel; // I couldn't use Client model because underline problems with [phone_number]

  ngOnInit() {
    const id = + this.route.snapshot.params.id;
    this.api.getWalkerById(id)
    .subscribe( res => {
        this.walkerModel = res;
        console.log(this.walkerModel);
      }, err => {
        console.log(err);
      }
    );
  }

}
