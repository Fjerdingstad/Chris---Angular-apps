import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAppComponent } from './forms-app.component';

describe('FormsAppComponent', () => {
  let component: FormsAppComponent;
  let fixture: ComponentFixture<FormsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
