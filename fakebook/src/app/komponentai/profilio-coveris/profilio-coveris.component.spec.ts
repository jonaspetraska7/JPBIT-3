import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilioCoverisComponent } from './profilio-coveris.component';

describe('ProfilioCoverisComponent', () => {
  let component: ProfilioCoverisComponent;
  let fixture: ComponentFixture<ProfilioCoverisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilioCoverisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilioCoverisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
