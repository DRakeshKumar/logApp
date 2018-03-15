import { Component, OnInit , Input} from '@angular/core';

import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Router , CanActivate} from '@angular/router';
import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { DataService } from '../data.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
var alertify = require('../../../node_modules/alertify.js');
import {AuthService} from '../auth.service';
declare let require: any;
import {tokenNotExpired} from 'angular2-jwt/angular2-jwt';
declare var $: any; // JQuery
declare var swal: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @Input() inputModel: Object;
  stockistdata: any= {};
  loginData: any= {};
  otpData: any= {};
  response: {};
  auth_verified: boolean;
  stockistForm = new FormGroup({
    med_name: new FormControl()
  });
  loginForm = new FormGroup({
    phone_number: new FormControl()
  });
  otpForm = new FormGroup({
    otp_text: new FormControl()
  });
  phone_number: any = {};

  constructor (private _dataService: DataService, private authService: AuthService, private _http: Http, private router: Router) {
  }
  ngOnInit() {
    this.auth_verified = this.authService.useJwtHelper();
    // const auth_verified = this.authService.useJwtHelper();
    console.log('auth_verified:::::' + this.auth_verified);
    if (this.auth_verified) {
     // console.log('moved to dashboard page.....')
      this.router.navigateByUrl('/dashboard');
    }
  }
  clickedUser()  {
    const get_phone = $('#phone_number').val();
   // console.log('******' + get_phone);
    const filter =  /^[0-9]*$/;
    if (!filter.test(get_phone)) {
      swal('Oops...', 'Please enter numbers only', 'error');
      return false;
    }else {
      if ( get_phone === '' || get_phone === undefined || get_phone === null) {
        swal('Oops...', 'Please enter Your Phone Number First', 'error');
      }else {
        this. phone_number = $('#phone_number').val();
        this.loginData = this.loginForm.value;
        console.log(this.phone_number)
        $('.otp_form').show();
        $('.resent_otp_form').show();
        console.log('>>>>>>>>>>>>>>>>>>>>>>>' + this. phone_number)
        this.authService.verifyUsers(this.phone_number)
          .subscribe(response => {
            if (response.save === false) {
              $('.otp_form').hide();
              $('.resent_otp_form').hide();
              swal('Oops...', response.message, 'error');
            }
          });
      }
    }
   // this.router.navigateByUrl('/sidebar');
  }
  otpVerification() {
    const otp = $('#otp').val();
    console.log( '******' + otp + this. phone_number );
    this.otpData = this.otpForm.value ;
  //  console.log('=============' + JSON.stringify(this.otpData))
    this.authService.verifyOtp( otp, this.phone_number)
      .subscribe(response => {
        console.log('-------------------->' + JSON.stringify(response))
        this. response = response;
        if (response.save === true) {
          localStorage.apiToken = response.token;
         // alertify.logPosition('top right');
        //  alertify.success('Authenticated');
          swal({
            text: 'Authenticated',
            timer: 1000,
            type: 'success'
          });
          this.router.navigateByUrl('/dashboard');
         // window.location.reload();
        }
        if (response.save === false) {
          swal('Oops...', response.message, 'error');
          this.router.navigateByUrl('/');
        }
      });
  }
  coolForm() {
    this.stockistdata = this.stockistForm.value;
   // console.log('>>>>>>>>>>>>>' + JSON.stringify(this.stockistdata));
  }
  reSendOTP() {
   // alert('resend OTP clicked!!!' + this.phone_number);
    this.authService.verifyUsers(this.phone_number)
      .subscribe(response => {
        if (response.save === false) {
          swal('Oops...', response.message, 'error');
        }
        if (response.save === true) {
          alertify.logPosition('top right');
          alertify.success('OTP has been sent again.');
        }
      });
  }

}
