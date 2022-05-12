import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pc1AppComponent } from './pc1-app.component';

describe('Pc1AppComponent', () => {
  let component: Pc1AppComponent;
  let fixture: ComponentFixture<Pc1AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pc1AppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pc1AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
