import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBooksComponent } from './listbooks.component';

describe('ListbooksComponent', () => {
  let component: ListBooksComponent;
  let fixture: ComponentFixture<ListBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBooksComponent]
    });
    fixture = TestBed.createComponent(ListBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
