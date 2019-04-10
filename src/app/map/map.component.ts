import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  info: any;

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken()
    };
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
