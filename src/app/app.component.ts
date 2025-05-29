import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
    title = 'ArchitectUI - Angular 7 Bootstrap 5 & Material Design Admin Dashboard Template';

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.authService.configure();
    }
}
