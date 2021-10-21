import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilioDraugaiComponent } from './profilio-draugai.component';

describe('ProfilioDraugaiComponent', () => {
  let component: ProfilioDraugaiComponent;
  let fixture: ComponentFixture<ProfilioDraugaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilioDraugaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilioDraugaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
