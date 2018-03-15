import { NgModule } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

function authHttpServiceFactory(_http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({
        tokenName: 'token',
        headerPrefix: 'Bearer:',
        tokenGetter: (() => localStorage.getItem('apiToken')),
        globalHeaders: [{'Content-Type': 'application/json'}],
    }), _http, options);
}


@NgModule({
    providers: [
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        }
    ]
})

export class AuthModule {}
