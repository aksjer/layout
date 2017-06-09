import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../main-layout/shared.service';
import { SettingsToolbarComponent } from '../settings-toolbar/settings-toolbar.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.secondaryToolbar$.next(SettingsToolbarComponent);
  }

  ngOnDestroy() {
    this.sharedService.secondaryToolbar$.next(undefined);
  }

}
