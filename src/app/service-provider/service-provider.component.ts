import { Component, OnInit, Input } from '@angular/core';

import {FormControl, FormGroup} from '@angular/forms';
import { DataService } from '../data.service';
import { Subject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';
var alertify = require('../../../node_modules/alertify.js');
declare let require: any;
import { environment } from '../../environments/environment';
import { environmentProd } from '../../environments/environment.prod';
declare var $: any; // JQuery
declare var swal: any;

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.css']
})
export class ServiceProviderComponent {

  filesToUpload: Array<File> = [];
  private usersData: Array<any> = [];
  response: {};
  propertyForm = new FormGroup({
    property_name: new FormControl()
  });
  serviceProviderForm = new FormGroup({
    provider_name: new FormControl()
  });
  check_service_provider: boolean = true;
  @Input() isResetting = false;
  selected_value: string;
  private header_array: Array<any> = [];
  constructor(private _dataService: DataService, private _http: Http, private spinnerService: Ng4LoadingSpinnerService) {
  }
  ngOnInit(): void {
  }
  uploadExcel_service_provider() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    formData.append('uploads[]', files[0], files[0]['name']);
    if ([ 'xls', 'xlsx'].indexOf(files[0]['name'].split('.')[files[0]['name'].split('.').length - 1]) === -1) {
      swal('Sorry!', 'please upload xlsx file' , 'error');
      return;
    }
    this.spinnerService.show();
    this._http.post(environment.url + '/serviceprovider/uploadExcelProcessForServiceProvider', formData)
      .map(res => res.json())
      .catch(error => Observable.throw(error))
      .subscribe(response => {
        console.log('-------------------->' + JSON.stringify(response));
        this.response = response;
        if (response.save === true) {
          setTimeout(() => {
            this.spinnerService.hide();
            alertify.logPosition('bottom-right');
            alertify.success('Excel file uploaded successfully');
            swal('', 'Service Provider file uploaded successfully', 'success');
          }, 3000);
          this.check_service_provider = true;
          this.isResetting = true;
          setTimeout(() => this.isResetting = false, 0);
          return false;
          // alertify.error(response.invalid_row.length + ' ' + 'records failed to upload');
          // swal('Oops...', response.invalid_row + ' ' + 'rows have invalid  data', 'error');
        }
        if (response.save === false) {
          this.spinnerService.hide();
          swal('Oops...', response.message, 'error');
        }
        if (response.save == 'Not Saved') {
          this.spinnerService.hide();
          swal('Oops...', response.message, 'error');
        }
      });
  }
  fileChangeEvent_service_provider(fileInput: any) {
    this.check_service_provider = false;
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
  downloadServiceProvider() {
    this. selected_value = 'Service-Provider';
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
          this.header_array = [{ 'First Name': '' , 'Last Name': '', 'Phone Number': '', 'Email Id': '', 'Is Manager (only one can be the manager)': '', 'Request Types': ''}];
          alasql('SELECT  `First Name`,  `Last Name`,  `Phone Number`,  `Email Id`, `Is Manager (only one can be the manager)`, `Request Types` INTO XLSXML("Service-Provider.xls",?) FROM ?', [mystyle, this.header_array]);
          //  alasql('SELECT * INTO XLSX("Property.xls",?) FROM ?', ['Phase', 'Tower', 'Flat', 'Rooms']);
          //  alasql('SELECT ,  Phase,  Tower,  Flat,  Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, response.users_Data[0]]);
        }
        if (response.flag === 2) {
          console.log('Service-Provider---->')
          alasql('SELECT _id AS `id`, first_name AS `First Name`, last_name AS `Last Name`, phone_number AS `Phone Number`, email_id AS `Email Id`,is_manager AS `Is Manager (only one can be the manager)`,request_types AS `Request Types`, Active AS `Active` INTO XLSXML("Service-Provider.xls",?) FROM ?', [mystyle, response.users_Data]);
        }
      });
  }
  downloadServiceProviderXlsxFormat() {
    this. selected_value = 'Service-Provider';
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
          this.header_array = [{ 'First Name': '' , 'Last Name': '', 'Phone Number': '', 'Email Id': '', 'Is Manager (only one can be the manager)': '', 'Request Types': ''}];
          alasql('SELECT  `First Name`,  `Last Name`,  `Phone Number`,  `Email Id`, `Is Manager (only one can be the manager)`, `Request Types` INTO xlsx("Service-Provider.xlsx",?) FROM ?', [mystyle, this.header_array]);
          //  alasql('SELECT * INTO XLSX("Property.xls",?) FROM ?', ['Phase', 'Tower', 'Flat', 'Rooms']);
          //  alasql('SELECT ,  Phase,  Tower,  Flat,  Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, response.users_Data[0]]);
        }

        if (response.flag === 2) {
          console.log('Service-Provider---->')
          alasql('SELECT _id AS `id`, first_name AS `First Name`, last_name AS `Last Name`, phone_number AS `Phone Number`, email_id AS `Email Id`,is_manager AS `Is Manager (only one can be the manager)`,request_types AS `Request Types` INTO xlsx("Service-Provider.xlsx",?) FROM ?', [mystyle, response.users_Data]);
        }
      });
  }

}
