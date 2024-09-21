import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseSportComponent } from './horse-sport.component';

describe('HorseSportComponent', () => {
  let component: HorseSportComponent;
  let fixture: ComponentFixture<HorseSportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorseSportComponent]
    });
    fixture = TestBed.createComponent(HorseSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
