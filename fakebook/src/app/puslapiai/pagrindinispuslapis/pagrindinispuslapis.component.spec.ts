import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagrindinispuslapisComponent } from './pagrindinispuslapis.component';

describe('PagrindinispuslapisComponent', () => {
  let component: PagrindinispuslapisComponent;
  let fixture: ComponentFixture<PagrindinispuslapisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagrindinispuslapisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagrindinispuslapisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
