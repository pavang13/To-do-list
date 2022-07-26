import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowpriorityComponent } from './lowpriority.component';

describe('LowpriorityComponent', () => {
  let component: LowpriorityComponent;
  let fixture: ComponentFixture<LowpriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowpriorityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowpriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
