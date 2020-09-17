import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfinishedUsersComponent } from './unfinished-users.component';

describe('UnfinishedUsersComponent', () => {
  let component: UnfinishedUsersComponent;
  let fixture: ComponentFixture<UnfinishedUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnfinishedUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnfinishedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
