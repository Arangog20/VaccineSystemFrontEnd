import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {
apiUrl: string = 'http://localhost:5432/api/v1'

  constructor(
    private http: HttpClient,
    
  ) { }

  createVaciine(data: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(`${this.apiUrl}/vaccine/create`, data, { headers });
  }
}
