import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlmInteractionComponent } from './llm-interaction.component';

describe('LlmInteractionComponent', () => {
  let component: LlmInteractionComponent;
  let fixture: ComponentFixture<LlmInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlmInteractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlmInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
