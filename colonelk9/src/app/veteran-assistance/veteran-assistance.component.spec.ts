import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteranAssistanceComponent } from './veteran-assistance.component';

describe('VeteranAssistanceComponent', () => {
  let component: VeteranAssistanceComponent;
  let fixture: ComponentFixture<VeteranAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeteranAssistanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeteranAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
