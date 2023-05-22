import { Component, OnInit } from '@angular/core';
import {Producto } from '../producto'
import {FirestoreService} from '../firestore.service'
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  productos: Producto[]=[];
  constructor(private service:FirestoreService) { }

  async getProducts(){
    this.productos=await this.service.getAllProducts()
  }
  async getFilteredProducts(seccion:String){
    this.productos=await this.service.getProductsBySection(seccion)
  }

  filter(seccion:String){
    this.getFilteredProducts(seccion)
  }
  ngOnInit() {
    this.getProducts();
  }

}
