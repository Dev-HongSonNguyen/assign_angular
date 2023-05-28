import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interface/Iproduct';
import { FormBuilder} from "@angular/forms"
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product: Iproduct = {
    name: '',
    image: '',
    price: 0,
    description: ''
  }
  productForm = this.formBuilder.group({
    name: [''],
    image: [''],
    price: [0],
    description: ['']
  })
  constructor (private formBuilder: FormBuilder, private productService: ProductService, private route: ActivatedRoute, private router: Router){
    this.route.paramMap.subscribe((param)=>{
      const id = Number(param.get('id'))
      this.productService.getOneProduct(id).subscribe((product)=>{
        this.product = product
        this.productForm.patchValue({
          name: product.name,
          image: product.image,
          price: product.price,
          description: product.description
        })
      })
    })
  }
  Edit(){
    if(this.productForm.invalid){
      return
    }
    const product: Iproduct = {
      id: this.product.id,
      name: this.productForm.value.name || 'notfound',
      image: this.productForm.value.image || 'notfound',
      price: this.productForm.value.price || 0,
      description: this.productForm.value.description || 'notfound'
    }
    this.productService.editProduct(product).subscribe((data)=>{
      this.product = data;
      alert("edit thanh cong")
      this.router.navigate(["admin/product"])
    })
  }

}
