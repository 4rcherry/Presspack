import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialStorageListComponent } from './material-storage-list.component';

describe('MaterialStorageListComponent', () => {
  let component: MaterialStorageListComponent;
  let fixture: ComponentFixture<MaterialStorageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialStorageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialStorageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
