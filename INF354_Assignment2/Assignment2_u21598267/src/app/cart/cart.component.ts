import { Component } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  totalPrice = 0;

  constructor(private router: Router) {
    let orders = localStorage.getItem('orders');
    orders = JSON.parse(orders ?? '[]');

      this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
          this.calculateTotal(orders);
        }

      });
  }

  ngOnInit() {

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

  calculateTotal(orders: any){
    let total = 0;
    for(let i = 0; i < orders.length; i++){
      total += orders[i].price;
    }
   this.totalPrice = total;
  }

  //Code for the modal
  showModal = false;


  openModal() {
    this.showModal = true;
  //set localstorage for input instructions
    //clear the localstorage for input instructions and delivery
    localStorage.removeItem('inputInstructions');
    localStorage.setItem('inputInstructions', this.inputInstructions);
    localStorage.removeItem('inputDelivery');
    localStorage.setItem('inputDelivery', this.inputDelivery);
  }

  closeModal() {
    this.showModal = false;
  }

  //To show and hide inputs for Delivery & Instructions. Store input values
  inputInstructions = '';
  showInstructionInput = false;

  inputDelivery = '';
  showDeliveryInput = false;


}
