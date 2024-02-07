import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzFormElementsLibraryComponent } from './sz-form-elements-library.component';

describe('SzFormElementsLibraryComponent', () => {
  let component: SzFormElementsLibraryComponent;
  let fixture: ComponentFixture<SzFormElementsLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SzFormElementsLibraryComponent]
    });
    fixture = TestBed.createComponent(SzFormElementsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
