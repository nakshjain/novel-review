import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseByGenreComponent } from './browse-by-genre.component';

describe('BrowseByGenreComponent', () => {
  let component: BrowseByGenreComponent;
  let fixture: ComponentFixture<BrowseByGenreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowseByGenreComponent]
    });
    fixture = TestBed.createComponent(BrowseByGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
