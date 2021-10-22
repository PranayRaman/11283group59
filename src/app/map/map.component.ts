import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map: any;

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
polygon3.bindPopup("Water Quality: <br> Aquatic life: Good <br> ");

var polygon4 = L.polygon([
  [27.203729, -80.785434],
  [27.102665, -80.821378],
  [26.966916,  -80.991034],
  [26.756566 , -80.870262],
  [26.802774,-80.703482],
  [26.940002,-80.611466]
]).addTo(this.map);
polygon4.bindPopup("Lake Okeechobee")


  }

  

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();

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