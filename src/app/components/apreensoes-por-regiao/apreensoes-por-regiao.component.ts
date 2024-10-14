import { Component, OnInit } from '@angular/core';
import { ArmasService } from '../../services/armas.service';
import { ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-apreensoes-por-regiao',
  templateUrl: './apreensoes-por-regiao.component.html',
  styleUrls: ['./apreensoes-por-regiao.component.scss'],
  standalone: true,
  imports: [BaseChartDirective],
})
export class ApreensoesPorRegiaoComponent implements OnInit {
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
        stacked: true,
        title: {
          display: true,
          text: 'Regiões',
        },
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
    this.loadApreensoesPorRegiao();
  }

  loadApreensoesPorRegiao(): void {
    this.armasService.getApreensoesPorRegiao().subscribe((data: any[]) => {
      this.barChartLabels = data.map((item) => item.região);
      this.barChartData[0].data = data.map((item) => item.totalArmasDeFogox);
      this.barChartData[1].data = data.map((item) => item.totalArmasBrancas);
      this.barChartData[2].data = data.map(
        (item) => item.totalArtefatosExplosivos
      );
      this.barChartData[3].data = data.map((item) => item.totalSimulacros);
    });
  }

  getHalfWindowHeight(): number {
    return window.innerHeight / 2;
  }
}
