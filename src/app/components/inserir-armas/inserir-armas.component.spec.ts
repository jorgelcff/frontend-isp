import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirArmasComponent } from './inserir-armas.component';

describe('InserirArmasComponent', () => {
  let component: InserirArmasComponent;
  let fixture: ComponentFixture<InserirArmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserirArmasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirArmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
