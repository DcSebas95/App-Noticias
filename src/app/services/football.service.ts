import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor(private http:HttpClient
    ) {}
    getservice(){
      
      return this.http.get(environment.serviceFootball)
    }

}
