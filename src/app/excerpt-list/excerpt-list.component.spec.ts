import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcerptListComponent } from './excerpt-list.component';

describe('ExcerptListComponent', () => {
  let component: ExcerptListComponent;
  let fixture: ComponentFixture<ExcerptListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcerptListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcerptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
