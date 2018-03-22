import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DealEntryComponent } from './deal-entry/deal-entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlotterComponent } from './blotter/blotter.component';
import {AgGridModule} from "ag-grid-angular/main";

@NgModule({
  declarations: [
    AppComponent,
    DealEntryComponent,
    BlotterComponent
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents(
      [])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
