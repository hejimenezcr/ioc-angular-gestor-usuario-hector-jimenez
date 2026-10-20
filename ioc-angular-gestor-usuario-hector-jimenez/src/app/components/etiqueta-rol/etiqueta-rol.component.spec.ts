import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EtiquetaRolComponent } from './etiqueta-rol.component';

describe('EtiquetaRolComponent', () => {
  let component: EtiquetaRolComponent;
  let fixture: ComponentFixture<EtiquetaRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtiquetaRolComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EtiquetaRolComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
