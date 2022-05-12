import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productscart1IndexComponent } from './productscart1-index.component';

describe('Productscart1IndexComponent', () => {
  let component: Productscart1IndexComponent;
  let fixture: ComponentFixture<Productscart1IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Productscart1IndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Productscart1IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
