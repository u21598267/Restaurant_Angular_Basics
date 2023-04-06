import { Injectable } from '@angular/core';

@Injectable()
export class ServiceNameService {


  static orderFunction(event: Event) {
    //In order to stop the setRestaurant function from firing, we need to stop the event from bubbling up
    //pretty proud to have thought of this from IMY220 :)
    event.stopPropagation();

    //TODO: Add functionality to order food
    console.log("order");
  }
}
