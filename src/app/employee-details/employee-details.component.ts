import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id : number;
  employee : Employee;

  constructor(private employeeService : EmployeeService,
    private route1 : Router,
    private router : ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee = data;
    });

  }

  // showChild(){
  //   this.route1.navigate(['child']);
  // }

}
