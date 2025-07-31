import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateContactAddressComponent } from './create-update-contact-address.component';

describe('CreateUpdateContactAddress', () => {
  let component: CreateUpdateContactAddressComponent;
  let fixture: ComponentFixture<CreateUpdateContactAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUpdateContactAddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateContactAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
