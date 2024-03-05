import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsPage } from './deals.page';

describe('DealsPage', () => {
  let component: DealsPage;
  let fixture: ComponentFixture<DealsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(DealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
