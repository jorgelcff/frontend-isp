import { Routes } from '@angular/router';
import { ListarArmasComponent } from './components/listar-armas/listar-armas.component';
import { InserirArmasComponent } from './components/inserir-armas/inserir-armas.component';
import { DistribuicaoArmasComponent } from './components/distribuicao-armas/distribuicao-armas.component';
import { TendenciasComponent } from './components/tendencias/tendencias.component';
import { ApreensoesPorRegiaoComponent } from './components/apreensoes-por-regiao/apreensoes-por-regiao.component';
import { ApreensoesPorMesETipoComponent } from './components/apreensoes-por-mes-e-tipo/apreensoes-por-mes-e-tipo.component';
import { ComparacaoAnosComponent } from './components/comparacao-anos/comparacao-anos.component';
import { RelatorioAnualComponent } from './components/relatorio-anual/relatorio-anual.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LLMInteractionComponent } from './components/llm-interaction/llm-interaction.component';

export const routes: Routes = [
  { path: 'listar', component: ListarArmasComponent },
  // { path: 'inserir', component: InserirArmasComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'distribuicao-armas', component: DistribuicaoArmasComponent },
  { path: 'tendencias', component: TendenciasComponent },
  { path: 'apreensoes-por-regiao', component: ApreensoesPorRegiaoComponent },
  {
    path: 'apreensoes-por-mes-e-tipo',
    component: ApreensoesPorMesETipoComponent,
  },
  { path: 'comparacao-anos', component: ComparacaoAnosComponent },
  { path: 'relatorio-anual', component: RelatorioAnualComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'chat', component: LLMInteractionComponent },
];
