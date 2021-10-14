import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KairinisMeniuComponent } from './kairinis-meniu.component';

describe('KairinisMeniuComponent', () => {
  let component: KairinisMeniuComponent;
  let fixture: ComponentFixture<KairinisMeniuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KairinisMeniuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KairinisMeniuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
