import { browser } from 'protractor';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { pikaday, Pikaday } from 'pikaday';
import 'pikaday';
declare var Pikaday;


@Component({
  selector: 'app-slot-booking',
  templateUrl: './slot-booking.component.html',
  styleUrls: ['./slot-booking.component.css']
})
export class SlotBookingComponent implements OnInit {
  x: number[];
  floors: any;
  currentFloor: string;
  pikaday: Pikaday;
  currentRoom:string;
  
  timePoints:string[] = ["08.45am - 09.45am",
                      "09.45am - 10.45am",
                      "11.00am - 12.00pm",
                      "12.00pm - 01.00pm",
                      "01.30pm - 02.30pm",
                      "02.30pm - 03.30pm",
                      "03.30pm - 04.30pm"];

  @ViewChild('datepicker')
  datepicker: ElementRef;

  constructor() {
    this.floors = [
      new Floor("9th Floor", [new Room("Samvaad", true), new Room("Open Source Lab", true),]),
      new Floor("8th Floor", [new Room("806", false), new Room("810", false), new Room("807", false)]),
    ];
    this.currentFloor = this.floors[0].name;
    this.currentRoom = this.floors[0].rooms[0].name;

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log(this.datepicker.nativeElement);
    this.pikaday = new Pikaday({
      disableWeekends: true,
      field: this.datepicker.nativeElement
   });
  }

  floorClicked(floor) {
    this.currentFloor = floor.name;
    this.currentRoom = floor.rooms[0].name;
  }

  roomClicked(room) {
    this.currentRoom = room.name;
  }

}


class Room {
  name: string;
  bookstatus: boolean;
  bookedStatus: any; 
  constructor(name: string, bookStatus: boolean) {
    this.name = name;
    this.bookstatus = bookStatus;
    this.bookedStatus = [
      ["08.45am - 09.45am",true],
      ["09.45am - 10.45am",true],
      ["11.00am - 12.00pm",false],
      ["12.00pm - 01.00pm",true],
      ["01.30pm - 02.30pm",false],
      ["02.30pm - 03.30pm",false],
      ["03.30pm - 04.30pm",true]];
  }
}

class Floor {
  rooms: Room[];
  name: string;
 

  constructor(name: string, rooms: Room[]) {
    this.rooms = rooms;
    this.name = name;
  }
}

