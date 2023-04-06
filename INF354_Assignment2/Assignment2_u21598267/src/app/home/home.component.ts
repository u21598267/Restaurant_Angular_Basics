import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  //Get restuarants from local storage and parse them into an array
   restaurants = JSON.parse(localStorage.getItem('restaurants') ?? '[]');
    elements = Array(5);



  constructor() {
    let restaurants = [
      {
        "index" : 0,
        "imageurl" : "r1.jpg",
        "name": "de Albuquerque",
        "rating": 4,
        "ethnicity": "Portuguese",
        "timing_string" : "25 mins" ,
        "distance" : "1.2 km",
        "deal" : "20% off",
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
        "index" : 1,
        "imageurl" : "r2.jpg",
        "name": "Chico's Champions Chicken",
        "rating": 5,
        "ethnicity": "Mexican",
        "timing_string" : "25 mins" ,
        "distance" : "1.2 km",
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
        "index" : 2,
        "imageurl" : "r3.jpg",
        "name": "New Retro",
        "rating": 3,
        "ethnicity": "Chinese",
        "timing_string" : "25 mins" ,
        "distance" : "1.2 km",
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
        "index" : 3,
        "imageurl" : "r4.jpg",
        "name": "Gusteau's",
        "rating": 4,
        "ethnicity": "Italian",
        "timing_string" : "12 mins" ,
        "distance" : " 3 km",
        "deal" : "Buy one capuccino, get one Huletts packet free",
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
// Set item in local storage



  }

  //set a localstorage variable to keep track of the current/last restaurant selected to pass to About component
  setRestaurant(index : number) {
    let restaurant = JSON.parse(localStorage.getItem('restaurants') ?? '[]');
    restaurant = restaurant[index];
    localStorage.setItem('aboutPage', JSON.stringify(restaurant));
    //reload window to /about
    window.location.href = "/about";
  }

  orderFunction(event: Event){
    //In order to stop the setRestaurant function from firing, we need to stop the event from bubbling up
    //pretty proud to have thought of this from IMY220 :)
    event.stopPropagation();

    //TODO: Add functionality to order food
    console.log("order");
  }



}
