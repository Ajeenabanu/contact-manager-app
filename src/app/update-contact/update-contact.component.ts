import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/model/myContact';
import { MyGroup } from 'src/model/MyGroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit{

  contactsId:string=''

  contact:MyContact={} as MyContact

  groups:MyGroup[]={} as MyGroup[]


  constructor(private activateroute:ActivatedRoute,private api:ApiService,private router:Router){}
  
ngOnInit(): void {

  //get contact id from url parameter using activated route class

  this.activateroute.params.subscribe((data:any)=>{
    console.log(data.contactId);
    this.contactsId=data.contactId
  })
  //api call for getting particular contact
  this.api.viewContact(this.contactsId).subscribe(
    (data:any)=>{
      this.contact=data
      console.log(this.contact);
      
    })
    this.api.getAllGroups().subscribe((data:any)=>{
      this.groups=data
    }
    )
  
}
updateContact(){
  this.api.updateContact(this.contactsId,this.contact)
  .subscribe((data:any)=>{
    this.router.navigateByUrl('')
  })
}
}
