import { Component, OnInit } from '@angular/core';
import {FirestoreService} from '../firestore.service'
import {FireStorageService} from '../fire-storage.service'
import { Producto } from '../producto'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  productos: Producto[] = [];
  productosOfertas: Producto[] = [];

  async getProducts(){
    this.productos=await this.service.getAllProducts();
  }
  async getOfertas(){
    this.productosOfertas=await this.service.getProductsByOferta();
  }
  constructor(private service:FirestoreService) {}

  ngOnInit() {
    this.getProducts();
    this.getOfertas();
  }
}
