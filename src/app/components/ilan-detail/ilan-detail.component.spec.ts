import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlanDetailComponent } from './ilan-detail.component';

describe('IlanDetailComponent', () => {
  let component: IlanDetailComponent;
  let fixture: ComponentFixture<IlanDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IlanDetailComponent]
    });
    fixture = TestBed.createComponent(IlanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
