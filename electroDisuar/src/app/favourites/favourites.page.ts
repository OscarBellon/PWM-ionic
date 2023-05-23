import { Component, OnInit } from '@angular/core';
import {FirestoreService} from '../firestore.service'
import {FireStorageService} from '../fire-storage.service'
import { Producto } from '../producto'

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

  favoritos: String[] = [];
  productosFavoritos: Producto[] = [];

  async getProductosFavortios(){
    this.favoritos.forEach(async element => this.productosFavoritos.push(await this.service.getProductByName(element)));
  }

  constructor(private service:FirestoreService) { }

  ngOnInit() {
    this.getProductosFavortios();
  }

}
