import { Component, OnInit } from '@angular/core';
import { PhotoService, UserPhoto } from '../services/photo.service';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(protected ps : PhotoService,
              protected actionSheetController: ActionSheetController
  ) {}

  async ngOnInit() {
    await this.ps.loadSaved();
  }

  addPhotoGallery(){
    this.ps.addNewToGallery();
  }

  public async showActionSheet(photo: UserPhoto, position: number){
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.ps.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {

        }
      }]
    })
    await actionSheet.present();
  }
}
