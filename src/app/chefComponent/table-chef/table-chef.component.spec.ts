import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableChefComponent } from './table-chef.component';

describe('TableChefComponent', () => {
  let component: TableChefComponent;
  let fixture: ComponentFixture<TableChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
