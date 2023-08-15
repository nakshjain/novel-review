import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelRatingComponent } from './novel-rating.component';

describe('NovelRatingComponent', () => {
  let component: NovelRatingComponent;
  let fixture: ComponentFixture<NovelRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovelRatingComponent]
    });
    fixture = TestBed.createComponent(NovelRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
