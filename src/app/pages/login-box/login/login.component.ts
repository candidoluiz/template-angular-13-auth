import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
    }

    login()  {
        this.authService.login();
    }

}
