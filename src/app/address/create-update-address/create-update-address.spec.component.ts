import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateAddressComponent } from './create-update-address.component';

describe('CreateUpdateAddress', () => {
  let component: CreateUpdateAddressComponent;
  let fixture: ComponentFixture<CreateUpdateAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUpdateAddressComponent]
    })
    .compileComponents(); 

    fixture = TestBed.createComponent(CreateUpdateAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
