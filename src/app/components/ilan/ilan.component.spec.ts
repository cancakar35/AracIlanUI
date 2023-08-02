import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlanComponent } from './ilan.component';

describe('IlanComponent', () => {
  let component: IlanComponent;
  let fixture: ComponentFixture<IlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IlanComponent]
    });
    fixture = TestBed.createComponent(IlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
