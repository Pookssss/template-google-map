import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'google-map';

  center: google.maps.LatLngLiteral | any
  center2: [] | any = [13.748374670633623, 100.56731667350648]

  markers: [] | any = {
    lat: 13.748374670633623,
    lng: 100.56731667350648
  };
  label: string = '';
  titleP: string = 'Marker title ';
  image: string | any = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  image2: string | any = "../assets/images/home-mobile.png";
  // options = { animation: google.maps.Animation.BOUNCE }
  options = { icon: this.image2 ,animation: google.maps.Animation.BOUNCE ,anchorPoint:new google.maps.Point(0, -29) }
  options2 = { icon: this.image2 ,animation: google.maps.Animation.BOUNCE}


  

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: 13.748374670633623,
        lng: 100.56731667350648,
      }
    })
  }


  addMarker() {
    this.markers = {
      position: {
        lat: 13.748374670633623,
        lng: 100.56731667350648,
      },
      label: {
        color: 'red',
        text: 'Marker label ',
      },
      title: 'Marker title ',
      options: { animation: google.maps.Animation.BOUNCE },
    }
  }


}
