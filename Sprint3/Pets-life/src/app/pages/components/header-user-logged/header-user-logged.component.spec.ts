import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUserLoggedComponent } from './header-user-logged.component';

describe('HeaderUserLoggedComponent', () => {
  let component: HeaderUserLoggedComponent;
  let fixture: ComponentFixture<HeaderUserLoggedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderUserLoggedComponent]
    });
    fixture = TestBed.createComponent(HeaderUserLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
