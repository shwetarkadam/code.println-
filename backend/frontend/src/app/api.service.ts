import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
import { HttpClient, HttpParams , HttpHeaders } from '@angular/common/http';
  
@Injectable()  
export class ApiService {  
  
  constructor(private http: Http) { }  
  login(user){      
    return this.http.post('http://localhost:8080/login', user)  
            .map((response: Response) =>console.log(response.json()))              
  }  
  signUp(user){
    return this.http.post('http://localhost:8080/signup', user)  
            .map((response: Response) =>response.json())              
  }

  getStudent(){      
    let headers = new Headers({ 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let reqOpts = {
      params : new HttpParams()
    }
    return this.http.get('http://localhost:8080/student')  
            .map((response: Response) =>response.json())              
  }  
  
  getStudentById(){       
    return this.http.get('http://localhost:8080/student/:id')  
            .map((response: Response) => response.json())              
  }  
  createStudent(student){   
    return this.http.post('http://localhost:8080/student',student)  
            .map((response: Response) =>response.json())               
  }  
  
}  