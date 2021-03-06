import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { MyInputComponent } from './my-input/my-input.component';
import { ListComponent } from './list/list.component';
import { DescriptionComponent } from './description/description.component';
import {ContactListService} from './contact-list.service';

@NgModule({
  declarations: [
    AppComponent,
    MyInputComponent,
    ListComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ContactListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
