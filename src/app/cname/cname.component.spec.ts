import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnameComponent } from './cname.component';

describe('CnameComponent', () => {
  let component: CnameComponent;
  let fixture: ComponentFixture<CnameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CnameComponent]
    });
    fixture = TestBed.createComponent(CnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
