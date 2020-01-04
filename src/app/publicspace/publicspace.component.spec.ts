import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicspaceComponent } from './publicspace.component';

describe('PublicspaceComponent', () => {
  let component: PublicspaceComponent;
  let fixture: ComponentFixture<PublicspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
