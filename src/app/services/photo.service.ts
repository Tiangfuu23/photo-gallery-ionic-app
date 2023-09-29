import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: UserPhoto[] = [];
  constructor() { }
  public async addNewToGallery(){
    // Take photo using camera capacitor
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera, // The source to get the photo from -> Camera
      quality: 100, // The quality of image
    })

    // Add new captured photo to the beginning of the photos array
    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath,
    })
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
