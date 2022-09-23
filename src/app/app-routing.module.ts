import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './Layouts/mainlayout/mainlayout.component';
import { AddlicenseComponent } from './Pages/addlicense/addlicense.component';
import { BoatDatailComponent } from './Pages/boat-datail/boat-datail.component';
import { BoatComponent } from './Pages/boat/boat.component';
import { EditboatComponent } from './Pages/editboat/editboat.component';
import { EditlicenseComponent } from './Pages/editlicense/editlicense.component';

import { HomeComponent } from './Pages/home/home.component';
import { LicenseComponent } from './Pages/license/license.component';
import { LoginComponent } from './Pages/login/login.component';
import { NewBoatComponent } from './Pages/new-boat/new-boat.component';
import { NewProductComponent } from './Pages/new-product/new-product.component';
import { ProductComponent } from './Pages/product/product.component';
import { UpdateProductComponent } from './Pages/update-product/update-product.component';

const routes: Routes = [
  {
    path: '',
    component:MainlayoutComponent,
    children:[
      {
        path: '',
        component:HomeComponent
      },
      {
        path: 'boat',component:BoatComponent
      },
      {path: 'newBoat',component:NewBoatComponent},
      {path: 'editboat/:id',component:EditboatComponent},
      {path: 'license',component:LicenseComponent},
      {path: 'addlicense',component:AddlicenseComponent},
      {path:'editlicense/:id',component:EditlicenseComponent},
      {path: 'product', component:ProductComponent},
      {path: 'newProduct',component:NewProductComponent},
      {path: 'update-product/:id',component:UpdateProductComponent},
      {path: 'boat-details/:id',component: BoatDatailComponent}
     
     
    ]
    
  },
  {
    path: 'login',
    component:LoginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
