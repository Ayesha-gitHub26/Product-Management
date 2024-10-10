import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ProductService } from '../../product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toaster';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [MatButtonModule,MatInputModule,FormsModule,ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent {
  formBuild = inject(FormBuilder);
  router = inject(Router);
  productForm: FormGroup = this.formBuild.group({
    id:[''],
    name: ['',[Validators.required,Validators.minLength(10)]],
    brand: ['',Validators.required],
    image: [''],
    CurrentPrice: [''],
    standardPrice: [''],
    discount:['']
  })
  productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);
  // toasterService = inject(ToastrService);
  ngOnInit() {
    let productId = this.activatedRoute.snapshot.params["id"];
    this.productService.getProductById(productId).subscribe(result => {
      this.productForm.patchValue(result);
    })
  }
  editProduct() {
    if (this.productForm.invalid) {
      alert("Please add in the needed requirements in all field inputs.");
      return;
    }
    console.log("form editted!", this.productForm.value);
    this.productService.updateProduct(this.productForm.value).subscribe(result => {
      alert("product update!");
      this.router.navigateByUrl("/");
    })
  }
}
