import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactsToolbarComponent } from '../contacts-toolbar/contacts-toolbar.component';
import { SharedService } from '../main-layout/shared.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, OnDestroy {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.secondaryToolbar$.next(ContactsToolbarComponent);
  }

  ngOnDestroy() {
    this.sharedService.secondaryToolbar$.next(undefined);
  }

}
