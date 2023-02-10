import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  employee : Employee = new Employee();
  constructor(private employeeService : EmployeeService,
    private router : Router) { }

  ngOnInit(): void {
  }

  onSignUp(){
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
      console.log(data)
      alert("User Created Successfully!");
      this.goToLogin();
    }, error => console.log(error));  
  }

  goToLogin(){
    this.router.navigate(['/login'])
  }

}
