import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/model/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})

export class ContactManagerComponent implements OnInit {
  allContacts:MyContact[]=[]
  // heading='khhfddzxgmjjh'

  Contact: any;
  searchkey:string=''

  constructor(private api:ApiService){}
  ngOnInit(): void {
    // this.api.getAllContacts().subscribe((data:any)=>{
    //   this.allContacts=data
    //   console.log(data);
    // })
    this.getAllContact()
  }
  //get all contact
  getAllContact(){
    this.api.getAllContacts().subscribe((data:any)=>{
      this.allContacts=data
      console.log(data);
    })
  }
  
 //search
 search(events:any){
  console.log(events.target.value);
  this.searchkey=events.target.value
 }
 deleteContact(contactId:any){
  this.api.deleteContact(contactId)
  .subscribe((data:any)=>{
    this.getAllContact()
  })
 }
 
}
