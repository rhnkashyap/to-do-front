import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  readonly APIURL = "http://localhost:3000";

  listData ={
    name: 'Abhay',
  }

  // resJson;

  constructor(
    private http:HttpClient
  ) { 
    // this.http.post(this.APIURL + '/list-task', this.listData).toPromise()
    // .then((data:any) => {
    //   console.log(data);
    //   this.resJson = JSON.stringify(data.json); 
    // });
  }

  postCall(){
    this.http.post(this.APIURL + '/list-task', this.listData).toPromise()
    .then((data:any) => {
      console.log('In postCall()');
      console.log(data);
      return data;
    }); 
    
    
  }
}
