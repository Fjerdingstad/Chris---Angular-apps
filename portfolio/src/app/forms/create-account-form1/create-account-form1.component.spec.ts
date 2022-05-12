import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountForm1Component } from './create-account-form1.component';

describe('CreateAccountForm1Component', () => {
  let component: CreateAccountForm1Component;
  let fixture: ComponentFixture<CreateAccountForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountForm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
