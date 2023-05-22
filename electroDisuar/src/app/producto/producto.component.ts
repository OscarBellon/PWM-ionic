import { Component, OnInit, Input} from '@angular/core';
import { Producto } from '../producto'
import { Router, NavigationExtras } from '@angular/router'
import {FireStorageService} from '../fire-storage.service'
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent  implements OnInit {

  @Input() producto!: Producto;
  rutaImg!: string;

  async image(){
    this.rutaImg=await this.storage.getProductImageURL(this.producto.rutaImagen);
  }
  constructor(private storage: FireStorageService, private router: Router ) { }

  ngOnInit() {
    this.image()
  }

  openDetail(){
    let navExtras: NavigationExtras = {
      queryParams:{
        special: JSON.stringify(this.producto)
      }
    };
    this.router.navigate(['/detalle'],navExtras)
  }
}
