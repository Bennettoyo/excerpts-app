import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcerptFormComponent } from './excerpt-form.component';

describe('ExcerptFormComponent', () => {
  let component: ExcerptFormComponent;
  let fixture: ComponentFixture<ExcerptFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcerptFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcerptFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
