import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/model/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl:string='http://localhost:3000/contacts'

  //functon for api call
  constructor(private http:HttpClient) { }
  getAllContacts():Observable<MyContact>{
    return this.http.get(this.baseurl)
  }

  //function for view a particuar contact
  viewContact(contactId:string){
    return this.http.get(`${this.baseurl}/${contactId}`)
  }

  //function for getting particular group 
  getGroupName(groupId:string){
    return this.http.get('http://localhost:3000/groups/'+groupId)
  }


  //fetch all groups from groups from http://localhost:3000/groups
  getAllGroups(){
    return this.http.get('http://localhost:3000/groups')
  }


  //api call for create an account to server
  addContact(contactBody:any){
    return this.http.post(this.baseurl,contactBody)
  }
  //function for delete contact
  deleteContact(contactId:any){
    return this.http.delete(`${this.baseurl}/${contactId}`)
  }
  //function for update contact
  updateContact(contactId:any,contactBody:any){
    return this.http.put(`${this.baseurl}/${contactId}`,contactBody)
  }
}
