import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  photos: Object[] = [];

  constructor(private photoService: PhotoService) {

  }

  ngOnInit(): void {
    this.photoService
      .listFromUser('flavio')
      .subscribe(photos => this.photos = photos);
  }
}
