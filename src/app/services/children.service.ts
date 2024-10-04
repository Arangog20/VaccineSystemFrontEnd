import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {
  private apiUrl = 'http://localhost:5432/api/v1'

  constructor(private http: HttpClient) { }

  createChild(data: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(`${this.apiUrl}/children/create`, data, { headers });
  }

  getChildren(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/children/find-all`); 
  }

  deleteChildren(id: number): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.delete<any>(`${this.apiUrl}/children/delete/${id}`, { headers });
  }

  

 
}
