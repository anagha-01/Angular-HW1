import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  getName=''
  getPswd=''

  onSubmit(data:NgForm){
    console.log(data.value)
    this.getName=data.value.name
    this.getPswd=data.value.pswd
    console.log(this.getName)
    console.log(this.getPswd)
  }

  constructor() { }

  ngOnInit() {
  }

}
