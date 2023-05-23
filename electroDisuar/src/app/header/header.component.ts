import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import UserService from '../services/user.services';
import { User } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth } from 'firebase/auth';
import { Observable, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  dataUser: any;
  state: any;
  states: string[] = [];
  @Input() avs:any;
  constructor(private service: UserService) { }

  ngOnInit() {
    console.log(this.state);
    this.service.loggedIn.subscribe(value => {
      this.state = this.service.loggedIn.getValue();
      this.dataUser = this.service.currentUser;
      console.log(this.dataUser);
    });
    console.log(this.state);
  }

  logOut(){
    this.service.SignOut();
  }
}
