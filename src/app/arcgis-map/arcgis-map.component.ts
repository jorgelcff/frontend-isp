import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-arcgis-map',
  templateUrl: './arcgis-map.component.html',
  styleUrls: ['./arcgis-map.component.scss'],
})
export class ArcgisMapComponent implements OnInit {
  @ViewChild('mapViewNode', { static: true }) mapViewNode!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.loadArcGISMap();
  }

  loadArcGISMap() {
    // Carregar o módulo da ArcGIS JS API
    const { MapView, WebMap } = (window as any).esri;

    // Crie um mapa da web
    const webMap = new WebMap({
      portalItem: { id: 'YOUR_WEB_MAP_ID' }, // Substitua pelo ID do seu mapa da web
    });

    // Crie uma visualização do mapa
    const mapView = new MapView({
      container: this.mapViewNode.nativeElement,
      map: webMap,
      zoom: 10, // nível de zoom inicial
      center: [longitude, latitude], // Defina a longitude e latitude
    });
  }
}
