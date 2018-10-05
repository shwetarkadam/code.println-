import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-event',
  templateUrl: './landing-event.component.html',
  styleUrls: ['./landing-event.component.css']
})
export class LandingEventComponent implements OnInit {
  eventList :any = [];
  constructor() { 
    this.eventList = [{
      name:"Crescendo",
      description:"Technical event of college"
    },{
      name:"Crescendo",
      description:"Technical event of college"
    },
    {
      name:"Crescendo",
      description:"Technical event of college"
    }];
  }

  ngOnInit() {
  }

}
