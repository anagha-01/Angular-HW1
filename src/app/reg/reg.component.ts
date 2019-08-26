import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  getName=''
  getAdd=''
  getGender=''
  getDob=''
  getDist=''
  getPlace=''
  getMob=''
  getEmail=''
  getUsername=''


  onSubmit(data:NgForm){
    console.log(data.value)
    this.getName=data.value.name
    this.getAdd=data.value.add
    this.getGender=data.value.male
    this.getDob=data.value.dob
    this.getDist=data.value.dist
    this.getPlace=data.value.place
    this.getMob=data.value.mob
    this.getEmail=data.value.email
    this.getUsername=data.value.username
    console.log(this.getName)


    
  }
  constructor() { }

  ngOnInit() {
  }

}
