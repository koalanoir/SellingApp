import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooeterComponent } from './fooeter.component';

describe('FooeterComponent', () => {
  let component: FooeterComponent;
  let fixture: ComponentFixture<FooeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
