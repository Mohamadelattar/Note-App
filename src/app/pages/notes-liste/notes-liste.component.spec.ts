import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesListeComponent } from './notes-liste.component';

describe('NotesListeComponent', () => {
  let component: NotesListeComponent;
  let fixture: ComponentFixture<NotesListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
