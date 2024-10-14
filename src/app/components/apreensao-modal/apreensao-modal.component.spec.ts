import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApreensaoModalComponent } from './apreensao-modal.component';

describe('ApreensaoModalComponent', () => {
  let component: ApreensaoModalComponent;
  let fixture: ComponentFixture<ApreensaoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApreensaoModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApreensaoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
