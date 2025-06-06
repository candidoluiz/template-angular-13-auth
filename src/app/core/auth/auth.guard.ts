import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OAuthService } from "angular-oauth2-oidc";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private oauthService: OAuthService) { }

    canActivate() {
        return true;
        if (this.oauthService.hasValidIdToken() || this.oauthService.hasValidAccessToken()) {
            return true;
        }

        return this.router.createUrlTree(["/login"]);
    }
}