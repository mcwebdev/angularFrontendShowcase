import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebWorkersComponent } from './web-workers.component';

describe('WebWorkersComponent', () => {
  let component: WebWorkersComponent;
  let fixture: ComponentFixture<WebWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebWorkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
