import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateContactTypeComponent } from './create-update-contact-type.component';

describe('CreateUpdateContactType', () => {
  let component: CreateUpdateContactTypeComponent;
  let fixture: ComponentFixture<CreateUpdateContactTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUpdateContactTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateContactTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
