import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatePackageComponent } from './activate-package.component';

describe('ActivatePackageComponent', () => {
  let component: ActivatePackageComponent;
  let fixture: ComponentFixture<ActivatePackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivatePackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivatePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
