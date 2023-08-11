import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIlanComponent } from './add-ilan.component';

describe('AddIlanComponent', () => {
  let component: AddIlanComponent;
  let fixture: ComponentFixture<AddIlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddIlanComponent]
    });
    fixture = TestBed.createComponent(AddIlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
