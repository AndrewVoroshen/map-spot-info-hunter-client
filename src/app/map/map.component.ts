import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service';
import { SpotService } from './map.service';
import { SpotRequest } from './model/spot-request';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  lat: any;
  lng: any;
  radius: any;

  info: any;

  constructor(private token: TokenStorageService, private spotService: SpotService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken()
    };
  }

  onChoseLocation(event) {
    var lat = event.coords.lat;
    var lng = event.coords.lng;
    this.spotService.save(new SpotRequest(lat, lng)).subscribe(
      data => {
        this.lat = data.lat;
        this.lng = data.lng;
        this.radius = data.radius;
        // console.log(data);
      }, 
      error => {
        console.log(error);
      }
    );
  } 
}
