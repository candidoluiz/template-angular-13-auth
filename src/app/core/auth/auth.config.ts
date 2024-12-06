import { AuthConfig } from "angular-oauth2-oidc";
import { environment } from "src/environments/environment";

export const authConfig: AuthConfig = {
    issuer: environment.AUTH_SERVER_URL,
    redirectUri: environment.CLIENT_URL,
    clientId: environment.CLIENT_ID,
    responseType: 'code',
    dummyClientSecret: environment.CLIENT_SECRET,
    scope: 'openid',
    postLogoutRedirectUri: environment.CLIENT_URL,
    requireHttps: false,
    strictDiscoveryDocumentValidation: false,
    useHttpBasicAuth:true  

}

export const resouce = {
    resourceServer: {
        allowedUrls: [environment.API_URL],
        sendAccessToken: true
    }
}