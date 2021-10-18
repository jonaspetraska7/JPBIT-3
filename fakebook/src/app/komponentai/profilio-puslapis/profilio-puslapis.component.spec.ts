import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilioPuslapisComponent } from './profilio-puslapis.component';

describe('ProfilioPuslapisComponent', () => {
  let component: ProfilioPuslapisComponent;
  let fixture: ComponentFixture<ProfilioPuslapisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilioPuslapisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilioPuslapisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
