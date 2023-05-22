import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import UserService from '../services/user.services';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';



@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss']
})
export class AccessPage implements OnInit{

  formLogin: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    
  ){
    this.formLogin = this.fb.group({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)])
    })
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
        this.userService.activo = true;
        alert("Acceso completado");
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
    console.log(this.formLogin.value);

  }
}
