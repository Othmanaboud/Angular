import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
product: Product = new Product()
  constructor( private productservice: ProductService, private router: Router) { }

  ngOnInit(): void {
  }



  onSubmit(){
    this.productservice.saveProduct(this.product).subscribe(response =>{
      this.product = response
      this.router.navigateByUrl('/product')
    })


  }

}
