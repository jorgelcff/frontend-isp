import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparacaoAnosComponent } from './comparacao-anos.component';

describe('ComparacaoAnosComponent', () => {
  let component: ComparacaoAnosComponent;
  let fixture: ComponentFixture<ComparacaoAnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparacaoAnosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparacaoAnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
