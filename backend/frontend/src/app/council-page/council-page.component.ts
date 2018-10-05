import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-council-page',
  templateUrl: './council-page.component.html',
  styleUrls: ['./council-page.component.css']
})
export class CouncilPageComponent implements OnInit {
council: any;
  constructor(ApiService:ApiService) { 
    this.council = {
      name:"Student Council",
      email:"studentcouncilcrce@gmail.com",
      members:[
        {
          name:"Edwin Clement",
          email:"ecua@gm.com",
          position:"Gen Sec",
          phone:"9833145467",
          photo:"http://bdfjade.com/data/out/152/6537653-material-wallpaper.png"
        },
        {
          name:"Edwin Clement",
          email:"ecua@gm.com",
          position:"Gen Sec",
          phone:"9833145467",
          photo:"http://bdfjade.com/data/out/152/6537653-material-wallpaper.png"
        },
        {
          name:"Edwin Clement",
          email:"ecua@gm.com",
          position:"Gen Sec",
          phone:"9833145467",
          photo:"http://bdfjade.com/data/out/152/6537653-material-wallpaper.png"
        },
        {
          name:"Edwin Clement",
          email:"ecua@gm.com",
          position:"Gen Sec",
          phone:"9833145467",
          photo:"http://bdfjade.com/data/out/152/6537653-material-wallpaper.png"
        },
        {
          name:"Edwin Clement",
          email:"ecua@gm.com",
          position:"Gen Sec",
          phone:"9833145467",
          photo:"http://bdfjade.com/data/out/152/6537653-material-wallpaper.png"
        }
      ]
    }
  }

  ngOnInit() {
  }

}
