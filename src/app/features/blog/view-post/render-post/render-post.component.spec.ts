import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderPostComponent } from './render-post.component';

describe('ViewPostComponent', () => {
  let component: RenderPostComponent;
  let fixture: ComponentFixture<RenderPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
