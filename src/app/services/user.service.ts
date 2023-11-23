import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.apiUrl;
  constructor(private httpClient:HttpClient) {}
  
  signup(data:any){
    return this.httpClient.post(this.url + "/user/signup" , data , {
      headers:new HttpHeaders().set('Content-Type' , 'application/json')
    })
  }

  forgotPassword(data:any){
    return this.httpClient.post(this.url + "/user/forgotPassword" , data , {
      headers:new HttpHeaders().set('Content-Type' , 'application/json')
    })
  }
  login(data:any){
    return this.httpClient.post(this.url + "/user/login" , data , {
      headers:new HttpHeaders().set('Content-Type' , 'application/json')
    })
  }
  checkToken() {
    return this.httpClient.get<any>(this.url + "/user/checkToken").pipe(
      map(response => {
        // Check the 'messag' field from the response
        return response.messag === "true"; // Adjust this condition based on the expected value
        
      })
    );
  }
  

  changePassword(data:any){
    return this.httpClient.post(this.url + "/user/changePassword" , data , {
      headers:new HttpHeaders().set('Content-Type' , 'application/json')
    })
  }

  getUsers(){
    return this.httpClient.get(this.url + "/user/get");
  }

  update(data:any){
    return this.httpClient.put(this.url + "/user/update" , data , {
      headers:new HttpHeaders().set('Content-Type' , 'application/json')
    })
  }
}
