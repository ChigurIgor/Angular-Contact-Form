import { Component, OnInit } from '@angular/core';
import {ContactModel} from '../contact.model';
import {ContactListService} from '../contact-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private service: ContactListService) {
  }
  contacts: ContactModel[] = [];

  load() {
    this.contacts = [];
    for ( let i = 0; i < this.service.size(); i++) {
      this.contacts.push(this.service.getById(i));
    }
  }



  ngOnInit() {
    this.service.added.subscribe(
      console.log('!')
      // should put focus() on input
    );

  }

}
