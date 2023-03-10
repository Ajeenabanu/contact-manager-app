import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotfountComponent } from './page-notfount.component';

describe('PageNotfountComponent', () => {
  let component: PageNotfountComponent;
  let fixture: ComponentFixture<PageNotfountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotfountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotfountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
