import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilisAboutComponent } from './profilis-about.component';

describe('ProfilisAboutComponent', () => {
  let component: ProfilisAboutComponent;
  let fixture: ComponentFixture<ProfilisAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilisAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilisAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
