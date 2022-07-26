import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaduserComponent } from './uploaduser.component';

describe('UploaduserComponent', () => {
  let component: UploaduserComponent;
  let fixture: ComponentFixture<UploaduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploaduserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploaduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
