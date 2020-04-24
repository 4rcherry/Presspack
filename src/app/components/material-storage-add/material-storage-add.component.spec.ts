import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialStorageAddComponent } from './material-storage-add.component';

describe('MaterialStorageAddComponent', () => {
  let component: MaterialStorageAddComponent;
  let fixture: ComponentFixture<MaterialStorageAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialStorageAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialStorageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
