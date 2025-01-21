import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLogoComponent } from './full-logo.component';

describe('FullLogoComponent', () => {
  let component: FullLogoComponent;
  let fixture: ComponentFixture<FullLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
