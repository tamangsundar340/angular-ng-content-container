import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  isProductOnline = true;

  product = [
    {
      name:'Laptop',
      price: 500
    },
    {
      name:'Mobile',
      price: 500
    },
    {
      name:'Earpod',
      price: 500
    },
  ]

  ngOnInit(): void {
  }

}
