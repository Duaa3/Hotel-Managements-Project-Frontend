import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  [x: string]: any;
  getRoom(): Observable<any> {
    // Perform a GET request to fetch room data
    return this.httpClient.get<any>(this.url + '/room/get');
  }

  url = environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  add(data:any){
    return this.httpClient.post(this.url +"/room/add" , data,{
      headers: new HttpHeaders().set('Content-Type' , "application/json")
    })
  }

  update(data:any){
    return this.httpClient.put(this.url +"/room/update" , data,{
      headers: new HttpHeaders().set('Content-Type' , "application/json")
    })
  }

  getProducts(){
    return this.httpClient.get(this.url + "/room/get");
  }

  updateStatus(data:any){
    return this.httpClient.put(this.url +"/room/updateRoomStatus" , data,{
      headers: new HttpHeaders().set('Content-Type' , "application/json")
    })
  }

  delete(id:any){
    return this.httpClient.delete(this.url +"/room/delete/"+ id ,{
      headers: new HttpHeaders().set('Content-Type' , "application/json")
    })
  }

  getRoomByHotel(id:any){
    return this.httpClient.get(this.url + "/room/getByHotel/"+id);
  }

  getById(id:any){
    return this.httpClient.get(this.url + "/room/getRoomById/"+id);
  }
  
}