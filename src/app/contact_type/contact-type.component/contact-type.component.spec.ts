import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTypeComponent } from './contact-type.component';

describe('ContactType', () => {
  let component: ContactTypeComponent;
  let fixture: ComponentFixture<ContactTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
