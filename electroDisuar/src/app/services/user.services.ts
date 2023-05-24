import { Injectable } from "@angular/core";
//import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@angular/fire/auth";
import { Observable, Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";
//import { HeaderComponent }  from "../header/header.component";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
import { Router } from '@angular/router';
//import { User } from 'firebase/compat/auth';
//import auth  from 'firebase/compat/app';


@Injectable({
    providedIn: 'root'
})

export class UserService{
  public activo: Boolean = false;
  public currentUser: any;
  public avs: any;
  public name: null | string = '';
  public loggedIn = new BehaviorSubject<boolean>(false);
  public condicion = new BehaviorSubject<boolean>(false);
    //userData: Observable<firebase.User | null>;
  constructor(private angularFireAuth: AngularFireAuth, private router: Router,) {
    //this.userData = angularFireAuth.authState;
  }
  /* Sign up */
  SignUp(email: string, password: string, name: string) {
    
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed up!', res);
        const user = res.user;

        return user!.updateProfile({
          displayName: name
        });
      })
      .catch((error: Error) => {
        console.log('Something is wrong:', error.message);
      });    
  }
  /* Sign in */
  SignIn(email: string, password: string) {
    
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
        this.condicion.next(true);
        this.activo=true;
        this.currentUser = email;
        this.name = res.user!.displayName;
        this.avs="in";
        this.loggedIn.next(true);
        alert("Login completado");
        this.router.navigate(['/home']);
      })
      .catch((err: Error) => {
        console.log('Something is wrong:',err.message);
        this.condicion.next(false);
      });
    
  }
  /* Sign out */
  SignOut() {
    this.avs="out";
    this.loggedIn.next(false);
    this.angularFireAuth.signOut();
  }  


    /*public activo: Boolean = false;
    public currentUser: any;
    public avs: any;
    public loggedIn = new BehaviorSubject<boolean>(false); // {1}

    /*get isLoggedIn() {
        return this.loggedIn.asObservable(); // {2}
    }

    constructor(private auth: Auth) {}

    register({ email, password }: any) {
        //let activo=false;
        
        return createUserWithEmailAndPassword(this.auth, email, password);
    }

    login({ user, email, password }: any){
        this.activo=true;
        this.currentUser = email;
        this.avs="in";
        this.loggedIn.next(true);
        //console.log(this.currentUser);
        return signInWithEmailAndPassword(this.auth, email, password);
    }


    logOut(){
        this.avs="out";
        this.loggedIn.next(false);
    }*/
}

export default UserService;