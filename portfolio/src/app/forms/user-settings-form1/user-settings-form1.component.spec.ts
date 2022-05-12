import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsForm1Component } from './user-settings-form1.component';

describe('UserSettingsForm1Component', () => {
  let component: UserSettingsForm1Component;
  let fixture: ComponentFixture<UserSettingsForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSettingsForm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
