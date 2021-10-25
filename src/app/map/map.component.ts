import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MapHttpService } from 'src/services/map.service';

import { Country } from '../model/countries';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  constructor(private mapService: MapHttpService) {}
  private map: any;
  countries: Country[] = [];

  private initMap(): void {
    
    this.map = L.map('map', {
      center: [ 28.9, -81.5 ],
      zoom: 7
    });
    

  const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicHJhbmF5MTIzNjgiLCJhIjoiY2t2MWZvbWU3MDFheTJucDZuenlsdDF2MiJ9.1nfQ-y0GGSnLXNNpdRSvSg'
}).addTo(this.map);

    tiles.addTo(this.map);

    var polygon2 = L.polygon([
      [29.536345, -82.300753],
      [29.527646, -82.306372],
      [29.524408, -82.299147],
  ]).addTo(this.map);
  polygon2.bindPopup("Lake Wauburg")
  

  var polygon1 = L.polygon([
    [27.203729, -80.785434],
    [27.102665, -80.821378],
    [26.966916,  -80.991034],
    [26.756566 , -80.870262],
    [26.802774,-80.703482],
    [26.940002,-80.611466]
]).addTo(this.map);
polygon1.bindPopup("Lake Okeechobee")

var polygon3 = L.polygon([
  [28.6805, -81.659493],
  [28.638388, -81.692168],
  [28.585948,  -81.648261],
  [ 28.567565 ,  -81.651324],
  [ 28.595362 , -81.586483],
  [ 28.628529,-81.554319]
]).addTo(this.map);
polygon3.bindPopup("Dissolved oxygen: 0.2 <br> pH Level: 7.4 <br> Nitrate Present: 0.9 <br> Algae Bloom: No <br> Aquatic life: Healthy <br> ");

var polygon4 = L.polygon([
  [27.203729, -80.785434],
  [27.102665, -80.821378],
  [26.966916,  -80.991034],
  [26.756566 , -80.870262],
  [26.802774,-80.703482],
  [26.940002,-80.611466]
]).addTo(this.map);
polygon4.bindPopup("Dissolved oxygen: 0.2 <br> pH Level: 7.0 <br> Nitrate Present: 0.9 <br> Algae Bloom: Blue-green algal bloom conditions were observed <br> Aquatic life: Healthy <br> ");


  }

 

  ngAfterViewInit(): void {
    this.initMap();
    this.get();
   
   

  }

  get(){
    this.mapService.getAll().subscribe(data => this.countries = data);
    console.log('here ', this.countries)
  }

  refresh(): void {
    window.location.reload();
}

reset(){
  this.map.flyTo([28.9, -81.5 ],7);
}

  lake1(){
    this.map.flyTo([29.53, -82.3],14);
   }

   lake2(){
    this.map.flyTo([26.94983, -80.803444],10);
   }

   lake3(){
    this.map.flyTo([28.624048, -81.625286],11);
   }


}