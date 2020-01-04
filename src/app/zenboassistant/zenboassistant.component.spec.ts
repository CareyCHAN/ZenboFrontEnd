import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenboassistantComponent } from './zenboassistant.component';

describe('ZenboassistantComponent', () => {
  let component: ZenboassistantComponent;
  let fixture: ComponentFixture<ZenboassistantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenboassistantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenboassistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
