import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css']
})
export class NoticeBoardComponent implements OnInit {
  noticeList = [
    {
      title:"Holiday in college tomorrow",
      description:"Due to the Mumbai Band college will be closed on 21/3/18"
    },
    {
      title:"Holiday in college tomorrow",
      description:"Due to the Mumbai Band college will be closed on 21/3/18"
    },
    {
      title:"Holiday in college tomorrow",
      description:"Due to the Mumbai Band college will be closed on 21/3/18"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
