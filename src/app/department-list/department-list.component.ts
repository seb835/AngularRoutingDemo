import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Department List
    </h3>
    <ul class="items">
      <li *ngFor="let department of departments" [class.selected]="isSelected(department)" (click)="onSelect(department)">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  public departments: Array<any> = [];
  public errorMsg: string;

  constructor(
    private _departmentService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Get data
    this._departmentService.getEmployees().subscribe(
      data => this.departments = data,
      error => this.errorMsg = error
    );

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department) {
    this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }

}
