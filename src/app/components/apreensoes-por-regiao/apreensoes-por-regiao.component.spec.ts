import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApreensoesPorRegiaoComponent } from './apreensoes-por-regiao.component';

describe('ApreensoesPorRegiaoComponent', () => {
  let component: ApreensoesPorRegiaoComponent;
  let fixture: ComponentFixture<ApreensoesPorRegiaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApreensoesPorRegiaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApreensoesPorRegiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
