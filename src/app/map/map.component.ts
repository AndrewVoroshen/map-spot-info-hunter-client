import { Component, OnInit, ViewChild } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service';
import { SpotService } from './map.service';
import { SpotRequest } from './model/spot-request';
import { SpotResponse } from './model/spot-response';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  form: any = {};
  savedSpots: SpotResponse[];
  initLat: number = 53.9;
  initLng: number = 27.56667;
  radius: number;

  info: any;

  constructor(private token: TokenStorageService, private spotService: SpotService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken()
    };
    this.spotService.getAll().subscribe(
      data => {
        this.savedSpots = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  onChoseLocation(event) {
    var lat = event.coords.lat;
    var lng = event.coords.lng;
    this.save(lng, lat)
  }

  find() {
    this.save(this.form.lng, this.form.lat)
  }

  save(lng: number, lat: number) {
    this.spotService.save(new SpotRequest(lat, lng)).subscribe(
      data => {
        this.initLat = data.lat;
        this.initLng = data.lng;
        this.savedSpots.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  delete() {
    this.spotService.deleteAll().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }
}
