import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './_services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeService } from './_services/employee.service';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryService } from './_services/inventory.service';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ControlPanelComponent } from './admin/control-panel/control-panel.component';
import { InventoryListComponent } from './admin/inventory-list/inventory-list.component';
import { AddInventoryComponent } from './admin/add-inventory/add-inventory.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './_services/category.service';
import { ProductService } from './_services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeListComponent,
    EmployeeComponent,
    InventoryComponent,
    AddInventoryComponent,
    InventoryListComponent,
    HomeComponent,
    NavComponent,
    ControlPanelComponent,
    LoginComponent,
    ProductFormComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    RouterModule.forRoot([
        { path: '', component: HomeComponent },
        { path: 'TruckInventory', component: InventoryComponent },
        { path: 'Login', component: LoginComponent },
        { path: 'AddInventory', component: ControlPanelComponent, canActivate: [AuthGuard] },
        { path: 'Products/new', component: ProductFormComponent, canActivate: [AuthGuard] }
    ]),
  ],
  providers: [
    EmployeeService,
    InventoryService,
    AuthService,
    AuthGuard,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
