import { TestBed } from '@angular/core/testing';

import { ContactList } from './contact-list.service';

describe('ContactList', () => {
  let service: ContactList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
