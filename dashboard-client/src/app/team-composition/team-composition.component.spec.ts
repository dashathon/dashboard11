import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCompositionComponent } from './team-composition.component';

describe('TeamCompositionComponent', () => {
  let component: TeamCompositionComponent;
  let fixture: ComponentFixture<TeamCompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamCompositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
