import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultResourceComponent } from './consult-resource.component';

describe('ConsultResourceComponent', () => {
  let component: ConsultResourceComponent;
  let fixture: ComponentFixture<ConsultResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
