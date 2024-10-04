import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModlaChildrenComponent } from './modla-children.component';

describe('ModlaChildrenComponent', () => {
  let component: ModlaChildrenComponent;
  let fixture: ComponentFixture<ModlaChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModlaChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModlaChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
