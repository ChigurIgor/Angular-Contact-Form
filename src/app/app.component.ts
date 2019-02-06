import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[] = [];
  currName = '';
  currEmail = '';
  currPhone = '';
  currAddress = '';
  currContact: Contact|null = null;
  currIndex: number = -1;

  // addContact() {
  //   this.contacts.push({
  //     name: this.currName,
  //     email: this.currEmail,
  //     phone: this.currPhone,
  //     address: this.currAddress
  //   });
  //   this.currName = '';
  //   this.currEmail = '';
  //   this.currPhone = '';
  //   this.currAddress = '';
  // }


  addContact(contact) {
    // console.log("THis from Futher: "+contact);
      this.contacts.push(contact);
  }

  remove(indx: number): void {
    this.contacts.splice(indx, 1);
    if(indx === this.currIndex) {
      this.currContact = null;
    }
  }

  selectCurrent(contact: Contact, indx: number) {
this.currContact = contact;
this.currIndex = indx;

  }

  secondFoo(obj) {
    // console.log("hhhj");
    console.log('THis from Futher: ' + obj);
    console.log('THis from Futher: ' + obj.name);

  }


}

type Contact = {
  name: string,
  email: string,
  phone: string,
  address: string
}
