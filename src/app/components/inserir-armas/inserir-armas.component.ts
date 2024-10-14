import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ArmasService } from '../../services/armas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inserir-armas',
  templateUrl: './inserir-armas.component.html',
  styleUrls: ['./inserir-armas.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class InserirArmasComponent {
  armasForm: FormGroup;

  constructor(private fb: FormBuilder, private armasService: ArmasService) {
    this.armasForm = this.fb.group({
      cisp: ['', Validators.required],
      aisp: ['', Validators.required],
      ano: ['', Validators.required],
      arma_fogo_total: ['', Validators.required],
      arma_branca_total: ['', Validators.required],
      artefato_explosivo_total: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.armasForm.valid) {
      this.armasService
        .createApreensao(this.armasForm.value)
        .subscribe((response) => {
          console.log('Registro inserido com sucesso!', response);
          this.armasForm.reset();
        });
    }
  }
}
