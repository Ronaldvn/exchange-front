import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from '../../../interfaces/request';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { JwtResponse } from '../../../interfaces/response';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  login: Login = { username: 'user', password: '12345' };

  constructor(private service: AuthService, private router: Router) {}

  onLogin(): void {
    this.service.signin(this.login).subscribe((res: JwtResponse) => {
      localStorage.setItem('token', res.token);
      this.router.navigateByUrl('/exchanges');
    });
  }
}
