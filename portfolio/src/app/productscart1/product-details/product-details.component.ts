import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { faces, IProducts1 } from '../products1';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  title = "Face";
  faces: IProducts1 | undefined;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    // to get face shortname in route link
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('faceShortname'));
    this.faces = faces.find(faces => faces.shortname === productIdFromRoute);
  }

  addToCart(faces: IProducts1) {
    this.cartService.addToCart(faces);
    window.alert('Your face has been added to the cart!');
  }

  onBack(): void{
    this.router.navigate(['/product1/product1-list']);
  }

}
