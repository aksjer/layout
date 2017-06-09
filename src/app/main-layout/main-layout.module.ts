import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule, MdButtonModule, MdIconModule, MdSidenavModule } from '@angular/material';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from '../contacts/contacts.component';
import { SettingsComponent } from '../settings/settings.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ContactsToolbarComponent } from '../contacts-toolbar/contacts-toolbar.component';
import { SharedService } from './shared.service';
import { SettingsToolbarComponent } from '../settings-toolbar/settings-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdSidenavModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'contacts', pathMatch: 'full' },
      { path: 'contacts', component: ContactsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  declarations: [
    MainLayoutComponent,
    ContactsComponent,
    SettingsComponent,
    NotFoundComponent,
    ContactsToolbarComponent,
    SettingsToolbarComponent
  ],
  exports: [MainLayoutComponent],
  providers: [SharedService]
})
export class MainLayoutModule { }
