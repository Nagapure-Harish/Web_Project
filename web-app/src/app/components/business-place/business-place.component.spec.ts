import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPlaceComponent } from './business-place.component';

describe('BusinessPlaceComponent', () => {
  let component: BusinessPlaceComponent;
  let fixture: ComponentFixture<BusinessPlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessPlaceComponent]
    });
    fixture = TestBed.createComponent(BusinessPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
