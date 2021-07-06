import { Component, OnInit} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import {ProductModel} from '../Product.model';
import {Router} from '@angular/router'


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

 

  formValue : FormGroup;
  submitted = false;
  productModelObj : ProductModel = new ProductModel();
  constructor(private fb:FormBuilder,private api:ApiService,private router:Router) { }

  ngOnInit(): void {

    this.formValue = this.fb.group({
      name : ['',Validators.required],
      sku  : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      description : ['',Validators.required],
      price : ['',Validators.required],
      stock_level : ['',Validators.required]

    })

   
  }

  get formValueControl() {
    return this.formValue.controls;
  }



  postProductDetails(){

    this.submitted = true;
    this.productModelObj.name = this.formValue.value.name;
    this.productModelObj.sku = this.formValue.value.sku;
    this.productModelObj.email = this.formValue.value.email;
    this.productModelObj.description = this.formValue.value.description;
    this.productModelObj.price = this.formValue.value.price;
    this.productModelObj.stock_level = this.formValue.value.stock_level;

    this.api.postProduct(this.productModelObj).subscribe(res=>{
      console.log(res);
      alert("employee added succefully");
       this.formValue.reset();
    },
    err =>{
      alert("something went wrong");
    }
    )}

    clearForm(formData:any){
      formData.reset();
    }

   
}
