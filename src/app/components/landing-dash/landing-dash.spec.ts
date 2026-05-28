import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingDash } from './landing-dash';

describe('LandingDash', () => {
  let component: LandingDash;
  let fixture: ComponentFixture<LandingDash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingDash],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingDash);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
