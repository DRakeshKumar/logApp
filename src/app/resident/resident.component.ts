import { Component, OnInit, Input} from '@angular/core';
import { Router, CanActivate} from '@angular/router';
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
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.css']
})
export class ResidentComponent {
  filesToUpload: Array<File> = [];
  private usersData: Array<any> = [];
  response: {};
  propertyForm = new FormGroup({
    property_name: new FormControl()
  });
  residentForm = new FormGroup({
    resident_name: new FormControl()
  });
  check_resident: boolean = true;
  @Input() isResetting = false;
  selected_value: string;
  private header_array: Array<any> = [];
  constructor(private _dataService: DataService, private _http: Http, private spinnerService: Ng4LoadingSpinnerService) {
  }
  uploadCsv() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files)
  //  let formData : FormData = new FormData();
    formData.append('uploads[]', files[0], files[0]['name']);
    if ([ 'xls', 'xlsx'].indexOf(files[0]['name'].split('.')[files[0]['name'].split('.').length - 1]) === -1) {
      swal('Sorry!', 'please upload xlsx file', 'error');
      // swal('please upload xlsx file');
      return;
    }
    this.spinnerService.show();
    /*this._dataService.uploadResident( formData)
      .subscribe(response => {
        console.log('-------------------->' + JSON.stringify(response))
        this. response = response;

      });*/
    this._http.post(environment.url + '/resident/uploadExcelProcessForResident', formData)
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
            swal('', 'Resident file uploaded successfully', 'success');
          }, 3000);
          this.check_resident = true;
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
        /* if (response.save == 'not saved') {
          this.spinnerService.hide();
          swal('Oops...', response.message, 'error');
        }*/
      });
  }
  fileChangeEvent(fileInput: any) {
    this.check_resident = false;
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  downloadResident() {
    this. selected_value = 'Resident';
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
          console.log('entered into false if:::::::::::')
          // this.header_array = [{ Phase: '' , Tower: '', Flat: '', Rooms: ''}];
          this.header_array = [{ 'First Name': '' , 'Last Name': '', 'Phone Number': '', 'Email Id': '', 'Flat Id': ''}];
          alasql('SELECT  `First Name`,  `Last Name`,  `Phone Number`,  `Email Id`, `Flat Id`  INTO XLSXML("Resident.xls",?) FROM ?', [mystyle, this.header_array]);
          //  alasql('SELECT * INTO XLSX("Property.xls",?) FROM ?', ['Phase', 'Tower', 'Flat', 'Rooms']);
          //  alasql('SELECT ,  Phase,  Tower,  Flat,  Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, response.users_Data[0]]);
        }

        if (response.flag === 1) {
          console.log('Resident---->')
          alasql('SELECT  _id AS `id`, first_name As `First Name`, last_name AS `Last Name`, phone_number AS `Phone Number`, email_id AS `Email Id` , flat_id as `Flat Id` INTO XLSXML("Resident.xls",?) FROM ?', [mystyle, response.users_Data]);
        }
      });
  }
  downloadResidentXlsxFormat() {
    this. selected_value = 'Resident';
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
          console.log('entered into false if:::::::::::')
          // this.header_array = [{ Phase: '' , Tower: '', Flat: '', Rooms: ''}];
          this.header_array = [{ 'First Name': '' , 'Last Name': '', 'Phone Number': '', 'Email Id': '', 'Flat Id': ''}];
          alasql('SELECT  `First Name`,  `Last Name`,  `Phone Number`,  `Email Id`, `Flat Id`  INTO xlsx("Resident.xlsx",?) FROM ?', [mystyle, this.header_array]);
          //  alasql('SELECT * INTO XLSX("Property.xls",?) FROM ?', ['Phase', 'Tower', 'Flat', 'Rooms']);
          //  alasql('SELECT ,  Phase,  Tower,  Flat,  Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, response.users_Data[0]]);
        }

        if (response.flag === 1) {
          console.log('Resident---->')
          alasql('SELECT  _id AS `id`, first_name As `First Name`, last_name AS `Last Name`, phone_number AS `Phone Number`, email_id AS `Email Id` , flat_id as `Flat Id` INTO xlsx("Resident.xlsx",?) FROM ?', [mystyle, response.users_Data]);
        }
      });
  }
}
