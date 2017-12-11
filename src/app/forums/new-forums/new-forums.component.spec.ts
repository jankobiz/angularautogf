import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewforumsComponent } from './newforums.component';

describe('NewforumsComponent', () => {
  let component: NewforumsComponent;
  let fixture: ComponentFixture<NewforumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewforumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewforumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
