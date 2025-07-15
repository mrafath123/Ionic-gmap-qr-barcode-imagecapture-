import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

// 👇 This tells TypeScript to allow use of the Google Maps global object
declare var google: any;

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.page.html',
  standalone: false,
})
export class GmapPage {

  constructor() {}

  async ionViewDidEnter() {
    try {
      // Get current GPS position
      const position = await Geolocation.getCurrentPosition();
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      // Show Google Map
      const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: { lat, lng },
        zoom: 15
      });

      // Add marker to user's location
      new google.maps.Marker({
        position: { lat, lng },
        map,
        title: 'You are here!',
      });
    } catch (error) {
      console.error('Geolocation error:', error);
    }
  }
}
