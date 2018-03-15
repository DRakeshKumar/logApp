import { Component, OnInit, Input } from '@angular/core';

import {FormControl, FormGroup} from '@angular/forms';
import { DataService } from '../data.service';
import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';
var alertify = require('../../../node_modules/alertify.js');
declare let require: any;
declare var swal: any;
declare var $: any; // JQuery
import { environment } from '../../environments/environment';
import { environmentProd } from '../../environments/environment.prod';
@Component({
  selector: 'app-request-sla',
  templateUrl: './request-sla.component.html',
  styleUrls: ['./request-sla.component.css']
})
export class RequestSlaComponent  {

  filesToUpload: Array<File> = [];
  private usersData: Array<any> = [];
  response: {};
  propertyForm = new FormGroup({
    property_name: new FormControl()
  });
  requestSLAForm = new FormGroup({
    request_sla_name: new FormControl()
  });
  check_request_sla: boolean = true;
  @Input() isResetting = false;
  selected_value: string;
  private header_array: Array<any> = [];
  constructor(private _dataService: DataService, private _http: Http, private spinnerService: Ng4LoadingSpinnerService) {
  }
  ngOnInit(): void {
  }
  uploadExcel_request_sla() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    formData.append('uploads[]', files[0], files[0]['name']);
    if ([ 'xls', 'xlsx'].indexOf(files[0]['name'].split('.')[files[0]['name'].split('.').length - 1]) === -1) {
      swal('Sorry!', 'please upload xlsx file' , 'error');
      return;
    }
    this.spinnerService.show();
    this._http.post(environment.url + '/services/uploadExcelProcessForRequestSLA', formData)
      .map(res => res.json())
      .catch(error => Observable.throw(error))
      .subscribe(response => {
        console.log('-------------------->' + JSON.stringify(response));
        this.response = response;
        if (response.save === true) {
          setTimeout(() => {
            this.spinnerService.hide();
            alertify.logPosition('top right');
            alertify.success('Excel file uploaded successfully');
            swal('', 'Services file uploaded successfully', 'success');
          }, 3000);
          this.check_request_sla = true;
          this.isResetting = true;
          setTimeout(() => this.isResetting = false, 0);
          return false;
         // alertify.error(response.invalid_field + ' ' + 'rows have invalid  data');
        }
        if (response.save === false) {
          this.spinnerService.hide();
          swal('Oops...', response.message, 'error');
        }
      });
  }
  fileChangeEvent_request_sla(fileInput: any) {
    this.check_request_sla = false;
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  downloadServices() {
    this. selected_value = 'services';
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

        if (response.save == 'NO') {
          swal('Oops...', response.message, 'error');
        }
        if (response.save == false) {
          console.log('flaseeeeeeeeeeeeeeeeeeeeeeeeeee:::::::::::')
          // this.header_array = [{ Phase: '' , Tower: '', Flat: '', Rooms: ''}];
          this.header_array = [{ 'Services Type': '' , 'Level 1': '', 'Level 2': '', 'Level 3': '', 'Level 4': '', 'Completion SLA (in hours)': '', 'Active': ''}];
          alasql('SELECT  `Services Type`,  `Level 1`,  `Level 2`,  `Level 3`, `Level 4`, `Completion SLA (in hours)` , `Active` INTO XLSXML("Services.xls",?) FROM ?', [mystyle, this.header_array]);
          //  alasql('SELECT * INTO XLSX("Property.xls",?) FROM ?', ['Phase', 'Tower', 'Flat', 'Rooms']);
          //  alasql('SELECT ,  Phase,  Tower,  Flat,  Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, response.users_Data[0]]);
        }
        if (response.flag === 3) {
          console.log('services---->')
          alasql('SELECT  _id AS `id`,request_id AS `Request Ids`, service_type AS `Services Type`, level_1 AS `Level 1`, level_2 AS `Level 2`, level_3 AS `Level 3`, level_4 AS `Level 4`, sla_time  AS `Completion SLA (in hours)`, active AS `Active` INTO XLSXML("Services.xls",?) FROM ?', [mystyle, response.users_Data]);
        }
      });
  }
  downloadServicesXlsxFormat() {
    this. selected_value = 'services';
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

        if (response.save == 'NO') {
          swal('Oops...', response.message, 'error');
        }
        if (response.save == false) {
          console.log('flaseeeeeeeeeeeeeeeeeeeeeeeeeee:::::::::::')
          // this.header_array = [{ Phase: '' , Tower: '', Flat: '', Rooms: ''}];
          this.header_array = [{ 'Services Type': '' , 'Level 1': '', 'Level 2': '', 'Level 3': '', 'Level 4': '', 'Completion SLA (in hours)': '', 'Active': ''}];
          alasql('SELECT  `Services Type`,  `Level 1`,  `Level 2`,  `Level 3`, `Level 4`, `Completion SLA (in hours)` , `Active` INTO xlsx("Services.xlsx",?) FROM ?', [mystyle, this.header_array]);
          //  alasql('SELECT * INTO XLSX("Property.xls",?) FROM ?', ['Phase', 'Tower', 'Flat', 'Rooms']);
          //  alasql('SELECT ,  Phase,  Tower,  Flat,  Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, response.users_Data[0]]);
        }
        if (response.flag === 3) {
          console.log('services---->')
          alasql('SELECT  _id AS `id`,request_id AS `Request Ids`, service_type AS `Services Type`, level_1 AS `Level 1`, level_2 AS `Level 2`, level_3 AS `Level 3`, level_4 AS `Level 4`, sla_time  AS `Completion SLA (in hours)`, active AS `Active` INTO xlsx("Services.xlsx",?) FROM ?', [mystyle, response.users_Data]);
        }
      });
  }
}
