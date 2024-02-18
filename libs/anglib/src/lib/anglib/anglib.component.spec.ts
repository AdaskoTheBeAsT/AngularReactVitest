import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnglibComponent } from './anglib.component';

describe('AnglibComponent', () => {
  let component: AnglibComponent;
  let fixture: ComponentFixture<AnglibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnglibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnglibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
