import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvzComponent } from './pvz.component';

describe('PvzComponent', () => {
  let component: PvzComponent;
  let fixture: ComponentFixture<PvzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PvzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
