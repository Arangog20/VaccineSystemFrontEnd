import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenMunicipalityComponent } from './children-municipality.component';

describe('ChildrenMunicipalityComponent', () => {
  let component: ChildrenMunicipalityComponent;
  let fixture: ComponentFixture<ChildrenMunicipalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenMunicipalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrenMunicipalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
