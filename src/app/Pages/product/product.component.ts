import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products!: Product [];

  constructor(private productserv: ProductService,private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    return this.productserv.getProducts().subscribe(response =>{
      console.log(response)
    this.products=response
    },
    (err) => console.log(err)

    )
  }

  updateProduct(id: any){
    this.router.navigate(['/update-product',id])
  }

  delete(id: number){
    this.productserv.deleteProduct(id).subscribe(data =>{
      console.log(data);
      this.getProducts();
    })

  }
}
