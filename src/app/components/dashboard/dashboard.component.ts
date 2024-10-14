import { Component } from '@angular/core';

import { DistribuicaoArmasComponent } from '../distribuicao-armas/distribuicao-armas.component';
import { TendenciasComponent } from '../tendencias/tendencias.component';
import { ApreensoesPorRegiaoComponent } from '../apreensoes-por-regiao/apreensoes-por-regiao.component';
import { ApreensoesPorMesETipoComponent } from '../apreensoes-por-mes-e-tipo/apreensoes-por-mes-e-tipo.component';
import { ComparacaoAnosComponent } from '../comparacao-anos/comparacao-anos.component';
import { RelatorioAnualComponent } from '../relatorio-anual/relatorio-anual.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DistribuicaoArmasComponent,
    TendenciasComponent,
    ApreensoesPorRegiaoComponent,
    ApreensoesPorMesETipoComponent,
    ComparacaoAnosComponent,
    RelatorioAnualComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
