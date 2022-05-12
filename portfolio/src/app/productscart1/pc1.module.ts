import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Productscart1IndexComponent } from './productscart1-index/productscart1-index.component';
import { Pc1AppComponent } from './pc1-app.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    Productscart1IndexComponent,
    Pc1AppComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ],
  exports:[Pc1AppComponent]
})
export class Pc1Module { }
