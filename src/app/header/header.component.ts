import { Component, OnInit , Input} from '@angular/core';

import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { DataService } from '../data.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
declare let require: any;

declare var $: any; // JQuery

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() inputModel: Object;
  userSessionName: string;
  userSessionTime: string;
  private userData: Array<any> = [];
  private level_1: Array<any> = [];
  private level_2: Array<any> = [];
  private type: Array<any> = [];
  type_name: any = {};
  level2: any = {};
  level3: any = {};
  level1: any = {};
  private usersData: Array<any> = [];
  userform = new FormGroup({
    type_name: new FormControl(),
    level1: new FormControl(),
    level2: new FormControl(),
    level3: new FormControl()
  });
  private propertyName: Array<any> = [];
  private userName: Array<any> = [];
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  constructor (private _dataService: DataService, private _http: Http, private router: Router) {
   /* this._dataService.showIndividualServices()
      .subscribe(response => {
        console.log(JSON.stringify(response));
       // console.log(JSON.stringify(response[0].daily_service_info));
        console.dir(response);
        this.userData = response;
        console.log(response.length);
      });*/
    this._dataService.showUserNameSessionWise()
      .subscribe(response => {
        console.log('>>>>>>>>>>>>>>' + JSON.stringify(response));
        this.userSessionName = response.user_name[0].movers_first_name + ' ' + response.user_name[0].movers_last_name;
        const time = new Date();
        console.log('time::::::' + time);
        const loginTime = time.toString();
        console.log('time::::::' + this.userSessionTime);
        const fTime = loginTime.split('GMT+0530 (India Standard Time)')[0];
        this.userSessionTime = fTime;
        console.log('userSessionName>>>>>>>>>>>>>>' + JSON.stringify(this.userSessionName));
        console.log('response.property_name>>>>>>>>>>>>>' + JSON.stringify(response.property_name[0].property_name));
        this.propertyName = response.property_name[0].property_name;
        console.log('==========>' + JSON.stringify(this.propertyName));
        // this.dtTrigger.next();
      });
  }
  ngOnInit(): void {
  }



  onSubmitData() {
  }
}
