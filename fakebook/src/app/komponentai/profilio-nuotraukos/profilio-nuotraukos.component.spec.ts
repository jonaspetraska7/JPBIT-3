import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilioNuotraukosComponent } from './profilio-nuotraukos.component';

describe('ProfilioNuotraukosComponent', () => {
  let component: ProfilioNuotraukosComponent;
  let fixture: ComponentFixture<ProfilioNuotraukosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilioNuotraukosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilioNuotraukosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
