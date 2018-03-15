import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { JwtHelper } from 'angular2-jwt';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';
import { environmentProd } from '../environments/environment.prod';
@Injectable()
export class AuthService {
  constructor(private _http: Http , public authHttp: AuthHttp) {
  }
    jwtHelper: JwtHelper = new JwtHelper();
    useJwtHelper() {
      if (localStorage.getItem('apiToken')) {
        const token = localStorage.getItem('apiToken');
        console.log('token::::' + token);
        if (!this.jwtHelper.isTokenExpired(token)) {
          return true;
        } else {
          localStorage.clear();
          return false;
        }
      }
      return false;
    }

  loggedIn() {
    return tokenNotExpired();
  }

  verifyUsers(phone_number) {
    console.log('services:::' + phone_number);
    return this._http.get('/web/verifyUsersProcess/' + phone_number, {withCredentials: true})
      .map(res => res.json());
  }
  movers_enquiry_data_verification(data) {
    console.log('services:::' + data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.put('/web/movers_enquiry_data_verificationProcess', JSON.stringify(data), {headers : headers, withCredentials: true})
      .map(res => res.json());
  }
  movers_enquiry_data_aadhar_validate_verification(data) {
    console.log('services:::' + data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.put('/web/movers_enquiry_data_aadhar_validate_verification', JSON.stringify(data), {headers : headers, withCredentials: true})
      .map(res => res.json());
  }
  user_enquiry(data) {
    console.log('services:::' + data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.put('/web/user_enquiry_process', JSON.stringify(data), {headers : headers, withCredentials: true})
      .map(res => res.json());
  }

  verifyOtp(otp, phone_number) {
    console.log('services:::' + otp);
    return this._http.get(`/web/verifyOtpProcess/?otp=${otp}&phone=${phone_number}` , {withCredentials: true})
      .map(res => res.json());
  }

  userLogout() {
    console.log('Signing Out...');
    return this.authHttp.get(environment.url + '/logout');
   // return this.authHttp.get('https://localhost:443/logout');
  }
}
