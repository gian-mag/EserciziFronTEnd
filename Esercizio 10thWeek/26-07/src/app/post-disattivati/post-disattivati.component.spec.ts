import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDisattivatiComponent } from './post-disattivati.component';

describe('PostDisattivatiComponent', () => {
  let component: PostDisattivatiComponent;
  let fixture: ComponentFixture<PostDisattivatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDisattivatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDisattivatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
