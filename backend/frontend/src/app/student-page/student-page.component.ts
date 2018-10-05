import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})

export class StudentPageComponent implements OnInit  {
  studentResume: any;
  constructor() {
    this.studentResume = {
      firstname: "Edwin",
      lastname: "Clement",
      username: "edwin",
      email: "edwinclement08@gmail.com",
      phone: 9833319513,
      resume: {
        education: {
          ug: [
            {
              deg: "BE",
              clg: "Fr.Conceicao Rodrigues College of Engineering",
              startYear: "2015",
              endYear: "2019",
              stream: "Computer",
              scale: "10",
              grade: "10"
            }
          ],
          pg: [
            {
              deg: "BE",
              clg: "Fr.Conceicao Rodrigues College of Engineering",
              startYear: "2015",
              endYear: "2019",
              stream: "Computer",
              scale: "10",
              grade: "10"
            }
          ],
          phd: [
            {
              deg: String,
              clg: String,
              startYear: String,
              endYear: String,
              stream: String,
              scale: String,
              grade: String
            }
          ],
          hsc: {
            school: "abc",
            yearPass: 2018,
            board: "abc",
            scale: "abc",
            grade: "abc",
            stream:"abc"
          },
          diploma:
            {
              school: String,
              yearPass: String,
              board: String,
              scale: String,
              grade: String,
              stream: String

            },
          ssc: {
            school: "String",
            yearPass: "tring,",
            board: "String",
            scale: "String",
            grade: "String",
            stream: "String"
          }
        },

        job: [{

          profile: String,
          org: String,
          location: String,
          wfh: Boolean,
          endYear: String,
          startYear: String,
        }],
        por: [String],
        proj: [
          {
            title: String,
            strtMonth: String,
            endMonth: String,
            onGoing: Boolean,
            link: String,
            desc: String
          }
        ],
        skills: [String],
        addDetails: [String]
      }
    }
  }
  ngOnInit() {
  }

}
