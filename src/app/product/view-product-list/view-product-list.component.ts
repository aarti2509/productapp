import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import {FormBuilder,FormGroup} from '@angular/forms';
import { ProductModel } from '../Product.model';


@Component({
  selector: 'app-view-product-list',
  templateUrl: './view-product-list.component.html',
  styleUrls: ['./view-product-list.component.css']
})
export class ViewProductListComponent implements OnInit {

  
  formValue : FormGroup;
  productObj : ProductModel = new ProductModel();
  productData:any;
  constructor(private api:ApiService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.fb.group({
      name : [''],
      sku : [''],
      email : [''],
      description : [''],
      price : [''],
      stock_level : []
    })
    this.getAllProduct();
    
  }



  getAllProduct(){
    this.api.getProduct().subscribe(res=>{
      console.log(res);
      this.productData = res;
    })
  }

  onEdit(row:any)
  {
    this.productObj.id = row.id;
     this.formValue.controls['name'].setValue(row.name);
     this.formValue.controls['sku'].setValue(row.sku);
     this.formValue.controls['email'].setValue(row.email);
     this.formValue.controls['description'].setValue(row.description);
     this.formValue.controls['price'].setValue(row.price);
     this.formValue.controls['stock_level'].setValue(row.stock_level);


  }

  updateProductDetails()
    {
      this.productObj.name = this.formValue.value.name;
      this.productObj.sku = this.formValue.value.sku;
      this.productObj.email = this.formValue.value.email;
      this.productObj.description = this.formValue.value.description;
      this.productObj.price = this.formValue.value.price;
      this.productObj.stock_level = this.formValue.value.stock_level;

      this.api.updateProduct(this.productObj,this.productObj.id).subscribe(res=>{
        alert("Product Updated Successfully");

       let ref = document.getElementById('cancel');
       ref?.click();

        this.getAllProduct();
      })
    }


    deleteProduct(row:any)
    {
      this.api.deleteProduct(row.id).subscribe(res=>{
        alert("Product deleted Successfully");
        this.getAllProduct();
      })

    }
  

}
