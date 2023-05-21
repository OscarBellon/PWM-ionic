import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
/*import { from } from 'rxjs';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';*/



@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss']
})
export class AccessPage implements OnInit{

  validationFormUser!: FormGroup; 
  constructor(
    public formbuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.validationFormUser = this.formbuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    })
  }

  LoginUser(value){
    console.log("Logueado ^^")
  }
  onSubmit(){


  }
}
