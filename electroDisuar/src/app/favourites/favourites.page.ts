import { Component, OnInit, OnChanges } from '@angular/core';
import {FirestoreService} from '../firestore.service'
import {FireStorageService} from '../fire-storage.service'
import { Producto } from '../producto'
import {SqliteService} from '../services/sqlite.service'

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit,OnChanges {

  favoritos: String[] = [];
  productosFavoritos: Producto[] = [];
  favs?: Producto[]=[];

  async getProductosFavortios(){
    this.favoritos.forEach(async element => this.productosFavoritos.push(await this.service.getProductByName(element)));
  }

  async getFavs(){
    this.favs= await this.sqlite.getAllProductos()
  }


  constructor(private service:FirestoreService,
  private sqlite: SqliteService) { }

  ngOnInit() {
    this.getProductosFavortios();
    this.getFavs();
  }

  ngOnChanges(){
    this.getFavs();
  }

  removeFav(producto: Producto){
    this.sqlite.deleteFav(producto);
    this.favs=[];
    this.getFavs();
  }

}
