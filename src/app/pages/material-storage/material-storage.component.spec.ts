import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialStorageComponent } from './material-storage.component';

describe('MaterialStorageComponent', () => {
  let component: MaterialStorageComponent;
  let fixture: ComponentFixture<MaterialStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
