import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { DashboardComponent } from './page/Admin/dashboard/dashboard.component';
import { ProductManagerComponent } from './page/Admin/product-manager/product-manager.component';
import { ProductListComponent } from './page/Client/product-list/product-list.component';
import { HomePageComponent } from './page/Client/home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './page/Admin/product-add/product-add.component';
import { ProductEditComponent } from './page/Admin/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutClientComponent,
    LayoutAdminComponent,
    DashboardComponent,
    ProductManagerComponent,
    ProductListComponent,
    HomePageComponent,
    ProductAddComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
