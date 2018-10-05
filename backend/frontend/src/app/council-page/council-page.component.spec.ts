import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilPageComponent } from './council-page.component';

describe('CouncilPageComponent', () => {
  let component: CouncilPageComponent;
  let fixture: ComponentFixture<CouncilPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouncilPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
