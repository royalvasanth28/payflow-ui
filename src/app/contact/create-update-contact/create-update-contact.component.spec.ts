import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateContactComponent } from './create-update-contact.component';

describe('CreateUpdateContactComponent', () => {
  let component: CreateUpdateContactComponent;
  let fixture: ComponentFixture<CreateUpdateContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUpdateContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
