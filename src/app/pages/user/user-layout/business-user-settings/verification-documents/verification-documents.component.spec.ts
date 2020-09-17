import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationDocumentsComponent } from './verification-documents.component';

describe('VerificationDocumentsComponent', () => {
  let component: VerificationDocumentsComponent;
  let fixture: ComponentFixture<VerificationDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
