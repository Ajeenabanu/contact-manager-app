import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { PageNotfountComponent } from './page-notfount/page-notfount.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/contacts/details',pathMatch:'full'
  },
  // add path for contact manager
  {
    path:'contacts/details',component:ContactManagerComponent
  },
  // add path for add contact
  {
    path:'contacts/add',component:AddContactComponent
  },
  // update 
  {
    path:'contacts/edit/:contactId',component:UpdateContactComponent
  },
  {
    path:'contacts/view/:contactId',component:ViewContactComponent
  },{
    path:'**',component:PageNotfountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
