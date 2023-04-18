import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  totalPrice = 0; //used to calculate order total

  constructor(private router: Router) {
    let orders = localStorage.getItem('orders'); //get the order from local storage
    orders = JSON.parse(orders ?? '[]'); //parse the order

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.calculateTotal(orders);
      }
    });
  }

  ngOnInit() {}
  //get the order from local storage
  orders = localStorage.getItem('orders');

  calculateTotal(orders: any) {
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
      total += orders[i].price;
    }
    this.totalPrice = total;
  }

  //Code for the modal
  showModal = false;

  openModal() {
    this.showModal = true;
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

  inputDelivery = '1060 Duxbury Road';
  showDeliveryInput = false;
}
