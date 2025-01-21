import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimumLogoComponent } from './minimum-logo.component';

describe('MinimumLogoComponent', () => {
  let component: MinimumLogoComponent;
  let fixture: ComponentFixture<MinimumLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinimumLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinimumLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
