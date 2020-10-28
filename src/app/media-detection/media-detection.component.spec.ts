import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaDetectionComponent } from './media-detection.component';

describe('MediaDetectionComponent', () => {
  let component: MediaDetectionComponent;
  let fixture: ComponentFixture<MediaDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaDetectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
