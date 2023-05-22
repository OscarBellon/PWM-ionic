import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FireStorageService {

  constructor(private storage: AngularFireStorage) { }

   getProductImageURL(name:string){
      return new Promise<any>((resolve) => {
      this.storage.ref("Imagenes/"+name).getDownloadURL()
        .subscribe(img=>resolve(img))
      })
    }
}
