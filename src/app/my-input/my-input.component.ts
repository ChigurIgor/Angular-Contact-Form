import {Component, EventEmitter, OnInit, Output} from '@angular/core';

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

   contact: Contact = {
    name: '',
    email: '',
    phone: '',
    address: ''
  };
   @Output() someAdd = new EventEmitter();



  addContact() {
    // this.contact({
    //   name: this.currName,
    //   email: this.currEmail,
    //   phone: this.currPhone,
    //   address: this.currAddress
    // });
    this.contact.name = this.currName;
    this.contact.email = this.currEmail;
    this.contact.phone = this.currPhone;
    this.contact.address = this.currAddress;
    this.someAdd.emit(this.contact);



    // console.log(this.contact);

    this.currName = '';
    this.currEmail = '';
    this.currPhone = '';
    this.currAddress = '';
  }




  ngOnInit() {
  }

}


type Contact = {
  name: string,
  email: string,
  phone: string,
  address: string
}
