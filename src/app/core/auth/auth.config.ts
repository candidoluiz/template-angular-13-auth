import { AuthConfig } from "angular-oauth2-oidc";
import { environment } from "src/environments/environment";

export const authConfig: AuthConfig = {
    issuer: environment.AUTH_SERVER_URL,
    redirectUri: environment.CLIENT_URL + '/login/login-callback',
    clientId: environment.CLIENT_ID,
    responseType: 'code',
    scope: 'openid profile email',
    postLogoutRedirectUri: environment.CLIENT_URL_LOGOUT,
    requireHttps: environment.production,
    strictDiscoveryDocumentValidation: true,
    useHttpBasicAuth:false
}

export const resource = {
    resourceServer: {
        allowedUrls: [environment.API_URL],
        sendAccessToken: true
    }
}