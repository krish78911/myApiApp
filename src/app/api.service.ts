import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Sample API endpoint
  private apiUrl = 'http://localhost/laravel-crud/public/api/api-get';

  constructor(private http: HttpClient) {}

  // Function to get data from the API
  getPosts(): Observable<any> {
    console.log('test');
    return this.http.get(this.apiUrl);
  }
}
