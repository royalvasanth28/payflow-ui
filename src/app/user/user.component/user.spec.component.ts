import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponenet } from './user.component';

describe('User', () => {
  let component: UserComponenet;
  let fixture: ComponentFixture<UserComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponenet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponenet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
