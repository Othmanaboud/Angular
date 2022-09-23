import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id !: number;

  product: Product = new Product();

  constructor(private productsrv: ProductService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.productsrv.getProductById(this.id).subscribe(response => {
      this.product = response
    }, error => console.log(error))
  }

  updateProduct(){
    this.productsrv.updteProduct(this.id ).subscribe(data =>{
      console.log(data);
      this.product = new Product();
      this.router.navigateByUrl('/')
    })
  }

  onSubmit(){
    this.updateProduct();
    

  }

}
