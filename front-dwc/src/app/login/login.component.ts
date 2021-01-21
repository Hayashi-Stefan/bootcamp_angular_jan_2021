import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageLogin } from '@po-ui/ng-templates';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo: string = '/assets/logo.png'

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(dadosLogin: PoPageLogin): void {
    this.loginService.login(dadosLogin).subscribe((res: any) => {
      this.router.navigate(['home'])
    })
  }

}
