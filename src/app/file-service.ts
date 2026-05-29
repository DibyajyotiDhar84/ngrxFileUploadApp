import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService {

  API:string='http://localhost:3000';
  http = inject(HttpClient);

  uploadFile(formData:FormData):Observable<any>{
    debugger;
    let form:{[key:string]:any} = {};
    formData.forEach((value, key) => {
        form[key]=value
    });
    console.log(form);
    
    return this.http.post<any>(`${this.API}/file/upload`,formData);
  }
}
