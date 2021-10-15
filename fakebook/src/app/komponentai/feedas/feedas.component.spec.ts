import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedasComponent } from './feedas.component';

describe('FeedasComponent', () => {
  let component: FeedasComponent;
  let fixture: ComponentFixture<FeedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
