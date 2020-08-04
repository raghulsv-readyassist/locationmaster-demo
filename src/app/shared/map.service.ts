import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Map } from './map.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  formdata:Map;
  readonly rootURL =""

  constructor(public http : HttpClient) { }

  postmap(formData : Map){
   return this.http.post(this.rootURL,formData);
    
  }

  
}
