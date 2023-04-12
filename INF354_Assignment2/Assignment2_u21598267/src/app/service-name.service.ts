import { Injectable } from '@angular/core';

@Injectable()
export class ServiceNameService {


  static orderFunction(event: Event,order: any){
    //In order to stop the setRestaurant function from firing, we need to stop the event from bubbling up
    //pretty proud to have thought of this from IMY220 :)
    event.stopPropagation();
    event.preventDefault();
    //create a localstorage variable called orders
    let temp ;
    temp = localStorage.getItem('orders');
    //add order to the temp variable
    temp = JSON.parse(temp ?? '[]');
    let newV : any = [];
    for(let i = 0; i < temp.length; i++){
      newV.push({"name":temp[i].name,"price":temp[i].price,"imageurl":temp[i].imageurl});
      }
    newV.push({"name":order.name,"price":order.price,"quantity":1,"imageurl":order.imageurl});




    //add newV to the localstorage variable and don't remove the old orders
    localStorage.setItem('orders',JSON.stringify(newV));



  }
}
