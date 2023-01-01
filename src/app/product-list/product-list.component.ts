import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productListIsOpen: boolean;

  constructor() {
    this.productListIsOpen = false;
  }

  ngOnInit(): void {
  }

  mouseEntered(): void {
    this.productListIsOpen = true;
  }

  mouseLeft() {
    // this.productListIsOpen = false;
  }
}
