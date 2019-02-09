import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ContactListService} from '../contact-list.service';
import {ContactModel} from '../contact.model';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.css']
})
export class MyInputComponent implements OnInit {

  // constructor() { }
  currName = '';
  currEmail = '';
  currPhone = '';
  currAddress = '';
  currlastName = '';

  constructor(private service: ContactListService ) {
  }






  ngOnInit(): void {
  }




    //  contact: Contact = {
  //   name: '',
  //   email: '',
  //   phone: '',
  //   address: ''
  // };


  // addContact() {
  //   // this.contact({
  //   //   name: this.currName,
  //   //   email: this.currEmail,
  //   //   phone: this.currPhone,
  //   //   address: this.currAddress
  //   // });
  //   this.contact.name = this.currName;
  //   this.contact.email = this.currEmail;
  //   this.contact.phone = this.currPhone;
  //   this.contact.address = this.currAddress;
  //   this.someAdd.emit(this.contact);
  //
  //
  //
  //   // console.log(this.contact);
  //
  //   this.currName = '';
  //   this.currEmail = '';
  //   this.currPhone = '';
  //   this.currAddress = '';
  // }


//   sendString(name: string, lastname: string) {
// // console.log(name + ' ' + lastname);
//     this.secondEmmiter.emit({name : name, lastname : lastname});
// }


  addContact(nameInput: string, emailInput: string, phoneInput: string, addressInput: string):void {
    this.service.add(new ContactModel(nameInput, emailInput, phoneInput, addressInput));
  }
}



