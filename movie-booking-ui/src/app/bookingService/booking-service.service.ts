import { Injectable } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  constructor(private http:HttpClient) { }

  // bookingTicket(name,qty){
  //   return this.http.put(`http://localhost:8080/ticket/bookTickets`);
  //    //console.log("Execute Hello World Bean Service")
  //  }
}
