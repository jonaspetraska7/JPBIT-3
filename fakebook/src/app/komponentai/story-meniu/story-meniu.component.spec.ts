import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryMeniuComponent } from './story-meniu.component';

describe('StoryMeniuComponent', () => {
  let component: StoryMeniuComponent;
  let fixture: ComponentFixture<StoryMeniuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryMeniuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryMeniuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
