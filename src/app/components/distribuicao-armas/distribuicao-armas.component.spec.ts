import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribuicaoArmasComponent } from './distribuicao-armas.component';

describe('DistribuicaoArmasComponent', () => {
  let component: DistribuicaoArmasComponent;
  let fixture: ComponentFixture<DistribuicaoArmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistribuicaoArmasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistribuicaoArmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
