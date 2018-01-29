import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  template: `
    <h2>Department List</h2>
    <h3>{{errorMsg}}</h3>
    <ul *ngFor="let department of departments">
      <li>{{department.name}}</li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public departments: Array<any> = [];
  public errorMsg: string;

  constructor(private _departmentService: DepartmentService) { }

  ngOnInit() {
    this._departmentService.getEmployees().subscribe(
      data => this.departments = data,
      error => this.errorMsg = error
    );
  }

}
