import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {
  company:any;
  studentList:any;

  currentPage:string;

  constructor() { 

    this.currentPage = "companyProfile";

    this.company = {
      name : "Morgan Stanley",
      description: "Morgan Stanley mobilizes capital to help governments, corporations, institutions and individuals around the world achieve their financial goals. For over 75 years, the firm’s reputation for using innovative thinking to solve complex problems has been well earned and rarely matched. A consistent industry leader throughout decades of dramatic change in modern finance, Morgan Stanley will continue to break new ground in advising, serving and providing new opportunities for its clients. Morgan Stanley is committed to maintaining the first-class service and high standard of excellence that have always defined the firm. At its foundation are four core values — putting clients first, doing the right thing, leading with exceptional ideas and giving back — that guide its more than 55,000 employees",
      website:"http://www.morganstanley.com",
      headquarters:"New York, NY",
      company_type:"Public Company",
      company_size:"10,001+ employees",
      specialties:"Sales & Trading, Investment Banking, Investment Management, Prime Brokerage, Research, Institutional Consulting, Wealth Management, and Private Wealth Management",
      job_profile:"Java and Javascript Developer"
    }
    this.studentList = [
      {
        name:"Joshua Noronha",
        resume:"https://www.linkedin.com/company/morgan-stanley/",
        isSelected:true
      },
      {
        name:"Joshua Noronha",
        resume:"https://www.linkedin.com/company/morgan-stanley/",
        isSelected:true
      }
    ]
  }

  ngOnInit() {
  }
  viewStudent(){
    this.currentPage = "studentApplications";
  }
  eligibilityCriteria(){
    this.currentPage = "eligibilityForm";
  }
  companyProfile(){
    this.currentPage = "companyProfile";
  }
}
