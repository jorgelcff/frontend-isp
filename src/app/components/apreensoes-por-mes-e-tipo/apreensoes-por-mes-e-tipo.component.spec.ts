import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApreensoesPorMesETipoComponent } from './apreensoes-por-mes-e-tipo.component';

describe('ApreensoesPorMesETipoComponent', () => {
  let component: ApreensoesPorMesETipoComponent;
  let fixture: ComponentFixture<ApreensoesPorMesETipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApreensoesPorMesETipoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApreensoesPorMesETipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
