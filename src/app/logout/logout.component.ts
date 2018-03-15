import { Component, OnInit , Input} from '@angular/core';

import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { DataService } from '../data.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthService } from '../auth.service';
declare let require: any;

declare var $: any; // JQuery

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  @Input() inputModel: Object;
  constructor (private authService: AuthService, private router: Router) {
    this.authService.userLogout()
      .subscribe(response => {
       // if (response.redirect) {
          localStorage.removeItem('apiToken');
         // localStorage.removeItem('currentUser');
          this.router.navigateByUrl('/');
       // }
      });
  }

}
