import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto'
import {FirestoreService} from '../firestore.service'
import {FireStorageService} from '../fire-storage.service'
import {SqliteService} from '../services/sqlite.service'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit, OnChanges {
  producto!: Producto;
  productosRelacionados: Producto[] = [];
  rutaImg!: string;

  async image(){
    this.rutaImg=await this.storage.getProductImageURL(this.producto.rutaImagen);
  }

  async getRelatedProducts(section: String){
    this.productosRelacionados = await this.firestore.getProductsBySection(section)
  }



  constructor(private route: ActivatedRoute,
   private router: Router,
   private storage: FireStorageService,
   private firestore: FirestoreService,
   private sqlite: SqliteService) {
    this.route.queryParams.subscribe(params =>{
      this.producto = JSON.parse(params['special'])
      this.image();
    })
    this.image();
  }

  ngOnInit() {
    this.image();
    this.getRelatedProducts(this.producto.seccion)
  }
  ngOnChanges(){
    this.image();
  }
  addFav(){
    this.sqlite.addProducto(this.producto,"a")
  }

}
