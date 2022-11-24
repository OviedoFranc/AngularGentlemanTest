import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components';
import {DataSharing} from "./services/data-sharing.service";

export const DataSharingState = new DataSharing();

@NgModule({
  declarations: [AppComponent],
  imports: [ToolbarComponent, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
