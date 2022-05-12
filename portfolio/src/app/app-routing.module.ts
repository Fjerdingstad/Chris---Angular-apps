import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountForm1Component } from './forms/create-account-form1/create-account-form1.component';
import { FormsIndexComponent } from './forms/forms-index/forms-index.component';
import { WelcomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './productscart1/cart/cart.component';
import { Pc1AppComponent } from './productscart1/pc1-app.component';
import { ProductDetailsComponent } from './productscart1/product-details/product-details.component';
import { ProductListComponent } from './productscart1/product-list/product-list.component';
import { Productscart1IndexComponent } from './productscart1/productscart1-index/productscart1-index.component';
import { UserSettingsForm1Component } from './forms/user-settings-form1/user-settings-form1.component';
import { FormsAppComponent } from './forms/forms-app.component';

const routes: Routes = [

  // app module
  { path:'home', component: WelcomePageComponent },
  { path:'', redirectTo:'home', pathMatch: 'full' },

  // forms
  { path: 'forms',
    component: FormsAppComponent,
    children: [
      { path: 'index', component: FormsIndexComponent },
      { path: '', redirectTo:'index', pathMatch: 'full'},
      { path: 'user-settings-form1', component: UserSettingsForm1Component },
      { path: 'create-account-form1', component: CreateAccountForm1Component }
    ],
},

  // pc1module
  { path: 'product1',
    component: Pc1AppComponent,
    children: [
      { path: 'index', component: Productscart1IndexComponent},
      { path: '', redirectTo:'index', pathMatch: 'full'},
      { path: 'product1-list', component: ProductListComponent },
      { path: 'cart', component: CartComponent },
      { path: ':faceShortname', component: ProductDetailsComponent }
    ],
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
