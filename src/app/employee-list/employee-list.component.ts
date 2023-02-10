import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { dir } from 'console';
import { NgModule } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  isDesc: boolean = false;
  showData: any;


  // Injecting EmployeeService 
  constructor(private employeeService : EmployeeService,
    private router : Router
    ) { }

  ngOnInit(): void {
   this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data =>{
      this.employees = data;
    })
  }

  updateEmployee(id : number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id : number){

    if(window.confirm('Are sure you want to delete this item ?')){
      this.employeeService.deleteEmployee(id).subscribe(data =>{
        console.log(data);
        this.getEmployees();
      })
     }  
  }

  viewEmployee(id : number){
    this.router.navigate(['employee-details', id]);
  }

  sortByName(property){
    this.isDesc = !this.isDesc;
    
    let direction = this.isDesc ? 1 : -1;
    this.employees.sort(function (a, b) {
      if(a[property] < b[property]){
        return -1 * direction;
      }
      else if(a[property] > b[property]){
        return 1 * direction;
      }
      else{
        return 0;
      }
    })
  }

  sortByEmail(property){
    this.isDesc = !this.isDesc;
    
    let direction = this.isDesc ? 1 : -1;
    this.employees.sort(function (a, b) {
      if(a[property] < b[property]){
        return -1 * direction;
      }
      else if(a[property] > b[property]){
        return 1 * direction;
      }
      else{
        return 0;
      }
    })
  }

  sortByLastName(lName){
    this.isDesc = !this.isDesc;
    
    let direction = this.isDesc ? 1 : -1;
    this.employees.sort(function (a, b) {
      if(a[lName] < b[lName]){
        return -1 * direction;
      }
      else if(a[lName] > b[lName]){
        return 1 * direction;
      }
      else{
        return 0;
      }
    })
  }

  


}
