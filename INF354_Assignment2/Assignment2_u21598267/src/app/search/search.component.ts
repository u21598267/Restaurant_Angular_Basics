import { Component } from '@angular/core';
//Add fontawesome imports for the search icon
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  //Add fontawesome icon to the component
  faSearch = faSearch;

  constructor() { }

  ngOnInit() {
  }

  //create a function to handle the search on the localstorage variable restaurants
  searchRestaurants(searchValue: string) {
    let restaurants = JSON.parse(localStorage.getItem('restaurants') ?? '[]');
    let searchResults = restaurants.filter((restaurant: any) => {
      return restaurant.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    // create a function that creates a card for each restaurant in the search results
    this.createCards(searchResults);
  }

  createCards(restaurants: any) {
    let cards = document.getElementById('cards');
    if (cards != null)
    cards.innerHTML = '';

    restaurants.forEach((restaurant: any) => {
      let card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `

      <div class="card-content">
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
       <h3 >About</h3>
        <p style="font-family: 'Lato', sans-serif;">${restaurant.about}</p>
        </div>
      </div>
      `;
      if (cards != null)

      cards.appendChild(card);
    });




  }

}
