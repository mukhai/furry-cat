import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, LatLng, Environment } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };


  userName: any = "khairil";
  map: GoogleMap;
  userlat: any;
  userlng: any;


  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
  
  }

  ionViewDidLoad() {
    console.log("Im Alive");
    this.loadUserLocation();
    this.loadMap();
  }

  loadUserLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.userlat = resp.coords.latitude;
      this.setlat(resp.coords.latitude);
      this.userlng = resp.coords.longitude;
      this.setlng(resp.coords.longitude);
      //console.log(resp.coords.latitude) dapat result
      //console.log(this.userlat)   dapat result
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    console.log("loadUserLocation", this.userlat);//undefined

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      //data can be a set of coordinates, or an error (if an error occurred).
      data.coords.latitude
      data.coords.longitude
    });
  }

  setlat(userlat){
    this.userlat = userlat;
    console.log("setlat",this.userlat);
  }

  getlat(){
    console.log("getlat",this.userlat);
    return this.userlat;
  }

  setlng(userlng){
    this.userlng = userlng;
    console.log("setlng",this.userlng);
  }

  getlng(){
    return this.userlng;
  }

  loadMap() {
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '(AIzaSyA3QrQME0A7-oQaV1yqFvNN-7sYktOursI)',
      'API_KEY_FOR_BROWSER_DEBUG': ''
    });

    //Environment.setBackgroundColor();

    this.map = GoogleMaps.create('map_canvas');

    this.map.addMarker({
      title: this.person.firstName,
      icon: 'red',
      animation: 'DROP',
      zoom: 18,
      tilt: 30,
      position: {
        lat: this.getlat(),
        lng: this.getlng()
      },

    }).then((marker: Marker) => {
      marker.showInfoWindow();
    });
    
    console.log("loadmap method", this.userlat);//undefined
    console.log("loadmap method", this.getlat());
    console.log("loadmap method", this.getlng());
  }

}
