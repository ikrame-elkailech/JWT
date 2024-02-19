import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authForm!: FormGroup;
  credentials = new FormData;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder,private authService: AuthenticationService, private router: Router) { }
  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login() {
 this.credentials=this.authForm.value;
console.log(this.credentials)
    this.authService.login(this.credentials).subscribe(
      response => {
        localStorage.setItem('jwtToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refrechToken);
        this.router.navigate(['/app']);
      
        console.log(response);
      },
      error => {
        console.log('Erreur de connexion :', error);
  
        if (error.status === 403) {
          this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect';
        } else {
          this.errorMessage = 'Erreur lors de la connexion. Veuillez réessayer.';
        }
      }
    );
  }
}
