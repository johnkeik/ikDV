import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertedBorderComponent } from './inverted-border.component';

describe('InvertedBorderComponent', () => {
  let component: InvertedBorderComponent;
  let fixture: ComponentFixture<InvertedBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvertedBorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvertedBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
