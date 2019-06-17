import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flights } from '../Shared/flightdetails';
import { Flight  } from '../Model/Flight';
@Injectable({
  providedIn: 'root',
})
export class FlightService {
  temp:Flight[];
  
  constructor() { }
  searchFlights(): Observable<Flight[]> {
    // TODO: send the message _after_ fetching the heroes
    
    return of(Flights);
   
  }
}
