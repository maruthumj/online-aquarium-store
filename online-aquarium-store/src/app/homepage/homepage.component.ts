import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
businessLoginClicked:boolean=false;
customerLoginClicked:boolean=false;
loginbuttonClicked:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  businessLogin(): boolean{
if(this.businessLoginClicked===false){
  this.loginbuttonClicked=true;
  return this.businessLoginClicked=true;
}
else{
  return this.businessLoginClicked= false;
}
  }

customerLogin(): boolean{
if(this.customerLoginClicked===false){
  this.loginbuttonClicked=true;
  return this.customerLoginClicked=true;
}
else{
  return this.customerLoginClicked= false;
}
  }

}
