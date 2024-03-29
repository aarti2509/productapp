import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private httpClient:HttpClient) { }

  postProduct(data:any){
    
    return this.httpClient.post<any>("http://localhost:3000/products",data)
   .pipe(map((res:any)=>{
     return res;
   }));
}

getProduct()
{
  
  return this.httpClient.get<any>("http://localhost:3000/products")
  .pipe(map((res:any)=>{
    return res;
  }));
}

updateProduct(data:any,id:number){
  
  return this.httpClient.put<any>("http://localhost:3000/products/"+id,data)
  .pipe(map((res:any)=>{
    return res;
  }));

}

deleteProduct(id:number){
  
  return this.httpClient.delete<any>("http://localhost:3000/products/"+id)
  .pipe(map((res:any)=>{
    return res;
  }))
}


}
