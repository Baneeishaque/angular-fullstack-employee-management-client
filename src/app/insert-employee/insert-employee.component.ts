import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../models/EmployeeModel';
import { EmployeeApiService } from '../services/employee-api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-employee',
  templateUrl: './insert-employee.component.html',
  styleUrls: ['./insert-employee.component.css'],
})
export class InsertEmployeeComponent implements OnInit {
  employee: EmployeeModel = {
    name: '',
    age: '',
    place: '',
  };
  constructor(
    private employeeApiService: EmployeeApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.employee.name = params.name;
    });
  }
  onSave(employee: EmployeeModel) {
    alert(
      'Data - Name : ' +
        employee.name +
        ', Age: ' +
        employee.age +
        ', Place: ' +
        employee.place
    );
    this.employeeApiService
      .insertUpdateEmployee(employee)
      .subscribe((response) => {
        alert('Operation : ' + response.result);
        this.router.navigate(['/']);
      });
  }
}
