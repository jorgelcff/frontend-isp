import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-apreensao-modal',
  templateUrl: './apreensao-modal.component.html',
  styleUrls: ['./apreensao-modal.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatLabel,
    MatFormField,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
})
export class ApreensaoModalComponent implements OnInit {
  apreensaoForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ApreensaoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.apreensaoForm = this.fb.group({
      cisp: [data?.cisp || '', Validators.required],
      aisp: [data?.aisp || '', Validators.required],
      risp: [data?.risp || '', Validators.required],
      ano: [data?.ano || '', Validators.required],
      mes: [data?.mes || '', Validators.required],
      arma_fogo_arma_fabricacao_caseira: [
        data?.arma_fogo_arma_fabricacao_caseira || 0,
      ],
      arma_fogo_carabina: [data?.arma_fogo_carabina || 0],
      arma_fogo_espingarda: [data?.arma_fogo_espingarda || 0],
      arma_fogo_fuzil: [data?.arma_fogo_fuzil || 0],
      arma_fogo_garrucha: [data?.arma_fogo_garrucha || 0],
      arma_fogo_garruchao: [data?.arma_fogo_garruchao || 0],
      arma_fogo_metralhadora: [data?.arma_fogo_metralhadora || 0],
      arma_fogo_outros: [data?.arma_fogo_outros || 0],
      arma_fogo_pistola: [data?.arma_fogo_pistola || 0],
      arma_fogo_revolver: [data?.arma_fogo_revolver || 0],
      arma_fogo_submetralhadora: [data?.arma_fogo_submetralhadora || 0],
      arma_fogo_total: [data?.arma_fogo_total || 0],
      arma_branca_total: [data?.arma_branca_total || 0],
      artefato_explosivo_armadilha_explosiva: [
        data?.artefato_explosivo_armadilha_explosiva || 0,
      ],
      artefato_explosivo_armadilha_incendiaria: [
        data?.artefato_explosivo_armadilha_incendiaria || 0,
      ],
      artefato_explosivo_bomba_fabricacao_caseira: [
        data?.artefato_explosivo_bomba_fabricacao_caseira || 0,
      ],
      artefato_explosivo_granada: [data?.artefato_explosivo_granada || 0],
      artefato_explosivo_material_belico_explosivo: [
        data?.artefato_explosivo_material_belico_explosivo || 0,
      ],
      artefato_explosivo_material_explosivo: [
        data?.artefato_explosivo_material_explosivo || 0,
      ],
      artefato_explosivo_material_explosivo_caseiro: [
        data?.artefato_explosivo_material_explosivo_caseiro || 0,
      ],
      artefato_explosivo_material_nao_identificado: [
        data?.artefato_explosivo_material_nao_identificado || 0,
      ],
      artefato_explosivo_total: [data?.artefato_explosivo_total || 0],
      municao_total: [data?.municao_total || 0],
      simulacro_airsoft: [data?.simulacro_airsoft || 0],
      simulacro_arma_fabricacao_caseira: [
        data?.simulacro_arma_fabricacao_caseira || 0,
      ],
      simulacro_carabina: [data?.simulacro_carabina || 0],
      simulacro_espingarda: [data?.simulacro_espingarda || 0],
      simulacro_fuzil: [data?.simulacro_fuzil || 0],
      simulacro_garrucha: [data?.simulacro_garrucha || 0],
      simulacro_garruchao: [data?.simulacro_garruchao || 0],
      simulacro_metralhadora: [data?.simulacro_metralhadora || 0],
      simulacro_outros: [data?.simulacro_outros || 0],
      simulacro_paintball: [data?.simulacro_paintball || 0],
      simulacro_pistola: [data?.simulacro_pistola || 0],
      simulacro_revolver: [data?.simulacro_revolver || 0],
      simulacro_submetralhadora: [data?.simulacro_submetralhadora || 0],
      simulacro_total: [data?.simulacro_total || 0],
      id: [data?.id || ''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.apreensaoForm.valid) {
      this.dialogRef.close(this.apreensaoForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
