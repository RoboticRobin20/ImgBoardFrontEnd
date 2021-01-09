import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter} from 'rxjs/operators';
import { ImageService } from '../image.service';
import { Image } from '../../models/image.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  images: Observable<Image[]>;
  constructor(private _imageService: ImageService, private router: Router) { 
    this.images = this._imageService.getImages();
  }
  
  onView(image: Image){
    console.log('test');
    localStorage.setItem('currentImage', JSON.stringify(image));
    this.router.navigate(['/images/detail']);
  };

  ngOnInit(): void {
  }
}
