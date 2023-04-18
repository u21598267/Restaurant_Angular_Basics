import { Injectable } from '@angular/core';

@Injectable()
export class ServiceNameService {


  static orderFunction(order: any){

    let temp ;
    temp = localStorage.getItem('orders'); //get users current orders stored
    temp = JSON.parse(temp ?? '[]');

    let newOrderlist : any = [];
    for(let i = 0; i < temp.length; i++){
      newOrderlist.push({"name":temp[i].name,"price":temp[i].price,"imageurl":temp[i].imageurl}); //push already stored name,price and imageUrl
      }

    //add new order
    newOrderlist.push({"name":order.name,"price":order.price,"quantity":1,"imageurl":order.imageurl});

    //add newV to the localstorage variable and don't remove the old orders
    localStorage.setItem('orders',JSON.stringify(newOrderlist));



  }
}
