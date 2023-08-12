import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelImageSliderComponent } from './novel-image-slider.component';

describe('ImageSliderComponent', () => {
  let component: NovelImageSliderComponent;
  let fixture: ComponentFixture<NovelImageSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovelImageSliderComponent]
    });
    fixture = TestBed.createComponent(NovelImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
