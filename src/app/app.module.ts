import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainlayoutComponent } from './Layouts/mainlayout/mainlayout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './Pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LoginComponent } from './Pages/login/login.component';
import { BoatComponent } from './Pages/boat/boat.component';
import { NewBoatComponent } from './Pages/new-boat/new-boat.component';
import { EditboatComponent } from './Pages/editboat/editboat.component';
import { LicenseComponent } from './Pages/license/license.component';
import { AddlicenseComponent } from './Pages/addlicense/addlicense.component';
import { EditlicenseComponent } from './Pages/editlicense/editlicense.component';
import { ProductComponent } from './Pages/product/product.component';
import { NewProductComponent } from './Pages/new-product/new-product.component';
import { UpdateProductComponent } from './Pages/update-product/update-product.component';
import { BoatDatailComponent } from './Pages/boat-datail/boat-datail.component';


@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent,
    HomeComponent,
    LoginComponent,
    BoatComponent,
    NewBoatComponent,
    EditboatComponent,
    LicenseComponent,
    AddlicenseComponent,
    EditlicenseComponent,
    ProductComponent,
    NewProductComponent,
    UpdateProductComponent,
    BoatDatailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatRadioModule,
    MatDatepickerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
