import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelsDisplayComponent } from './novels-display.component';

describe('NovelsComponent', () => {
  let component: NovelsDisplayComponent;
  let fixture: ComponentFixture<NovelsDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovelsDisplayComponent]
    });
    fixture = TestBed.createComponent(NovelsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
