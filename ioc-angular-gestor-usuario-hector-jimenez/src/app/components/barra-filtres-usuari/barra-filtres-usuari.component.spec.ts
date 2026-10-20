import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarraFiltresUsuariComponent } from './barra-filtres-usuari.component';

describe('BarraFiltresUsuariComponent', () => {
  let component: BarraFiltresUsuariComponent;
  let fixture: ComponentFixture<BarraFiltresUsuariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraFiltresUsuariComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BarraFiltresUsuariComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
