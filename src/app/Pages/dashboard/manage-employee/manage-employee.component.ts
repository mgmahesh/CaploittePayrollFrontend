import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/Services/common-service.service';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent {
  private readonly urlLogin = "api/employee/GetEmployeeList";

  employees:any;
  _commonServices: CommonService;
  _httpClient: HttpClient;

  constructor(@Inject(HttpClient) httpClient: HttpClient, private fb: FormBuilder,) {
    this._httpClient = httpClient;
    this._commonServices = new CommonService(httpClient);
  }

  ngOnInit(){
    this._commonServices.fetchData(this.urlLogin,false).then(data => {
      this.employees = data
    });
  }
}
