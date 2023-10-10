import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaseComponent } from './pase.component';

describe('PaseComponent', () => {
  let component: PaseComponent;
  let fixture: ComponentFixture<PaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaseComponent]
    });
    fixture = TestBed.createComponent(PaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
