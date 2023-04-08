import { Component, Output,EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('myAnimation', [
      state('inactive', style({
        transform: 'scale(1) rotate(0deg)'
      })),
      state('active', style({
        transform: 'scale(1.5) rotate(720deg)'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ])
  ]
})
export class ModalComponent {
@Output() close = new EventEmitter();

instructions = localStorage.getItem('inputInstructions');
delivery = localStorage.getItem('inputDelivery');

//animation for payment
  state = 'inactive';
  hideAnimation = true;
  toggleState() {
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
    this.hideAnimation = false ;
  }
}
