import { TestBed } from '@angular/core/testing';

import { SzFormElementsLibraryService } from './sz-form-elements-library.service';

describe('SzFormElementsLibraryService', () => {
  let service: SzFormElementsLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SzFormElementsLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
