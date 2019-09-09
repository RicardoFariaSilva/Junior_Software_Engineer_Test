import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWalkerComponent } from './create-walker.component';

describe('CreateWalkerComponent', () => {
  let component: CreateWalkerComponent;
  let fixture: ComponentFixture<CreateWalkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWalkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
