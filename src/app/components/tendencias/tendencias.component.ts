import { Component, OnInit } from '@angular/core';
import { ArmasService } from '../../services/armas.service';
import { ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-tendencias',
  templateUrl: './tendencias.component.html',
  styleUrls: ['./tendencias.component.scss'],
  standalone: true,
  imports: [BaseChartDirective],
})
export class TendenciasComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        title: {
          display: true,
          text: 'Quantidade',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Ano',
        },
        stacked: true,
      },
    },
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  public barChartLabels: string[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: {
    data: number[];
    label: string;
    backgroundColor: string;
  }[] = [
    {
      data: [],
      label: 'Armas de Fogo',
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    }, // Vermelho
    {
      data: [],
      label: 'Armas Brancas',
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
    }, // Azul
    {
      data: [],
      label: 'Artefatos Explosivos',
      backgroundColor: 'rgba(255, 159, 64, 0.6)',
    }, // Laranja
    {
      data: [],
      label: 'Simulacros',
      backgroundColor: 'rgba(151, 53, 192, 0.6)',
    }, // Roxo
  ];

  constructor(private armasService: ArmasService) {}

  ngOnInit(): void {
    this.loadTendencias();
  }

  getHalfWindowHeight(): number {
    return window.innerHeight / 2;
  }
  loadTendencias(): void {
    this.armasService.getTendencias().subscribe((data) => {
      const anos = data.map((item: { ano: any }) => item.ano);
      this.barChartLabels = anos;
      this.barChartData[0].data = data.map(
        (item: { totalArmasDeFogo: any }) => item.totalArmasDeFogo
      );
      this.barChartData[1].data = data.map(
        (item: { totalArmasBrancas: any }) => item.totalArmasBrancas
      );
      this.barChartData[2].data = data.map(
        (item: { totalArtefatosExplosivos: any }) =>
          item.totalArtefatosExplosivos
      );
      this.barChartData[3].data = data.map(
        (item: { totalSimulacros: any }) => item.totalSimulacros
      );
    });
  }
}
