import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx'
import { Platform } from '@ionic/angular';
import {Producto } from '../producto'

@Injectable({
  providedIn: 'root'
})
export class SqliteService {

  readonly db_name: string = "remotestack.db";
  readonly db_table: string = "userTable";
  private dbInstance: SQLiteObject;
  PRODUCTOS: Producto[]=[];


  constructor(private platform: Platform,
              private sqlite: SQLite) {
    this.databaseConn();
  }

  databaseConn(){
    this.platform.ready().then(()=>{
      this.sqlite.create({name:this.db_name,location:'default'})
      .then((sqLite:SQLiteObject)=>{
        this.dbInstance = sqLite;
        sqLite.executeSql(`
        CREATE TABLE IF NOT EXISTS ${this.db_table}(
          user_id INTEGER PRIMARY KEY,
          producto blob,email varchar(255), np varchar(255))`,[])
        .then((res)=>{})
      })
    })
  }
  addProducto(producto: Producto,e:String){

    let productoString=JSON.stringify(producto)
    this.dbInstance.executeSql(`
      INSERT INTO ${this.db_table}(producto, email, np) VALUES ('${productoString}','${e}','${producto.nombre}')`,[])
      .then(()=>{

        alert("Añadido a Favoritos");
      },(e)=>{ alert(JSON.stringify(e.err));})
  }
  getAllProductos(){
    this.PRODUCTOS=[];
    return this.dbInstance.executeSql(`
    SELECT * FROM ${this.db_table}`,[]).then((res)=>{
      if(res.rows.length > 0){
        for (var i=0; i<res.rows.length;i++){
          this.PRODUCTOS.push(JSON.parse(res.rows.item(i).producto));
        }

      }
      return this.PRODUCTOS;
    })
  }
  deleteFav(producto: Producto){
    let productoString=JSON.stringify(producto);
    this.dbInstance.executeSql(`
    DELETE FROM ${this.db_table} WHERE np='${producto.nombre}'`,[])
    .then(()=>{
      alert("favorito eliminado")
    })
  }
}
