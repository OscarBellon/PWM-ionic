import { Injectable } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@angular/fire/auth";
import { Observable, Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";
//import { HeaderComponent }  from "../header/header.component";
@Injectable({
    providedIn: 'root'
})

export class UserService{
    public activo: Boolean = false;
    public currentUser: any;
    public avs: any;
    public loggedIn = new BehaviorSubject<boolean>(false); // {1}

    /*get isLoggedIn() {
        return this.loggedIn.asObservable(); // {2}
    }*/

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
    }
}

export default UserService;