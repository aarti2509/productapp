import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ViewProductListComponent } from './product/view-product-list/view-product-list.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"product" , component:AddProductComponent},
  {path:"view-product", component:ViewProductListComponent},
  {path:"login", component:LoginComponent},
  {path:"", component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
