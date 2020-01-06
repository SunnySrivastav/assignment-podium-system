import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../bookingService/booking-service.service';

export class Ticket{
  constructor(
  public id:number,
  public name:string,
  public qty:number,
 
  
  ){

  }
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor() { }
  private bookingServiceService:BookingServiceService
  ngOnInit() {
    
  }

  // saveTicket(name,qty){
  //   this.bookingServiceService.bookingTicket(this.name,this.qty)
  // }

}
