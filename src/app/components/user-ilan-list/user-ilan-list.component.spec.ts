import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIlanListComponent } from './user-ilan-list.component';

describe('UserIlanListComponent', () => {
  let component: UserIlanListComponent;
  let fixture: ComponentFixture<UserIlanListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserIlanListComponent]
    });
    fixture = TestBed.createComponent(UserIlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
