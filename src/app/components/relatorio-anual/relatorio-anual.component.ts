import { Component, OnInit } from '@angular/core';
import { ArmasService } from '../../services/armas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-relatorio-anual',
  templateUrl: './relatorio-anual.component.html',
  styleUrls: ['./relatorio-anual.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class RelatorioAnualComponent implements OnInit {
  relatorio: any = null;
  ano: number = new Date().getFullYear();
  anosDisponiveis: number[] = [];

  constructor(private armasService: ArmasService) {}

  ngOnInit(): void {
    this.loadRelatorioAnual(this.ano);
    this.populateAnosDisponiveis();
  }

  populateAnosDisponiveis(): void {
    const anoInicio = 2007;
    const anoFim = 2024;
    for (let ano = anoInicio; ano <= anoFim; ano++) {
      this.anosDisponiveis.push(ano);
    }
  }

  loadRelatorioAnual(ano: number): void {
    this.armasService.getRelatorioAnual(ano).subscribe(
      (data) => {
        this.relatorio = data;
      },
      (error) => {
        console.error('Erro ao carregar o relatório:', error);
      }
    );
  }

  onAnoChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.ano = Number(selectElement.value);
    this.loadRelatorioAnual(this.ano);
  }
}
