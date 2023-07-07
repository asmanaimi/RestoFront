import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementblogComponent } from './elementblog.component';

describe('ElementblogComponent', () => {
  let component: ElementblogComponent;
  let fixture: ComponentFixture<ElementblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
