import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = "http://localhost:8088/" 

  private accessToken: string | null = null;




  constructor(private http: HttpClient) { }
  setAccessToken(token: string): void {
    this.accessToken = token;
    localStorage.setItem('jwtToken', token);
  }

  getAccessToken(): string | null {
    return this.accessToken || localStorage.getItem('jwtToken');
  }
  login(credentials: any): Observable<any> {
    let formData = new FormData();
    formData.append("username", credentials.username);
    formData.append("password", credentials.password);

    return this.http.post(`${this.apiUrl}login`, formData);
  }

}
