import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
    selector: 'app-login-callback',
    templateUrl: './login-callback.component.html'
})
export class LoginCallbackComponent implements OnInit {

    constructor(
        private oauthService: OAuthService,
        private router: Router
    ) { }

    async ngOnInit() {       
        try {
            // Tenta fazer o login (trocar código por token)
            await this.oauthService.loadDiscoveryDocumentAndTryLogin();
            if (this.oauthService.hasValidAccessToken()) {
                // Se tudo OK, redireciona para o dashboard
                this.router.navigate(['/dashboard']);
            } else {
                // Se não conseguiu token válido, redireciona para login (ou outra página)
                this.router.navigate(['/login']);
            }
        } catch (error) {
            console.error('Erro no login callback', error);
            this.router.navigate(['/login']);
        }
    }

}
