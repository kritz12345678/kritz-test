import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedcolchartComponent } from './stackedcolchart.component';

describe('StackedcolchartComponent', () => {
  let component: StackedcolchartComponent;
  let fixture: ComponentFixture<StackedcolchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackedcolchartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StackedcolchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
