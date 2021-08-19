import { EmployeeModel } from './../models/EmployeeModel';
import { EmployeeApiService } from './../services/employee-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
})
export class ListEmployeeComponent implements OnInit {
  employees: EmployeeModel[] = [];
  constructor(private employeeApiService: EmployeeApiService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeApiService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
  }
  onDelete(name: string) {
    this.employeeApiService.deleteEmployee(name).subscribe((response) => {
      alert('Operation : ' + response.result);
      this.getEmployees();
    });
  }
}
