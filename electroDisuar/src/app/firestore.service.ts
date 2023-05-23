import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

   constructor(private db:AngularFirestore) { }
    getAllProducts(){
      return new Promise<any>((resolve) => {
        this.db.collection("productos")
        .valueChanges({idField:'id'})
        .subscribe(productos=>resolve(productos))
      })
    }
    
    getProductByName(name:String){
      return new Promise<any>((resolve)=>{
        this.db.collection("productos",ref=>
        ref.where("nombre",'==',name))
        .valueChanges()
        .subscribe(productos=>resolve(productos))
      })
    }

    getProductsBySection(section:String){
      return new Promise<any>((resolve)=>{
        this.db.collection("productos", ref=>
        ref.where("seccion","==",section))
        .valueChanges()
        .subscribe(productosFiltrados=>resolve(productosFiltrados));
      })
    }

    getProductsByOferta(){
      return new Promise<any>((resolve)=>{
        this.db.collection("productos", ref=>
        ref.where("oferta","==",true))
        .valueChanges()
        .subscribe(productosFiltrados=>resolve(productosFiltrados));
      })
    }
  }

