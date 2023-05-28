import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productData: any
  constructor (private productService: ProductService){}
  ngOnInit(){
    this.productService.getAllProduct().subscribe((data)=>{
      this.productData = data
    })
  }
}
