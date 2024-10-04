import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeMunicpipalityComponent } from './age-municpipality.component';

describe('AgeMunicpipalityComponent', () => {
  let component: AgeMunicpipalityComponent;
  let fixture: ComponentFixture<AgeMunicpipalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeMunicpipalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeMunicpipalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
