import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private oauthService: OAuthService, private http: HttpClient) {
        this.configure()
    }

    configure() {
        this.oauthService.configure(authConfig);
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }

    login() {
        this.oauthService.initLoginFlow();
    }

    logOut() {
        this.oauthService.revokeTokenAndLogout();
    }

    get claims() {
        return this.oauthService.getIdentityClaims() ?? {};
    }

    get token(): string | null {
        return this.oauthService.getAccessToken() ?? '';
    }



}
