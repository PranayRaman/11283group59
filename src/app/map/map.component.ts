import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  constructor(private http: HttpClient) { }
  private map: any;
  private data: any;
  public name: any;

  ngAfterViewInit(): void {
    this.http.get('http://localhost:8000/lakeData').subscribe(res => {
      this.data = res;
      console.log('data', this.data);
      this.initMap();
    })

 

  }

  private initMap(): void {

    this.map = L.map('map', {
      center: [28.9, -81.5],
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


    var Wauburg = L.polygon([
      [29.536345, -82.300753],
      [29.527646, -82.306372],
      [29.524408, -82.299147],
    ]).addTo(this.map);
    Wauburg.bindPopup("Name: " + this.data[0].name + "<br>Dissolved oxygen: " + this.data[0].dissolvedOxygen + "<br>pH: " + this.data[0].pH +
      "<br>Nitrate: " + this.data[0].nitrogen + "<br>Algae Bloom: " + this.data[0].algaeBloom + "<br> Aquatic Life: " + this.data[0].aquaticLife)


    var Okeechobee = L.polygon([
      [27.203729, -80.785434],
      [27.102665, -80.821378],
      [26.966916, -80.991034],
      [26.756566, -80.870262],
      [26.802774, -80.703482],
      [26.940002, -80.611466]
    ]).addTo(this.map);
    Okeechobee.bindPopup("Name: " + this.data[1].name + "<br>Dissolved oxygen: " + this.data[1].dissolvedOxygen + "<br>pH: " + this.data[1].pH +
      "<br>Nitrate: " + this.data[1].nitrogen + "<br>Algae Bloom Level: " + this.data[1].algaeBloom + "<br> Aquatic Life: " + this.data[1].aquaticLife)

    var Apopka = L.polygon([
      [28.6805, -81.659493],
      [28.638388, -81.692168],
      [28.585948, -81.648261],
      [28.567565, -81.651324],
      [28.595362, -81.586483],
      [28.628529, -81.554319]
    ]).addTo(this.map);
    Apopka.bindPopup("Name: " + this.data[2].name + "<br>Dissolved oxygen: " + this.data[2].dissolvedOxygen + "<br>pH: " + this.data[2].pH +
      "<br>Nitrate: " + this.data[2].nitrogen + "<br>Algae Bloom Level: " + this.data[2].algaeBloom + "<br> Aquatic Life: " + this.data[2].aquaticLife)


    var George = L.polygon([
      [29.345934, -81.637743],
      [29.301333, -81.654909],
      [29.213572, -81.606157],
      [29.229452, -81.529596],
      [29.36299, -81.597917],
    ]).addTo(this.map);
    George.bindPopup("Name: " + this.data[3].name + "<br>Dissolved oxygen: " + this.data[3].dissolvedOxygen + "<br>pH: " + this.data[3].pH +
      "<br>Nitrate: " + this.data[3].nitrogen + "<br>Algae Bloom Level: " + this.data[3].algaeBloom + "<br> Aquatic Life: " + this.data[3].aquaticLife)

    var Alice = L.polygon([
      [29.642454, -82.36279],
      [29.641428, -82.36235],
      [29.642277, -82.361374],
      [29.642645, -82.359378],
      [29.644352, -82.360312],
    ]).addTo(this.map);
    Alice.bindPopup("Name: " + this.data[4].name + "<br>Dissolved oxygen: " + this.data[4].dissolvedOxygen + "<br>pH: " + this.data[4].pH +
      "<br>Nitrate: " + this.data[4].nitrogen + "<br>Algae Bloom Level: " + this.data[4].algaeBloom + "<br> Aquatic Life: " + this.data[4].aquaticLife)

    var Istokpoga = L.polygon([
      [27.420643, -81.304937],
      [27.393212, -81.319357],
      [27.302947, -81.302191],
      [27.369433, -81.228033],
      [27.436489, -81.270605],
    ]).addTo(this.map);
    Istokpoga.bindPopup("Name: " + this.data[5].name + "<br>Dissolved oxygen: " + this.data[5].dissolvedOxygen + "<br>pH: " + this.data[5].pH +
      "<br>Nitrate: " + this.data[5].nitrogen + "<br>Algae Bloom Level: " + this.data[5].algaeBloom + "<br> Aquatic Life: " + this.data[5].aquaticLife)

    var Tohopekaliga = L.polygon([
      [28.255284, -81.395175],
      [28.214147, -81.415431],
      [28.143331, -81.364963],
      [28.172087, -81.33063],
      [28.19206, -81.379726],
      [28.241372, -81.373889],
    ]).addTo(this.map);
    Tohopekaliga.bindPopup("Name: " + this.data[6].name + "<br>Dissolved oxygen: " + this.data[6].dissolvedOxygen + "<br>pH: " + this.data[6].pH +
      "<br>Nitrate: " + this.data[6].nitrogen + "<br>Algae Bloom Level: " + this.data[6].algaeBloom + "<br> Aquatic Life: " + this.data[6].aquaticLife)

    var Crescent = L.polygon([
      [29.525078, -81.548547],
      [29.465312, -81.515931],
      [29.411792, -81.491212],
      [29.386667, -81.475419],
      [29.392351, -81.440744],
      [29.404614, -81.472673],
      [29.475774, -81.489495],
      [29.521792, -81.525201],
    ]).addTo(this.map);
    Crescent.bindPopup("Name: " + this.data[7].name + "<br>Dissolved oxygen: " + this.data[7].dissolvedOxygen + "<br>pH: " + this.data[7].pH +
      "<br>Nitrate: " + this.data[7].nitrogen + "<br>Algae Bloom Level: " + this.data[7].algaeBloom + "<br> Aquatic Life: " + this.data[7].aquaticLife)

    var Harris = L.polygon([
      [28.785056, -81.878894],
      [28.748942, -81.80508],
      [28.77332, -81.778644],
      [28.816345, -81.79272],
      [28.783853, -81.838726],
      [28.798295, -81.863445],
    ]).addTo(this.map);
    Harris.bindPopup("Name: " + this.data[8].name + "<br>Dissolved oxygen: " + this.data[8].dissolvedOxygen + "<br>pH: " + this.data[8].pH +
      "<br>Nitrate: " + this.data[8].nitrogen + "<br>Algae Bloom Level: " + this.data[8].algaeBloom + "<br> Aquatic Life: " + this.data[8].aquaticLife)

      var Santa = L.polygon([
        [29.759024, -82.08792],
        [29.742779, -82.097877],
        [29.727277, -82.087234],
        [29.719525 , -82.068351],
        [29.723997, -82.055305],
        [29.747697 , -82.058566],
        [29.760067, -82.073501],
      ]).addTo(this.map);
      Santa.bindPopup("Name: " + this.data[9].name + "<br>Dissolved oxygen: " + this.data[9].dissolvedOxygen + "<br>pH: " + this.data[9].pH +
        "<br>Nitrate: " + this.data[9].nitrogen + "<br>Algae Bloom Level: " + this.data[9].algaeBloom + "<br> Aquatic Life: " + this.data[9].aquaticLife)
  
 

  }






  refresh(): void {
    window.location.reload();
  }

  reset() {
    this.map.flyTo([28.9, -81.5], 7);
  }

  lake1() { //wauburg
    this.map.flyTo([29.53, -82.3], 14);
  }

  lake2() { //okeechobee
    this.map.flyTo([26.94983, -80.803444], 10);
  }

  lake3() { //apopka
    this.map.flyTo([28.624048, -81.625286], 11);
  }

  lake4() { //george
    this.map.flyTo([29.286063, -81.594484], 11);
  }

  lake5() { //Alice
    this.map.flyTo([29.642892, -82.361224], 16);
  }

  lake6() { //Istokpoga
    this.map.flyTo([27.379799, -81.282965], 11);
  }

  lake7() { //Tohopekaliga
    this.map.flyTo([28.203861, -81.394488], 11);
  }

  lake8() { //Crescent
    this.map.flyTo([29.463519, -81.502885], 12);
  }

  lake9() { //Harris
    this.map.flyTo([28.772719, -81.814006], 11);
  }
  lake10() { //Santa
    this.map.flyTo([29.739798 ,  -82.075732], 13);
  }


}