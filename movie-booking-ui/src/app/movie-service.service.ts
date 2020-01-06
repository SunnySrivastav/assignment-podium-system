import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListmovieComponent, Movie } from '../app/listmovie/listmovie.component';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http:HttpClient) {
    
   }

  getmovieList(){
     console.log("Execute Hello World Bean Service")

    return this.http.get<Movie[]>(`http://localhost:8081/ticket/getMovie`);
   }
}
