import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/AuthService';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  isClicked = false;
  ResponseMessage = '';
  isUniuqeEmailMessage = '';
  isUniuqeEmail = false;
  isSuccess = false;

  // tslint:disable-next-line: variable-name
  constructor(private _AuthService: AuthService) { }

signUp = new FormGroup({
  first_name: new FormControl('', [Validators.required, Validators.pattern(/^([a-zA-Z]+[,.]?[]?|[a-z]+['-]?)+/)]),
  last_name: new FormControl('', [Validators.required, Validators.pattern(/^([a-zA-Z]+[,.]?[]?|[a-z]+['-]?)+/)]),
  email: new FormControl('', [Validators.required, Validators.email]),
  age: new FormControl('', Validators.required),
  password: new FormControl('', [Validators.required, Validators.pattern(/^([a-zA-Z]+[,.]?[]?|[a-z]+['-]?)+/)]),
});
formData()
{
  this.isClicked = true;
  if (this.signUp.valid)
  {
    this._AuthService.signUp(this.signUp.value).subscribe(response => {
     // tslint:disable-next-line: triple-equals
     if (response.message == 'success')
     {
      this.isClicked = false;
      this.isSuccess = true;
      this.isUniuqeEmail = false;
      this.ResponseMessage = response.message;
      this.signUp.reset();
     }else
     {
       console.log(response);
       this.isUniuqeEmailMessage = response.errors.email.message;
       this.isUniuqeEmail = true;
       this.isSuccess = false;
       this.isClicked = false;
     }

    });
  }

}
  ngOnInit(): void {
  }

}
