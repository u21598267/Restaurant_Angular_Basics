import { Component } from '@angular/core';
//Add fontawesome imports for the search icon
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {ServiceNameService} from "../service-name.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  //Add fontawesome icon to the component
  faSearch = faSearch;
//wrapper function for orderFunction
  order(event : Event, restaurant: any){
    ServiceNameService.orderFunction(event,restaurant);
  }
  constructor() { }

  ngOnInit() {
  }

  //This function is called when the search button is clicked
  searchRestaurants(searchValue: string) {
    let restaurants = JSON.parse(localStorage.getItem('restaurants') ?? '[]'); //Retrieve restaurants from local storage

    //Filter restaurants based on search value for: Name, Type of Food, Ratings and Price
    let searchResults = restaurants.filter((restaurant: any) => {return (
      restaurant.name == searchValue ||
      restaurant.ethnicity == searchValue ||
      restaurant.rating == searchValue ||
      restaurant.price.toString() == searchValue ||
      restaurant.distance == searchValue
    );}
    );

    this.createCards(searchResults);
  }
//This function creates cards for restaurants
  createCards(restaurants: any) {
    let cards = document.getElementById('cards');
    if (cards != null)
    cards.innerHTML = '';

    restaurants.forEach((restaurant: any) => {
      let card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `

      <div class="card-content" >
      <div class="row">
      <div class="col-3">
        <div class="card-image">
        <img src="../../assets/${restaurant.imageurl}" alt="Restaurant Image" id="card-img-rest" style="max-height: 250px;max-width: 250px">
      </div>
        <div class="card-title">
          <h3>${restaurant.name}</h3>
           <div class="row m-0">
                <p class="" >
                  <img src="assets/star_rating.png" alt="Responsive image" style="max-width: 15px;max-height: 15px"/>
                </p>

          </div>
        </div>
        <div class="card-subtitle">

          <div class="timing">
            <span class="material-icons">schedule</span>
            <span>${restaurant.timing_string}</span>
          </div>


  <div class="distance">
            <span class="material-icons">location_on</span>
            <span>${restaurant.distance}</span>
          </div>

        </div>
        <div class="card-subtitle">
          <div class="deal">
            <span class="material-icons">local_offer</span>
            <span>${restaurant.deal}</span>
          </div>
        </div>
        </div>

        <div class="col-9 ml-0" >
       <h3 style="font-family: 'Lato', sans-serif;">About</h3>
        <p style="font-family: 'Lato', sans-serif;">${restaurant.about}</p>
        </div>

        <div  class="mb-3 mt-4 ml-4">
            <button class="btn btn-dark" >Order Now</button>
          </div>
      </div>
      `;
      if (cards != null)

      cards.appendChild(card);

      //create a button and add it to the card to order food
      let orderButton = card.querySelector('button');
      orderButton?.addEventListener('click', (event: Event) => {
        this.order(event, restaurant)

      } );
    });






  }


}
