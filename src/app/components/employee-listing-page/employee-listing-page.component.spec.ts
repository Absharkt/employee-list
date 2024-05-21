import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListingPageComponent } from './employee-listing-page.component';

describe('EmployeeListingPageComponent', () => {
  let component: EmployeeListingPageComponent;
  let fixture: ComponentFixture<EmployeeListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
