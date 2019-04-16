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
        console.log(data);
      }, 
      error => {
        console.log(error);
      }
    );
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
