import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POST API Connectivity Test';
  resj:any;
    constructor( private api:GetApiService){

  }

  ngOnInit(){
    this.listTask();
  }

  listTask(){

    this.resj = this.api.postCall();

  }
}
