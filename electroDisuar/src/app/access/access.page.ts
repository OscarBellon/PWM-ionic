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
  //email: string = '';
  //password: string = '';

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

 /* signUp() {
    this.userService.SignUp(this.email, this.password);
    this.email = ''; 
    this.password = '';
  }
  signIn() {
    this.email = ''; 
    this.password = '';
  }
  signOut() {
    this.userService.SignOut();
  }*/

  ngOnInit(): void {

  }

  onSubmit(){
    try{
      this.userService.SignIn(this.formLogin.get('email')?.value, this.formLogin.get('password')?.value);
      alert("Login completado");
      this.router.navigate(['/home']);
    } catch(Error){
      console.log(Error);
    }

  }
}
