import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicehoursComponent } from './servicehours.component';

describe('ServicehoursComponent', () => {
  let component: ServicehoursComponent;
  let fixture: ComponentFixture<ServicehoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicehoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicehoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
