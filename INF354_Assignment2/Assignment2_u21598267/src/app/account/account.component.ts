import { Component } from '@angular/core';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  pastOrders = JSON.parse(localStorage.getItem('orderHistory') ?? '[]');
  ngOnInit() {
  this.accountStatus();

  }

  user = JSON.parse(localStorage.getItem('user') ?? '{}');
  userSet = false;

  accountStatus(){
    if (this.user.name == undefined || this.user.phone == undefined || this.user.email == undefined) {
      this.userSet = false;
    } else {
      this.userSet = true;
    }
  }

  //get all the values from form and store in local storage
  saveUser(form: any) {

    localStorage.setItem('user', JSON.stringify(form.value));
    this.user = JSON.parse(localStorage.getItem('user') ?? '{}');
    this.accountStatus();

  }

  //edit user details
  editUser() {
    this.userSet = false; //I have not cleared localstorage in case user cancels move to edit
  }

  reOrder(){
    //set the order to the current order
    localStorage.setItem('orders', JSON.stringify(this.pastOrders[this.pastOrders.length - 1]));
    //go to the order page
    window.location.href = '/cart';
  }


}
