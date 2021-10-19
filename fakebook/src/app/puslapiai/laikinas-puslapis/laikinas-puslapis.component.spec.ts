import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaikinasPuslapisComponent } from './laikinas-puslapis.component';

describe('LaikinasPuslapisComponent', () => {
  let component: LaikinasPuslapisComponent;
  let fixture: ComponentFixture<LaikinasPuslapisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaikinasPuslapisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaikinasPuslapisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
