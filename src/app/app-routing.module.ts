import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { HomePageComponent } from './page/Client/home-page/home-page.component';
import { ProductListComponent } from './page/Client/product-list/product-list.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { DashboardComponent } from './page/Admin/dashboard/dashboard.component';
import { ProductManagerComponent } from './page/Admin/product-manager/product-manager.component';
import { ProductAddComponent } from './page/Admin/product-add/product-add.component';
import { ProductEditComponent } from './page/Admin/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: "", component: LayoutClientComponent, children: [
      {
        path:"", component: HomePageComponent
      },
      {
        path: "product", component: ProductListComponent
      }
    ]
  },
  {
    path: "admin", component: LayoutAdminComponent, children: [
      {
        path: "", redirectTo: "dashboard", pathMatch:"full"
      },
      {
        path:"dashboard", component: DashboardComponent
      },
      {
        path:"product", component: ProductManagerComponent
      },
      {
        path:"product/add",component: ProductAddComponent
      },
      {
        path:"product/edit/:id", component: ProductEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
