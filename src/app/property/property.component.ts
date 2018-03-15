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
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent  {
  filesToUpload: Array<File> = [];

  private usersData: Array<any> = [];
  private header_array: Array<any> = [];
  response: {};
  propertyForm = new FormGroup({
    property_name: new FormControl()
  });
  residentForm = new FormGroup({
    resident_name: new FormControl()
  });
  check_property: boolean = true;
  @Input() isResetting = false;
  selected_value: string;
  constructor(private _dataService: DataService, private _http: Http, private spinnerService: Ng4LoadingSpinnerService) {
  }
  ngOnInit(): void {
  }
  uploadCsvProperty() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    formData.append('uploads[]', files[0], files[0]['name']);

    if ([ 'xls', 'xlsx'].indexOf(files[0]['name'].split('.')[files[0]['name'].split('.').length - 1]) === -1) {
      swal('Sorry!', 'please upload xlsx file' , 'error');
      return;
    }

    this.spinnerService.show();
    this._http.post(environment.url + '/property/uploadExcelProcessForProperty', formData)
      .map(res => res.json())
      .catch(error => Observable.throw(error))
      .subscribe(response => {
        this.response = response;
        console.log('-------------------->' + JSON.stringify(response));
        if (response.save === true) {
          setTimeout(() => {
            this.spinnerService.hide();
            alertify.logPosition('bottom-right');
            alertify.success('Properties file uploaded successfully');
            swal('', 'Properties file uploaded successfully', 'success');
          }, 3000);
          this.check_property = true;
          this.isResetting = true;
          setTimeout(() => this.isResetting = false, 0);
          return false;
        }
        if (response.save === false) {
          this.spinnerService.hide();
          swal('Oops...', response.message, 'error');
        }
      });
  }
  fileChangeEventForProperty(fileInput: any) {
    this.check_property = false;
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  downloadProperty () {
    this. selected_value = 'property';
    this._dataService.downloadExcelProcess(this.selected_value)
      .subscribe(response => {
        const excel_json = {};
        const excel_array = [];
        console.log('datat::::' + JSON.stringify(response.users_Data));
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
          this.header_array = [{ Phase: '' , Tower: '', Flat: '', Rooms: ''}];
          alasql('SELECT  Phase,  Tower,  Flat,    Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, this.header_array]);
        //  alasql('SELECT * INTO XLSX("Property.xls",?) FROM ?', ['Phase', 'Tower', 'Flat', 'Rooms']);
        //  alasql('SELECT ,  Phase,  Tower,  Flat,  Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, response.users_Data[0]]);
        }
        if (response.flag == 4) {
          console.log('property---->')
          // alasql('SELECT _id AS `id` phase_name AS Phase, tower_name AS Tower, flat_no AS Flat, room AS Rooms   INTO XLSXML("' + p_name + '",?) FROM ?', [mystyle, response.users_Data[0].flat]);
          alasql('SELECT _id AS `id`, phase_name AS Phase, tower_name AS Tower, flat_no AS Flat, flat_id AS `Flat Id`,  room AS Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, response.users_Data[0].flat]);
        }
      });
  }
  downloadPropertyXlsxFormat () {
    this. selected_value = 'property';
    this._dataService.downloadExcelProcess(this.selected_value)
      .subscribe(response => {
        const excel_json = {};
        const excel_array = [];
        console.log('datat::::' + JSON.stringify(response.users_Data));
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
          this.header_array = [{ Phase: '' , Tower: '', Flat: '', Rooms: ''}];
          alasql('SELECT  Phase,  Tower,  Flat,    Rooms   INTO xlsx("Property.xlsx",?) FROM ?', [mystyle, this.header_array]);
        //  alasql('SELECT * INTO XLSX("Property.xls",?) FROM ?', ['Phase', 'Tower', 'Flat', 'Rooms']);
        //  alasql('SELECT ,  Phase,  Tower,  Flat,  Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, response.users_Data[0]]);
        }
        if (response.flag == 4) {
          console.log('property---->')
          // alasql('SELECT _id AS `id` phase_name AS Phase, tower_name AS Tower, flat_no AS Flat, room AS Rooms   INTO XLSXML("' + p_name + '",?) FROM ?', [mystyle, response.users_Data[0].flat]);
          alasql('SELECT _id AS `id`, phase_name AS Phase, tower_name AS Tower, flat_no AS Flat, flat_id AS `Flat Id`,  room AS Rooms   INTO xlsx("Property.xlsx",?) FROM ?', [mystyle, response.users_Data[0].flat]);
        }
      });
  }
}
