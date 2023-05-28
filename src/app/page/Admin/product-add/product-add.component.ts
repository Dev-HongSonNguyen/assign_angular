import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms"
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/interface/Iproduct';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  productForm = this.formBuilder.group({
    name: [''],
    image: [''],
    price: [0],
    description: ['']
  })
  constructor (private formBuilder: FormBuilder, private productService: ProductService, private router: Router){}
  Add(){
    if(this.productForm.invalid){
      return
    }
    const product: Iproduct = {
      name: this.productForm.value.name || 'notfound',
      image: this.productForm.value.image || 'notfound',
      price: this.productForm.value.price || 0,
      description: this.productForm.value.description || 'notfound'
    }
    this.productService.addProduct(product).subscribe(()=>{
      alert("them thanh cong")
      this.router.navigate(["admin/product"])
    })
  }
}
