import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNovelsComponent } from './all-novels.component';

describe('AllNovelsComponent', () => {
  let component: AllNovelsComponent;
  let fixture: ComponentFixture<AllNovelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllNovelsComponent]
    });
    fixture = TestBed.createComponent(AllNovelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
