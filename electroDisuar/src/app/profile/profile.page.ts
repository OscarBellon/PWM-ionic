import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import UserService from '../services/user.services';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  dataUser: any;
  correo: any;
  state: any;
  states: string[] = [];
  @Input() avs:any;
  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.loggedIn.subscribe(value => {
      this.state = this.service.loggedIn.getValue();
      this.dataUser = this.service.name;
      this.correo = this.service.currentUser;
      console.log(this.dataUser);
    });
  }

}
