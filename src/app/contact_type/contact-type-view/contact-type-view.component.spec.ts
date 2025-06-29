import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTypeViewComponent } from './contact-type-view.component';

describe('ContactTypeView', () => {
  let component: ContactTypeViewComponent;
  let fixture: ComponentFixture<ContactTypeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactTypeViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactTypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
