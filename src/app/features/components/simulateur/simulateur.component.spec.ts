import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateurComponent } from './simulateur.component';

describe('SimulateurComponent', () => {
  let component: SimulateurComponent;
  let fixture: ComponentFixture<SimulateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulateurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
