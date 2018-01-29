import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List</h2>
    <h3>{{errorMsg}}</h3>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees: Array<any> = [];
  public errorMsg: string;

  constructor(private _employeeService: EmployeesService) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(
      data => this.employees = data,
      error => this.errorMsg = error
    );
  }

}
