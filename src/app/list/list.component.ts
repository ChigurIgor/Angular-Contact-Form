import { Component, OnInit } from '@angular/core';
import {ContactModel} from '../contact.model';
import {ContactListService} from '../contact-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  contacts: ContactModel[] = [];

  constructor(private service: ContactListService) {

    this.service.onClick.subscribe(contacts => this.contacts = contacts );
    console.log('from List:' + this.contacts);
  }

  ngOnInit() {
  }


  load() {
    this.contacts = [];
    for ( let i = 0; i < this.service.size(); i++) {
      this.contacts.push(this.service.getById(i));
    }
  }

  remove(contact: ContactModel) {
    this.service.remove( contact );
    this.load();
  }

  selectCurrent(contact: ContactModel, index: number) {
    this.service.selectCurrent(contact, index);
  }

}
