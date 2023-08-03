import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlanListComponent } from './ilan-list.component';

describe('IlanListComponent', () => {
  let component: IlanListComponent;
  let fixture: ComponentFixture<IlanListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IlanListComponent]
    });
    fixture = TestBed.createComponent(IlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
