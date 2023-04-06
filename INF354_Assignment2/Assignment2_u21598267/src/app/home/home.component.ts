import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  //Get restuarants from local storage and parse them into an array
   restaurants = JSON.parse(localStorage.getItem('restaurants') ?? '[]');
    elements = Array(5);



  constructor() {
    let restaurants = [
      {
        "index" : 0,
        "imageurl" : "r1.jpg",
        "name": "de Albuquerque",
        "rating": 4,
        "ethnicity": "Italian",
        "timing_string" : "25 mins" ,
        "distance" : "1.2 km",
        "deal" : "20% off"
      },
      {
        "index" : 1,
        "imageurl" : "r2.jpg",
        "name": "Chico's Champions Chicken",
        "rating": 5,
        "ethnicity": "Mexican",
        "timing_string" : "25 mins" ,
        "distance" : "1.2 km",
        "deal" : "20% off"
      },
      {
        "index" : 2,
        "imageurl" : "r3.jpg",
        "name": "New Retro",
        "rating": 3,
        "ethnicity": "Chinese",
        "timing_string" : "25 mins" ,
        "distance" : "1.2 km",
        "deal" : "20% off"
      }
      ,
      {
        "index" : 3,
        "imageurl" : "r4.jpg",
        "name": "Gusteau's",
        "rating": 4,
        "ethnicity": "Italian",
        "timing_string" : "12 mins" ,
        "distance" : " 3 km",
        "deal" : "Buy one capuccino, get one Huletts packet free"
      }
    ];
    localStorage.setItem('restaurants', JSON.stringify(restaurants));

  }

  ngOnInit() {
// Set item in local storage



  }

  //set a localstorage variable to keep track of the current/last restaurant selected to pass to About component
  setRestaurant(index : number) {
    let restaurant = JSON.parse(localStorage.getItem('restaurants') ?? '[]');
    restaurant = restaurant[index];
    localStorage.setItem('aboutPage', JSON.stringify(restaurant));
    //reload window to /about
    window.location.href = "/about";
  }

  orderFunction(event: Event){
    //In order to stop the setRestaurant function from firing, we need to stop the event from bubbling up
    //pretty proud to have thought of this from IMY220 :)
    event.stopPropagation();

    //TODO: Add functionality to order food
    console.log("order");
  }



}
