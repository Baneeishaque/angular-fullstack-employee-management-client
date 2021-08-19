import { ResponseModel } from './../models/ResponseModel';
import { EmployeeModel } from './../models/EmployeeModel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {
  constructor(private http: HttpClient) {}
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  public getEmployees() {
    return this.http.get<EmployeeModel[]>('http://localhost:3000');
  }
  public insertUpdateEmployee(employee: EmployeeModel) {
    return this.http.post<ResponseModel>(
      'http://localhost:3000/insertUpdate',
      employee,
      {
        headers: this.httpHeaders,
      }
    );
  }
  public deleteEmployee(name: string) {
    return this.http.post<ResponseModel>(
      'http://localhost:3000/delete',
      { name: name },
      {
        headers: this.httpHeaders,
      }
    );
  }
}
