import { Component, OnInit } from '@angular/core';
import { ArmasService } from '../../services/armas.service';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-distribuicao-armas',
  templateUrl: './distribuicao-armas.component.html',
  styleUrls: ['./distribuicao-armas.component.scss'],
  standalone: true,
  imports: [BaseChartDirective],
})
export class DistribuicaoArmasComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  public pieChartLabels: string[] = [
    'Total Armas de Fogo',
    'Total Armas Brancas',
    'Total Artefatos Explosivos',
    'Total Simulacros',
  ];

  public pieChartData: number[] = [];

  public pieChartType: 'pie' = 'pie';

  public totalMunicoes: number = 0;

  public pieChartColors: string[] = [
    'rgba(54, 162, 235, 0.6)', // Azul para Armas de Fogo
    'rgba(255, 99, 132, 0.6)', // Vermelho para Armas Brancas
    'rgba(255, 159, 64, 0.6)', // Laranja para Artefatos Explosivos
    'rgba(151, 53, 192, 0.6)', // Roxo para Simulacros
  ];

  constructor(private armasService: ArmasService) {}

  ngOnInit(): void {
    this.armasService.getDistribuicaoArmas().subscribe((data) => {
      const values = [
        data['Total Armas de Fogo'],
        data['Total Armas Brancas'],
        data['Total Artefatos Explosivos'],
        data['Total Simulacros'],
      ];

      this.pieChartData = values;

      this.totalMunicoes = data['Total Municoes'];
    });
  }

  getHalfWindowHeight(): number {
    return window.innerHeight / 2;
  }
}
