import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridWidgetComponent } from './data-grid-widget.component';

describe('DataGridWidgetComponent', () => {
  let component: DataGridWidgetComponent;
  let fixture: ComponentFixture<DataGridWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataGridWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
