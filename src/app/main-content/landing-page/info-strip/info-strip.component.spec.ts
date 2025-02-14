import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoStripComponent } from './info-strip.component';

describe('InfoStripComponent', () => {
  let component: InfoStripComponent;
  let fixture: ComponentFixture<InfoStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoStripComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
