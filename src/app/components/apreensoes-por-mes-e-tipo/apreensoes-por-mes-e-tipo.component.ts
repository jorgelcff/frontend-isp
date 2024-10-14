import { Component, OnInit } from '@angular/core';
import { ArmasService } from '../../services/armas.service';
import { ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-apreensoes-por-mes-e-tipo',
  templateUrl: './apreensoes-por-mes-e-tipo.component.html',
  styleUrls: ['./apreensoes-por-mes-e-tipo.component.scss'],
  standalone: true,
  imports: [BaseChartDirective],
})
export class ApreensoesPorMesETipoComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: string[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: { data: unknown[]; label: string }[] = [
    { data: [], label: 'Apreensões por Mês e Tipo' },
  ];

  constructor(private armasService: ArmasService) {}

  ngOnInit(): void {
    this.armasService.getApreensoesPorTipo().subscribe((data) => {
      const labels = Object.keys(data);
      const values = Object.values(data);
      this.barChartLabels = labels;
      this.barChartData = [{ data: values, label: 'Apreensões por Tipo' }];
    });
  }
}
