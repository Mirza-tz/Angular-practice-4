import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart-view',
  standalone: false,
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent implements OnInit {

  cartItems: Product[] = [];
  totalPrice: number = 0;
  
  constructor(private cartService: CartService){

  }
  ngOnInit(): void {
   this.cartService.getCartItems().subscribe(data => {
    this.cartItems = data;
    this.totalPrice = this.getTotalPrice();
   })
  }

  getTotalPrice(): number {
    let total = 0;
    for(let item of this.cartItems) {
      total += item.price;
    }
    return total;
  }

  clearCart(): void {
    this.cartService.ClearCart().subscribe();
  }

  checkoutCart(): void {
    this.cartService.checkout(this.cartItems).subscribe();
  }

}
