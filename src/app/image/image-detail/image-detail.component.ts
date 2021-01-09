import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ImageService } from '../image.service';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {

  i: Image;
  imageKey: string;
  constructor(private _imageService: ImageService, private router: Router, private activatedRoute: ActivatedRoute) { 
    var json = JSON.parse(localStorage.getItem('currentImage'))
    console.log(json);
    this.i = new Image(json.source, json.userEmail, json.description, json.imageKey);
  }

  ngOnInit(): void {
  }

}
