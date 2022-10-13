import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId=0;

  constructor(myActived:ActivatedRoute) {
    // console.log(myActived.snapshot.params['id']);
    this.userId=myActived.snapshot.params['id'];
   }

  ngOnInit(): void {
  }

}
