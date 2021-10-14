import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrauguSarasasComponent } from './draugu-sarasas.component';

describe('DrauguSarasasComponent', () => {
  let component: DrauguSarasasComponent;
  let fixture: ComponentFixture<DrauguSarasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrauguSarasasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrauguSarasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
