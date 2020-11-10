import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/AuthService';
import { Router } from '@angular/router';
declare var $: any ;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _AuthService: AuthService , private _Router: Router) { }

  signIn = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.pattern(/^([a-zA-Z]+[,.]?[]?|[a-z]+['-]?)+/)]),
});

formData()
{
  if (this.signIn.valid)
  {
    this._AuthService.signIn(this.signIn.value).subscribe(res => {

      // tslint:disable-next-line: triple-equals
      if (res.message == 'success')
      {
        this._Router.navigate(['/profile']);
        localStorage.setItem('TOKEN', res.token);
      }
    });
  }

}
  ngOnInit(): void {
  }

}
