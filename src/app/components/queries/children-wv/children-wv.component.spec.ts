import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenWvComponent } from './children-wv.component';

describe('ChildrenWvComponent', () => {
  let component: ChildrenWvComponent;
  let fixture: ComponentFixture<ChildrenWvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenWvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenWvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
