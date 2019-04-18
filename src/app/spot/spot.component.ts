import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotResponse } from '../map/model/spot-response';
import { SpotService } from '../map/map.service';
import { PlaceResponse } from '../map/model/place-response';

@Component({
  selector: 'app-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.css']
})
export class SpotComponent implements OnInit {

  @Input() id: any;

  places: PlaceResponse[];

  constructor(private route: ActivatedRoute, private spotService: SpotService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>
      this.id = params.get('id')
    )
    this.spotService.getOne(this.id).subscribe(
      data => {
        this.places = data.placeResponses;
      },
      error => {
        console.log(error);
      }
    )
  }

}
