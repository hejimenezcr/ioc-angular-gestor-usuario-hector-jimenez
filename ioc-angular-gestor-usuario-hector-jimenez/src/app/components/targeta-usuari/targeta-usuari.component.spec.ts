import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TargetaUsuariComponent } from './targeta-usuari.component';

describe('TargetaUsuariComponent', () => {
  let component: TargetaUsuariComponent;
  let fixture: ComponentFixture<TargetaUsuariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetaUsuariComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TargetaUsuariComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
