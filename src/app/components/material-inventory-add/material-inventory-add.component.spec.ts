import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialInventoryAddComponent } from './material-inventory-add.component';

describe('MaterialInventoryAddComponent', () => {
  let component: MaterialInventoryAddComponent;
  let fixture: ComponentFixture<MaterialInventoryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialInventoryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialInventoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
