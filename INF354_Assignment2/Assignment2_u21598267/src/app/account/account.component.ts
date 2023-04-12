import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  pastOrders = JSON.parse(localStorage.getItem('orderHistory') ?? '[]');
  ngOnInit() {
   // console.log(this.pastOrders);
  }


}
