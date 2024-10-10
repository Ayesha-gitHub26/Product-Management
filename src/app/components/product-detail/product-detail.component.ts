import { Component, inject } from '@angular/core';
import { Product } from '../../types/product';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProductService } from '../../product.service';
import { MatCard } from '@angular/material/card';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatCard, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']  // Change from styleUrl to styleUrls

})
export class ProductDetailComponent {
  product!: Product;
  productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    let productId = this.activatedRoute.snapshot.params["id"];
    this.productService.getProductById(productId).subscribe(result => {
      this.product = result;
    })
  }
}
