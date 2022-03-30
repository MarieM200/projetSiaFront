import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceMaterielComponent } from './place-materiel.component';

describe('PlaceMaterielComponent', () => {
  let component: PlaceMaterielComponent;
  let fixture: ComponentFixture<PlaceMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceMaterielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
