import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponentComponent } from './blog-component.component';

describe('BlogComponentComponent', () => {
  let component: BlogComponentComponent;
  let fixture: ComponentFixture<BlogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
