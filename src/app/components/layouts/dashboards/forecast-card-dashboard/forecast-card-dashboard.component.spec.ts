import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastCardDashboardComponent } from './forecast-card-dashboard.component';

describe('ForecastCardDashboardComponent', () => {
  let component: ForecastCardDashboardComponent;
  let fixture: ComponentFixture<ForecastCardDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastCardDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastCardDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
