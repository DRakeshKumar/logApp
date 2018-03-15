import { Component, OnInit,  Directive,  ViewChild } from '@angular/core';

import {FormControl, FormGroup} from '@angular/forms';
import { DataService } from '../data.service';
import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { DataManagementComponent } from '../data-management/data-management.component';
import { LoginComponent } from '../login/login.component';
import { ResidentComponent } from '../resident/resident.component';
import { ServiceProviderComponent } from '../service-provider/service-provider.component';
import { PropertyComponent } from '../property/property.component';
import { RequestSlaComponent } from '../requests-sla/request-sla.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
var alertify = require('../../../node_modules/alertify.js');

import {ModalModule} from "ng2-modal";
import * as _ from 'lodash';
declare let require: any;

declare var $: any; // JQuery

@Directive({selector: 'child-directive'})
class ChildDirective {
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashBoardComponent implements  OnInit {
  filesToUpload: Array<File> = [];
  private usersData: Array<any> = [];
  response: {};
  propertyForm = new FormGroup({
    property_name: new FormControl()
  });
  residentForm = new FormGroup({
    resident_name: new FormControl()
  });
  private userData: Array<any> = [];
  private loggedRequestData: Array<any> = [];
  date: any = {};
  private request_typeData: Array<any> = [];
  private request_type_sp: Array<any> = [];
  private level_2_array: Array<any> = [];
  private level_1_array: Array<any> = [];
  user_id: any = {};
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  check_property: boolean = true;
  check_resident: boolean = true;
  private userEditData: Object = {};
  private level2_json: Object = {};
  @ViewChild(ChildDirective) child: ChildDirective;

  constructor(private _dataService: DataService, private _http: Http) {
    /*this._dataService.showAllUsers()
      .subscribe(response => {
        console.dir(response);
        this.userData = response;
        this.dtTrigger.next();
      });*/
/*
    this._dataService.showloggedRequestUsers()
      .subscribe(response => {
        console.dir(response);
        this.loggedRequestData = response;
        this.dtTrigger.next();

      });*/
    this._dataService.showEnquiredUsers()
      .subscribe(response => {
        console.dir(response);
        this.loggedRequestData = response;
        this.dtTrigger.next();

      });
    /*this._dataService.showIndividualServices()
      .subscribe(response => {
        // console.log(JSON.stringify(response));
        // console.log(JSON.stringify(response[0].daily_service_info));
        this.user_id = response._id;
        this.userData = response.daily_service_info;
         console.log('========= ' + JSON.stringify(this.usersData));
        this.dtTrigger.next();
      });*/
  }
  medicine_editForm = new FormGroup({

    from_number: new FormControl(),
    to_number: new FormControl(),
    list_item_details: new FormControl(),
    logistic_details: new FormControl()

  });
  openmodal( info ) {
    console.log('the data is here ' + JSON.stringify(info));
    // this.userData = info;
    const name = 'hello';
    $('#myModal').show();


    const level_id = info.level_id;
    const parent_id = info.parent_id;
    const level = info.level;
    const request_id = info.request_id;
    console.log(parent_id);
    const prooBJ = {};
    const prooBJ_new = {};
    const sp_list = [];
    /*this._dataService.showAllRequestTypesForSpecificService(info)
      .subscribe(response => {
        console.dir(response);
        this.request_typeData = response;
        console.log('request_types_list>>>' + JSON.stringify(sp_list));

      });*/
    this._dataService.showUserNameSessionWise()
      .subscribe(response => {
        console.log('>>>>>>>>>>>>>>' + JSON.stringify(response));
        this.userEditData['from_number'] = response.user_name[0].movers_mobile;
        this.userEditData['to_number'] = info.mobile;
        this.userEditData['list_item_details'] = info.list_item;
        this.userEditData['logistic_details'] = "Call us at:"+response.user_name[0].movers_mobile + " " +"Our address:"+response.user_name[0].movers_address;
      });

  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      scrollX: true,
      searching: false,
    };

  }
  userDateWise(){
    this.date=$('#enquiry_date').val();
    alert(this.date)
    this._dataService.dateWiseUser(this.date)
      .subscribe(response => {
        //console.log('========= ' + JSON.stringify(this.userData));
        this.loggedRequestData =response;
      });
  }
  sendSmsUsingMsg91() {
    this._dataService.getSendSmsUsingMsg91Process()
      .subscribe(response => {
      });
  }

  sendSmsUsingtextLocal() {
    this._dataService.getSendSmsUsingtextLocalProcess()
      .subscribe(response => {
      });
  }

  walkInModalClose(): void {
    $('#myModal').hide();
  }
  sumbitedited_value(userEditData): void {
    console.log('------------' , JSON.stringify(userEditData))
    const _id = userEditData._id;
   /* const _stockeditedata = {
      idlogin: userEditData.idlogin,
      user_Name: userEditData.user_Name,
      password: userEditData.password,
      created_date: userEditData.created_date,
      first_Name: userEditData.first_Name,
      last_Name: userEditData.last_Name,
      sp_name: userEditData.sp_name,
    }*/
    console.log(' edited const _id' , _id );
    console.log(' edited const value' , userEditData );
    this._dataService.updateServiceProvider(userEditData)
      .subscribe(response => {
        console.log('========= ' + JSON.stringify(this.userData));
        if (response.save === true) {
          alertify.logPosition('top right');
          alertify.success('Data Updated Successfully!!!' );
          $('#myModal').hide();
        //  window.location.reload();
        }
      });
    /* this._dataService.updateUser(userEditData)
       .subscribe(response => {
         console.log('========= ' + JSON.stringify(this.userData));
         if (response.save === true) {
           alertify.logPosition('top right');
           alertify.success('Data Updated Successfully!!!' );
           this.walkInModalClose();
           window.location.reload();
         }
     });*/

  }
  sendQuoteToUsers(userEditData): void {
    console.log('------------' , JSON.stringify(userEditData))
    const _id = userEditData._id;
    console.log(' edited const _id' , _id );
    console.log(' edited const value' , userEditData );
    this._dataService.sendQuoteToUsersProcess(userEditData)
      .subscribe(response => {
        console.log('========= ' + JSON.stringify(this.userData));
        if (response.save === true) {
          alertify.logPosition('top right');
          alertify.success('Quotation Sent Successfully!!!' );
          $('#myModal').hide();
        //  window.location.reload();
        }
      });

  }
}
