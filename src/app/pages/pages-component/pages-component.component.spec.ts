import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesComponentComponent } from './pages-component.component';

describe('PagesComponentComponent', () => {
  let component: PagesComponentComponent;
  let fixture: ComponentFixture<PagesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesComponentComponent]
    });
    fixture = TestBed.createComponent(PagesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
