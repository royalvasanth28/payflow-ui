import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAddressViewComponent } from './contact-address-view.component';

describe('ContactAddressView', () => {
  let component: ContactAddressViewComponent;
  let fixture: ComponentFixture<ContactAddressViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactAddressViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactAddressViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
