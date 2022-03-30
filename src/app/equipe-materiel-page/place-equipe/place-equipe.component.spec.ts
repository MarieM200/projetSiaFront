import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceEquipeComponent } from './place-equipe.component';

describe('PlaceEquipeComponent', () => {
  let component: PlaceEquipeComponent;
  let fixture: ComponentFixture<PlaceEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
