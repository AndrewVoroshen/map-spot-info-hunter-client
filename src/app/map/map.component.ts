import { Component, OnInit, ViewChild } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service';
import { SpotService } from './map.service';
import { SpotRequest } from './model/spot-request';
import { SpotResponse } from './model/spot-response';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  search: any = {};
  savedSpots: SpotResponse[];
  initLat: number = 53.9;
  initLng: number = 27.56667;
  errorMessage: string = null;
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

  onSubmit(form: NgForm) {
    this.save(form.controls['longitude'].value, form.controls['latitude'].value)
  }

  save(lng: number, lat: number) {
    this.spotService.save(new SpotRequest(lat, lng)).subscribe(
      data => {
        this.initLat = data.lat;
        this.initLng = data.lng;
        this.errorMessage = null;
        this.savedSpots.push(data);
      },
      error => {
        this.errorMessage = error.error.message;
      }
    );
  }

  delete() {
    this.spotService.deleteAll().subscribe(
      data => {
        this.savedSpots = new Array<SpotResponse>();
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error.error.message;
      }
    )
  }
}
