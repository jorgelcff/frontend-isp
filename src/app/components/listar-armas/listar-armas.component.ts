import { Component, OnInit } from '@angular/core';
import { ArmasService } from '../../services/armas.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ApreensaoModalComponent } from '../apreensao-modal/apreensao-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-listar-armas',
  templateUrl: './listar-armas.component.html',
  styleUrls: ['./listar-armas.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
})
export class ListarArmasComponent implements OnInit {
  displayedColumns: string[] = [
    'cisp',
    'aisp',
    'risp',
    'ano',
    'mes',
    'arma_fogo_total',
    'arma_branca_total',
    'municao_total',
    'simulacro_total',
    'artefato_explosivo_total',
    'actions',
  ];
  dataSource = new MatTableDataSource<any>();
  totalCount = 0;
  pageSize = 10;
  page = 1;
  filterForm: FormGroup;

  loading = false;
  constructor(
    private armasService: ArmasService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.filterForm = this.fb.group({
      cisp: [''],
      aisp: [''],
      risp: [''],
      ano: [''],
      mes: [''],
    });
  }

  ngOnInit(): void {
    this.loadApreensoes();
  }

  getYears(): number[] {
    const startYear = 2007;
    const endYear = 2024;
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  }

  getMonths(): number[] {
    return Array.from({ length: 12 }, (_, i) => i + 1);
  }

  loadApreensoes(): void {
    this.loading = true;
    const filters = this.filterForm.value;
    this.armasService
      .getApreensoes(this.page, this.pageSize, filters)
      .subscribe((response) => {
        this.dataSource.data = response.data;
        this.totalCount = response.totalCount;
      });
    this.loading = false;
  }

  onPageChange(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadApreensoes();
  }

  applyFilter(): void {
    this.page = 1;
    this.loadApreensoes();
  }

  resetFilter(): void {
    this.filterForm.reset();
    this.applyFilter();
  }

  formatTooltipSimulacro(row: any): string {
    return `Simulacro:
    - Airsoft: ${row.simulacro_airsoft}
    - Pistola: ${row.simulacro_pistola}
    - Carabina: ${row.simulacro_carabina}
    - Espingarda: ${row.simulacro_espingarda}
    - Fuzil: ${row.simulacro_fuzil}
    - Revolver: ${row.simulacro_revolver}
    - Outros: ${row.simulacro_outros}`;
  }

  formatTooltipArtefato(row: any): string {
    return `Artefato Explosivo:
    - Granada: ${row.artefato_explosivo_granada}
    - Bomba de Fabricação Caseira: ${row.artefato_explosivo_bomba_fabricacao_caseira}
    - Material Explosivo: ${row.artefato_explosivo_material_explosivo}
    - Material Não Identificado: ${row.artefato_explosivo_material_nao_identificado}`;
  }

  formatTooltipArmaFogo(row: any): string {
    return `Arma de Fogo:
    - Revolver: ${row.arma_fogo_revolver}
    - Pistola: ${row.arma_fogo_pistola}
    - Fuzil: ${row.arma_fogo_fuzil}
    - Carabina: ${row.arma_fogo_carabina}
    - Espingarda: ${row.arma_fogo_espingarda}
    - Metralhadora: ${row.arma_fogo_metralhadora}
    - Outros: ${row.arma_fogo_outros}`;
  }

  formatTooltipArmaBranca(row: any): string {
    return `Arma Branca:
    - Facas e similares: ${row.arma_branca_total}`;
  }

  deleteRow(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.armasService.deleteApreensao(id).subscribe((response) => {
          this.snackBar.open('Apreensão deletada com sucesso!', 'Fechar', {
            duration: 3000,
          });
          this.applyFilter();
        });
      }
    });
  }

  openModal(data?: any): void {
    const dialogRef = this.dialog.open(ApreensaoModalComponent, {
      width: '650px',
      data: data || null,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (data) {
          this.editApreensao(result);
        } else {
          this.addApreensao(result);
        }
      }
    });
  }

  addApreensao(apreensao: any): void {
    this.armasService.createApreensao(apreensao).subscribe(
      (response) => {
        this.snackBar.open('Apreensão adicionada com sucesso!', 'Fechar', {
          duration: 3000,
        });
      },
      (error) => {
        this.snackBar.open(
          'Erro ao adicionar apreensão. Tente novamente.',
          'Fechar',
          {
            duration: 3000,
          }
        );
      }
    );
    this.applyFilter();
  }

  editApreensao(apreensao: any): void {
    console.log(apreensao);
    this.armasService.updateApreensao(apreensao.id, apreensao).subscribe(
      (response) => {
        this.snackBar.open('Apreensão atualizada com sucesso!', 'Fechar', {
          duration: 3000,
        });
      },
      (error) => {
        this.snackBar.open(
          'Erro ao atualizar apreensão. Tente novamente.',
          'Fechar',
          {
            duration: 3000,
          }
        );
      }
    );
    this.applyFilter();
  }
}
