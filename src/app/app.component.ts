import { Component, AfterContentChecked, SimpleChanges } from '@angular/core';
import { DataService } from './data.service';
import { OnInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked ,OnInit,OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    this.data.currentMessage.subscribe(message => this.message = message);
    if(this.message == "close"){
      this.closeWin();
    }
  }
  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
  myWindow: Window;
  title = 'app';
  message:string;
  ngAfterContentChecked(): void {
    if(this.message == "close"){
      this.closeWin();
    }
   }
  constructor(private data: DataService){}
  
  openWin() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.myWindow = window.open("http://localhost:4200/dealentry", "myWindow", "width=400, height=200");
}
closeWin() {
  if (this.myWindow) {
    this.myWindow.close();
  }
}
}
