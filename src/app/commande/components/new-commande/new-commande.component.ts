import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/product';

import { AuthenticationService } from '../../../authentication/services/authentication.service';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-new-commande',
  templateUrl: './new-commande.component.html',
  styleUrls: ['./new-commande.component.scss']
})
export class NewCommandeComponent implements OnInit {

  products!: Product[];
  

  constructor(
    private productService: ProductService,
    public authenticationService : AuthenticationService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe({
      next:(data)=>{
        this.products = data;
      },
      error:(err)=>{
        alert("Error while pending products: "+err);
      }
    })
  }

  deleteProduct(p:Product){
    this.productService.deleteProduct(p)
  }

  editProduct(id: Number){
    this.router.navigateByUrl("admin/editProduct/"+id);
  }

}
