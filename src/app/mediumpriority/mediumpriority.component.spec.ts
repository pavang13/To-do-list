import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumpriorityComponent } from './mediumpriority.component';

describe('MediumpriorityComponent', () => {
  let component: MediumpriorityComponent;
  let fixture: ComponentFixture<MediumpriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumpriorityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumpriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function expect(component: MediumpriorityComponent) {
  throw new Error('Function not implemented.');
}

