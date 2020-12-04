import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpropComponent } from './listprop.component';

describe('ListpropComponent', () => {
  let component: ListpropComponent;
  let fixture: ComponentFixture<ListpropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
