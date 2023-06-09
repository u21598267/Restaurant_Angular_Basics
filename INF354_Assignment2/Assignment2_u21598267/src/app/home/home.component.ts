import { Component } from '@angular/core';
import { ServiceNameService } from '../service-name.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ServiceNameService]
})
export class HomeComponent {
  //Get restuarants from local storage and parse them into an array
   restaurants = JSON.parse(localStorage.getItem('restaurants') ?? '[]');



  constructor(private orderFunction: ServiceNameService) {
    let restaurants = [
      {
        "price": 50,
        "index" : 0,
        "imageurl" : "r1.jpg",
        "name": "de Albuquerque",
        "rating": 4,
        "ethnicity": "Portuguese",
        "timing_string" : "25 mins" ,
        "distance" : "12km",
        "deal" : "R100 for 4",
        "about" :    "Welcome to our restaurant, where we offer an exceptional dining experience that combines the rich flavors of traditional Portuguese cuisine with a sophisticated, upmarket atmosphere. Our chefs use only the finest ingredients to create dishes that are both delicious and beautifully presented.\n" +
          "\n" +
          "Our menu features a wide variety of dishes, from classic favorites like Bacalhau à Brás and Cozido à Portuguesa to more contemporary creations like our signature Cataplana de Marisco. We also offer an extensive selection of vegetarian and gluten-free options to accommodate all dietary needs.\n" +
          "\n" +
          "Our restaurant has been awarded 3 stars for its outstanding food, service, and ambiance. Our elegant dining room is the perfect setting for a romantic dinner or a special occasion with friends and family. We also offer private dining rooms for larger groups or business meetings.\n" +
          "\n" +
          "At our restaurant, we strive to provide our guests with an unforgettable dining experience. Our attentive staff will ensure that your every need is met, and our sommelier will be happy to help you select the perfect wine to complement your meal.\n" +
          "\n" +
          "We look forward to welcoming you to our restaurant and sharing our passion for fine Portuguese cuisine with you.\n"
      },
      {
        "price": 150,
        "index" : 1,
        "imageurl" : "r2.jpg",
        "name": "Chico's Champions Chicken",
        "rating": 5,
        "ethnicity": "Mexican",
        "timing_string" : "25 mins" ,
        "distance" : "11km",
        "deal" : "20% off",
        "about" :    "Welcome to our restaurant, where we offer an exquisite dining experience that combines the best of traditional Chinese cuisine with a modern, upmarket atmosphere. Our chefs use only the freshest ingredients to create dishes that are both delicious and visually stunning.\n" +
          "\n" +
          "Our menu features a wide variety of dishes, from classic favorites like Kung Pao Chicken and Moo Shu Pork to more contemporary creations like our signature Seafood Delight. We also offer an extensive selection of vegetarian and gluten-free options to accommodate all dietary needs.\n" +
          "\n" +
          "Our restaurant has been awarded 3 stars for its exceptional food, service, and ambiance. Our elegant dining room is the perfect setting for a romantic dinner or a special occasion with friends and family. We also offer private dining rooms for larger groups or business meetings.\n" +
          "\n" +
          "At our restaurant, we strive to provide our guests with an unforgettable dining experience. Our attentive staff will ensure that your every need is met, and our sommelier will be happy to help you select the perfect wine to complement your meal.\n" +
          "\n" +
          "We look forward to welcoming you to our restaurant and sharing our passion for fine Chinese cuisine with you."
      },
      {
        "price": 100,
        "index" : 2,
        "imageurl" : "r3.jpg",
        "name": "New Retro",
        "rating": 3,
        "ethnicity": "Chinese",
        "timing_string" : "25 mins" ,
        "distance" : "10km",
        "deal" : "20% off",
        "about" :    "Welcome to our restaurant, where we offer an exquisite dining experience that combines the best of traditional Chinese cuisine with a modern, upmarket atmosphere. Our chefs use only the freshest ingredients to create dishes that are both delicious and visually stunning.\n" +
          "\n" +
          "Our menu features a wide variety of dishes, from classic favorites like Kung Pao Chicken and Moo Shu Pork to more contemporary creations like our signature Seafood Delight. We also offer an extensive selection of vegetarian and gluten-free options to accommodate all dietary needs.\n" +
          "\n" +
          "Our restaurant has been awarded 3 stars for its exceptional food, service, and ambiance. Our elegant dining room is the perfect setting for a romantic dinner or a special occasion with friends and family. We also offer private dining rooms for larger groups or business meetings.\n" +
          "\n" +
          "At our restaurant, we strive to provide our guests with an unforgettable dining experience. Our attentive staff will ensure that your every need is met, and our sommelier will be happy to help you select the perfect wine to complement your meal.\n" +
          "\n" +
          "We look forward to welcoming you to our restaurant and sharing our passion for fine Chinese cuisine with you."
      }
      ,
      {
        "price": 100,
        "index" : 3,
        "imageurl" : "r4.jpg",
        "name": "Gusteau's",
        "rating": 4,
        "ethnicity": "Italian",
        "timing_string" : "12 mins" ,
        "distance" :  "12km",
        "deal" : "Buy one capuccino, get one Huletts merch free",
        "about" :    "Welcome to our restaurant, where we offer an exquisite dining experience that combines the best of traditional Chinese cuisine with a modern, upmarket atmosphere. Our chefs use only the freshest ingredients to create dishes that are both delicious and visually stunning.\n" +
          "\n" +
          "Our menu features a wide variety of dishes, from classic favorites like Kung Pao Chicken and Moo Shu Pork to more contemporary creations like our signature Seafood Delight. We also offer an extensive selection of vegetarian and gluten-free options to accommodate all dietary needs.\n" +
          "\n" +
          "Our restaurant has been awarded 3 stars for its exceptional food, service, and ambiance. Our elegant dining room is the perfect setting for a romantic dinner or a special occasion with friends and family. We also offer private dining rooms for larger groups or business meetings.\n" +
          "\n" +
          "At our restaurant, we strive to provide our guests with an unforgettable dining experience. Our attentive staff will ensure that your every need is met, and our sommelier will be happy to help you select the perfect wine to complement your meal.\n" +
          "\n" +
          "We look forward to welcoming you to our restaurant and sharing our passion for fine Chinese cuisine with you."
      }
    ];
    localStorage.setItem('restaurants', JSON.stringify(restaurants));

  }

  ngOnInit() {

  }


  //wrapper function for orderFunction
  order(restaurant : any){
    ServiceNameService.orderFunction(restaurant);
  }





}
