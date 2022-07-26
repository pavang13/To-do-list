import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighpriorityComponent } from './highpriority.component';

describe('HighpriorityComponent', () => {
  let component: HighpriorityComponent;
  let fixture: ComponentFixture<HighpriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighpriorityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighpriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
