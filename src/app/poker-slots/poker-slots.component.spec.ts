import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerSlotsComponent } from './poker-slots.component';

describe('PokerSlotsComponent', () => {
  let component: PokerSlotsComponent;
  let fixture: ComponentFixture<PokerSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokerSlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
