import { Component } from '@angular/core';
import { Employee } from '../../employee.interface'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-listing-page',
  templateUrl: './employee-listing-page.component.html',
  styleUrls: ['./employee-listing-page.component.css']
})
export class EmployeeListingPageComponent {

  employees: Employee[] = []



  submit(form: NgForm){
    const employee: Employee = {
      name: form.value.name,
      contact: form.value.contact,
      email: form.value.email,
      address: form.value.address
    }
    this.employees.push(employee)    
  }

}
