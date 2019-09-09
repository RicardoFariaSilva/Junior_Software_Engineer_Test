import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWalkersComponent } from './list-walkers.component';

describe('ListWalkersComponent', () => {
  let component: ListWalkersComponent;
  let fixture: ComponentFixture<ListWalkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWalkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWalkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
