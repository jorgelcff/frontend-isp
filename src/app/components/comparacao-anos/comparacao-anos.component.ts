import { Component, OnInit } from '@angular/core';
import { ArmasService } from '../../services/armas.service';
import { ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-comparacao-anos',
  templateUrl: './comparacao-anos.component.html',
  styleUrls: ['./comparacao-anos.component.scss'],
  standalone: true,
  imports: [BaseChartDirective],
})
export class ComparacaoAnosComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Total de Apreensões',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Anos',
        },
      },
    },
  };

  public barChartLabels: string[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  // Múltiplos conjuntos de dados para diferentes tipos de apreensões
  public barChartData = [
    {
      data: [],
      label: 'Armas de Fogo',
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
    {
      data: [],
      label: 'Armas Brancas',
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
    },
    {
      data: [],
      label: 'Artefatos Explosivos',
      backgroundColor: 'rgba(255, 206, 86, 0.6)',
    },
  ];

  constructor(private armasService: ArmasService) {}

  ngOnInit(): void {
    this.armasService.getComparacaoAnos().subscribe((data) => {
      const anos = data.map((item: { ano: any }) => item.ano);
      const totalArmasDeFogo = data.map(
        (item: { totalArmasDeFogo: any }) => item.totalArmasDeFogo
      );
      const totalArmasBrancas = data.map(
        (item: { totalArmasBrancas: any }) => item.totalArmasBrancas
      );
      const totalArtefatosExplosivos = data.map(
        (item: { totalArtefatosExplosivos: any }) =>
          item.totalArtefatosExplosivos
      );

      this.barChartLabels = anos;
      this.barChartData = [
        {
          data: totalArmasDeFogo,
          label: 'Armas de Fogo',
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
        {
          data: totalArmasBrancas,
          label: 'Armas Brancas',
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
        },
        {
          data: totalArtefatosExplosivos,
          label: 'Artefatos Explosivos',
          backgroundColor: 'rgba(255, 206, 86, 0.6)',
        },
      ];
    });
  }
}
