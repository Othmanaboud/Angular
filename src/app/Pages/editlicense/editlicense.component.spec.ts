import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlicenseComponent } from './editlicense.component';

describe('EditlicenseComponent', () => {
  let component: EditlicenseComponent;
  let fixture: ComponentFixture<EditlicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditlicenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditlicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
