import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = 'http://localhost:5432/api/v1'

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/department/find-all`);
  }

  

  findDepartment(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/department/find/${name}`);
  }
}
