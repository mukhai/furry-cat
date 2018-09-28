import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, Environment, Marker } from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: GoogleMap;
  
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    console.log("Im Alive");
   this.loadMap();
  }


  loadMap(){
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '(AIzaSyA3QrQME0A7-oQaV1yqFvNN-7sYktOursI)',
      'API_KEY_FOR_BROWSER_DEBUG': ''
    });
      
    //Environment.setBackgroundColor();

    this.map = GoogleMaps.create('map_canvas');

    this.map.addMarker({
      title: '@ionic-native/google-maps',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat:43.0741904,
        lng:-89.3809802
      }
    }).then((marker:Marker) => {
      marker.showInfoWindow();
    });
  }

}
