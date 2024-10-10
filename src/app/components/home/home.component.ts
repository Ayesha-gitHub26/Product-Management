import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "../search/search.component";
import { ProductService } from '../../product.service';
import { inject } from '@angular/core';
import { Product } from '../../types/product';
import { Router } from '@angular/router';  // Corrected Router import

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']  // Corrected styleUrls
})
export class HomeComponent {
  products: Product[] = [];
  filteredProduct: Product[] = [];
  productService = inject(ProductService);
  router = inject(Router);  // Injecting Angular Router

  ngOnInit() {
    this.productService.getProduct().subscribe((result) => {
      console.log(result);
      this.products = result;
      this.filteredProduct = this.products;
    });
  }

  onViewProduct(product: Product) {
    console.log("OnViewProduct", product);
    this.router.navigateByUrl(`/product/${product.id}`);  // Corrected navigation
  }

  onSearch(search: string) {
    console.log("home", search);
    if (search) {
      this.filteredProduct = this.products.filter((x: any) =>
        x?.name?.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      this.filteredProduct = this.products;
    }
  }
}