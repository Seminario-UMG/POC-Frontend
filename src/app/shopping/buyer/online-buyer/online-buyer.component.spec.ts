import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineBuyerComponent } from './online-buyer.component';

describe('OnlineBuyerComponent', () => {
  let component: OnlineBuyerComponent;
  let fixture: ComponentFixture<OnlineBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineBuyerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
