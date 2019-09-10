import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWalkerComponent } from './show-walker.component';

describe('ShowWalkerComponent', () => {
  let component: ShowWalkerComponent;
  let fixture: ComponentFixture<ShowWalkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWalkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
