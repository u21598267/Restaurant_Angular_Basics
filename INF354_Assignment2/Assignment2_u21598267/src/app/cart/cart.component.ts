import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  constructor() {
  }

  ngOnInit() {

  let orders = JSON.parse(localStorage.getItem('orders') ?? '[]');
console.log(orders);


  }
  //get the order from local storage
  orders = localStorage.getItem('orders');


  //this function creates cards for orders
  createCards(orders: any) {
   let cards = document.getElementById('cards');
    if (cards != null)
    cards.innerHTML = '';
    orders.forEach((order: any) => {
      let card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `

      <div class="card-content">
      <div class="row">
      <div class="col-3">
        <div class="card-image">
        <img src="../../assets/${orders.imageurl}" alt="Restaurant Image" id="card-img-rest" style="max-height: 250px;max-width: 250px">
      </div>
        <div class="card-title">
          <h3>${orders.name}</h3>
           <div class="row m-0">
                <p class="" >
                  <img src="assets/star_rating.png" alt="Responsive image" style="max-width: 15px;max-height: 15px"/>
                </p>

          </div>
        </div>
        <div class="card-subtitle">

          <div class="timing">
            <span class="material-icons">schedule</span>
            <span>${orders.timing_string}</span>
          </div>


  <div class="distance">
            <span class="material-icons">location_on</span>
            <span>${orders.distance}</span>
          </div>

        </div>
        <div class="card-subtitle">
          <div class="deal">
            <span class="material-icons">local_offer</span>
            <span>${orders.deal}</span>
          </div>
        </div>
        </div>

        <div class="col-9 ml-0" >
       <h3 style="font-family: 'Lato', sans-serif;">About</h3>
        <p style="font-family: 'Lato', sans-serif;">${orders.about}</p>
        </div>

        <div  class="mb-3 mt-4 ml-4">
            <button class="btn btn-dark" >Order Now</button>
          </div>
      </div>
      `;
    } );

  }


}
