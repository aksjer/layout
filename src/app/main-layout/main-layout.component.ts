import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { SharedService } from './shared.service';
import { ContactsToolbarComponent } from '../contacts-toolbar/contacts-toolbar.component';
import { SettingsToolbarComponent } from '../settings-toolbar/settings-toolbar.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  entryComponents: [ContactsToolbarComponent, SettingsToolbarComponent]
})
export class MainLayoutComponent implements OnInit {

  menuItems: MenuItem[] = [
    { icon: 'people', text: 'Contacts', route: 'contacts' },
    { icon: 'settings', text: 'Paramètres', route: 'settings' }
  ]

  @ViewChild('secondaryToolbar', { read: ViewContainerRef }) secondaryToolbar: ViewContainerRef;


  constructor(private sharedService: SharedService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.sharedService.secondaryToolbar$.subscribe((component: { new () }) => {
      component ? this.secondaryToolbar.createComponent(this.componentFactoryResolver.resolveComponentFactory(component))
        : this.secondaryToolbar.remove();
    }
    );
  }

}
