import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LlistaUsuarisComponent } from './llista-usuaris.component';

describe('LlistaUsuarisComponent', () => {
  let component: LlistaUsuarisComponent;
  let fixture: ComponentFixture<LlistaUsuarisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistaUsuarisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LlistaUsuarisComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
