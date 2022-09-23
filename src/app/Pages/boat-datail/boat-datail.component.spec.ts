import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatDatailComponent } from './boat-datail.component';

describe('BoatDatailComponent', () => {
  let component: BoatDatailComponent;
  let fixture: ComponentFixture<BoatDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoatDatailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoatDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
