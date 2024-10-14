import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArmasService {
  private apiUrl =
    'https://e752-2804-29b8-51df-3b1d-6403-773c-efba-4179.ngrok-free.app/isp/armas';

  constructor(private http: HttpClient) {}

  // Distribuição de Armas por Tipo
  getDistribuicaoArmas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/totalDistribuicao`);
  }

  // Tendências ao Longo do Tempo
  getTendencias(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tendencias`);
  }

  getApreensoes(page: number, pageSize: number, filters: any): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    // Adiciona os filtros aos parâmetros, se houver
    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        params = params.set(key, filters[key]);
      }
    });

    return this.http.get(this.apiUrl, { params });
  }

  // Apreensões por Região
  getApreensoesPorRegiao(): Observable<any> {
    return this.http.get(`${this.apiUrl}/apreensoesPorRegiao`);
  }

  // Apreensões por Região específica (CISP)
  getApreensoesPorRegiaoCisp(cisp: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/apreensoesPorRegiao/${cisp}`);
  }

  // Tipos de Armas e Artefatos Explosivos
  getTiposArmasArtefatos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tiposArmasArtefatos`);
  }

  // Apreensões por Mês
  getApreensoesPorMes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/apreensoesPorMes`);
  }

  // Apreensões por Mês e Tipo
  getApreensoesPorMesETipo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/apreensoesPorMesETipo`);
  }

  // Tendências por Ano
  getTendenciasPorAno(ano: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/tendenciasPorAno/${ano}`);
  }

  // Comparação de Apreensões entre Anos
  getComparacaoAnos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/comparacaoAnos`);
  }

  // Relatório Anual
  getRelatorioAnual(ano: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/relatorioAnual/${ano}`);
  }

  // Apreensões por Tipo de Arma
  getApreensoesPorTipo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/apreensoesPorTipo`);
  }

  // Inserir nova apreensão
  createApreensao(data: any): Observable<any> {
    delete data.id;
    return this.http.post(`${this.apiUrl}`, data);
  }

  // Atualizar apreensão
  updateApreensao(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteApreensao(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // askLLM(question: string): Observable<any> {
  //   return this.http.post(`http://localhost:3000/llm/consultar`, {
  //     pergunta: question,
  //   });
  // }
}
