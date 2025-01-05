import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsInvestComponent } from './charts-invest.component';

describe('ChartsInvestComponent', () => {
  let component: ChartsInvestComponent;
  let fixture: ComponentFixture<ChartsInvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartsInvestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
