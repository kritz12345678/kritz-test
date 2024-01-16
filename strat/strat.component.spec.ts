import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StratComponent } from './strat.component';

describe('StratComponent', () => {
  let component: StratComponent;
  let fixture: ComponentFixture<StratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StratComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
