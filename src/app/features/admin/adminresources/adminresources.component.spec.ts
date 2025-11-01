import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminresourcesComponent } from './adminresources.component';

describe('AdminresourcesComponent', () => {
  let component: AdminresourcesComponent;
  let fixture: ComponentFixture<AdminresourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminresourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
