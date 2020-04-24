import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialInventoryListComponent } from './material-inventory-list.component';

describe('MaterialInventoryListComponent', () => {
  let component: MaterialInventoryListComponent;
  let fixture: ComponentFixture<MaterialInventoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialInventoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialInventoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
