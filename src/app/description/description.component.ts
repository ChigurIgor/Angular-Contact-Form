import { Component, OnInit } from '@angular/core';
import {ContactModel} from '../contact.model';
import {ContactListService} from '../contact-list.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  currContact: ContactModel = new ContactModel('', '', '', '');

  constructor(private service: ContactListService) {
    this.service.onClickCurrCont.subscribe(contact => this.currContact = contact );

  }



  ngOnInit() {
  }

}
