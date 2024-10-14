import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioAnualComponent } from './relatorio-anual.component';

describe('RelatorioAnualComponent', () => {
  let component: RelatorioAnualComponent;
  let fixture: ComponentFixture<RelatorioAnualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioAnualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioAnualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
