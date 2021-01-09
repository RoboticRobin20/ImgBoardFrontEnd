import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageService } from '../image.service';
import { Image } from '../../models/image.model';
// import { FilePondComponent } from 'ngx-filepond/filepond.component';
// import { FilePondOptions } from 'filepond';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss']
})
export class ImageFormComponent implements OnInit {

  imageID: number;
  image: Image;

  constructor(private http: HttpClient, private _imageService: ImageService, private router: Router, private route: ActivatedRoute) {
    this.image = new Image("", JSON.parse(localStorage.getItem('user')).email, "","")
  }

  add(image: Image){
    console.log(image);
    this._imageService.postImage(image).subscribe(result => {
      this.router.navigate(['images']);
    });
  }
  onSubmit(image: Image){
    this.add(image);
  }

  // @ViewChild('myPond') myPond: FilePondComponent

  // pondOptions: FilePondOptions = {
  //   allowMultiple: true,
  //   labelIdle: 'Drop files here...'
  // }

  // pondFiles: FilePondOptions["files"] = [
  //   {
  //     source: '',
  //     options: {
  //       type: 'local'
  //     }
  //   }
  // ]

  // pondHandleInit() {
  //   console.log('FilePond has initialised', this.myPond);
  // }

  // pondHandleAddFile(event: any) {
  //   console.log('A file was added', event);
  // }

  // pondHandleActivateFile(event: any) {
  //   console.log('A file was activated', event)
  // }

  ngOnInit(){

  }
}
