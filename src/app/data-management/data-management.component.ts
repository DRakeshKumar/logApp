import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup} from '@angular/forms';
import { DataService } from '../data.service';
import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { utils, write, WorkBook } from 'xlsx';

import { saveAs } from 'file-saver';
declare let require: any;

declare var $: any; // JQuery
import * as alasql from 'alasql';
@Component({
  selector: 'app-data',
  templateUrl: './data-management.component.html',
  styleUrls: ['./data-management.component.css']
})
export class DataManagementComponent {
  selected_value: string;
  private userEditData: Object = {};
  editForm = new FormGroup({
    type_name: new FormControl(),
    level1List: new FormControl(),
    level2List: new FormControl(),
    level3List: new FormControl()
  });
  constructor(private _dataService: DataService, private _http: Http) {
  }
  ngOnInit(): void {
  }
  downloadExcel() {
  //  alert($('#categoryList').val())
    this. selected_value = $('#categoryList').val();
    this._dataService.downloadExcelProcess(this.selected_value)
      .subscribe(response => {
        const excel_json = {};
        const excel_array = [];
        console.log('datat::::' + JSON.stringify(response));
       // const property_name = response.users_Data[0].property_name;
        // const p_name = property_name + '.xls';
       // console.log('property_name---------->' + property_name)
        const mystyle = {
          headers: true,
          column: {style: { Font: { Bold: '1' }}},
        };
        if (response.flag === 1) {
          console.log('Resident---->')
          alasql('SELECT  _id AS `id`, first_name As `First Name`, last_name AS `Last Name`, phone_number AS `Phone Number`, email_id AS `Email Id` , flat_id as `Flat Id` INTO XLSXML("Resident.xls",?) FROM ?', [mystyle, response.users_Data]);
        }else if (response.flag === 2) {
          console.log('Service-Provider---->')
          alasql('SELECT _id AS `id`, id AS ID,first_name AS `First Name`, last_name AS `Last Name`, phone_number AS `Phone Number`, email_id AS `email_id`,is_manager AS `Is Manager (only one can be the manager)`,request_types AS `Request Types` INTO XLSXML("Service-Provider.xls",?) FROM ?', [mystyle, response.users_Data]);
        }else if (response.flag === 3) {
          console.log('services---->')
          alasql('SELECT  _id AS `id`,request_id AS `Request Ids`, service_type AS `Services Type`, level_1 AS `Level 1`, level_2 AS `Level 2`, level_3 AS `Level 3`, level_4 AS `Level 4`, sla_time  AS `Completion SLA (in hours)`, active AS `Active` INTO XLSXML("Services.xls",?) FROM ?', [mystyle, response.users_Data]);
        }else if (response.flag === 4) {
          console.log('property---->')
         // alasql('SELECT _id AS `id` phase_name AS Phase, tower_name AS Tower, flat_no AS Flat, room AS Rooms   INTO XLSXML("' + p_name + '",?) FROM ?', [mystyle, response.users_Data[0].flat]);
          alasql('SELECT _id AS `id`, phase_name AS Phase, tower_name AS Tower, flat_no AS Flat, flat_id AS `Flat Id`,  room AS Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, response.users_Data[0].flat]);
        }

      });
  }

}
