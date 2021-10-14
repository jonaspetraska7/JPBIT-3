import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZinutesIvedimasComponent } from './zinutes-ivedimas.component';

describe('ZinutesIvedimasComponent', () => {
  let component: ZinutesIvedimasComponent;
  let fixture: ComponentFixture<ZinutesIvedimasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZinutesIvedimasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZinutesIvedimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
