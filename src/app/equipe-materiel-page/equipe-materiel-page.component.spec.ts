import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeMaterielPageComponent } from './equipe-materiel-page.component';


describe('EquipeMaterielPageComponent', () => {
  let component: EquipeMaterielPageComponent;
  let fixture: ComponentFixture<EquipeMaterielPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipeMaterielPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeMaterielPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
