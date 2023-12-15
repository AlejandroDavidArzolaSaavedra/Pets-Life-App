import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAdminUserComponent } from './header-admin-user.component';

describe('HeaderAdminUserComponent', () => {
  let component: HeaderAdminUserComponent;
  let fixture: ComponentFixture<HeaderAdminUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderAdminUserComponent]
    });
    fixture = TestBed.createComponent(HeaderAdminUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
