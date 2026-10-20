import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallUsuariComponent } from './detall-usuari.component';

describe('DetallUsuariComponent', () => {
  let component: DetallUsuariComponent;
  let fixture: ComponentFixture<DetallUsuariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallUsuariComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetallUsuariComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
