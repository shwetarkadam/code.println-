import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingStatisticsComponent } from './landing-statistics.component';

describe('LandingStatisticsComponent', () => {
  let component: LandingStatisticsComponent;
  let fixture: ComponentFixture<LandingStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
