import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8081/employees";

  // Injecting HttpClient module
  constructor(private httpClient : HttpClient) { }

  // Get all employees
  getEmployeeList() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  // Create employee
  createEmployee(employee : Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee); 
  }

  // Get employee by id
  getEmployeeById(id : number) : Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  // Update employee
  updateEmployee(id : number, employee : Employee) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  // Delete employee
  deleteEmployee(id : number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }
}
