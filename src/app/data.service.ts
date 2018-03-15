import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class DataService {

  result: any;
  constructor(private _http: Http) {
  }
  uploadResident(formData) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log('====services' + JSON.stringify(formData))
    return this._http.put('/resident/uploadResident', JSON.stringify(formData), {headers : headers, withCredentials: true})
      .map(res => res.json());
  }
  showAllUsers() {
    return this._http.get('/web/users')
      .map(res => res.json());
  }
  showIndividualServices() {
    return this._http.get('/web/showIndividualServiceProcess')
      .map(res => res.json());
  }
  showloggedRequestUsers() {
    return this._http.get('/web/showloggedRequestUsers')
      .map(res => res.json());
  }
  showEnquiredUsers() {
    return this._http.get('/web/showEnquiredUsers')
      .map(res => res.json());
  }
  showCompanyOwnerList() {
    return this._http.get('/web/showCompanyOwnerListProcess')
      .map(res => res.json());
  }
  showUserNameSessionWise() {
    return this._http.get('/web/showUserNameSessionWise')
      .map(res => res.json());
  }
  findFirstLevelOfDs(type_name) {
    return this._http.get('/web/findFirstLevelOfDs/' + type_name, {withCredentials: true})
      .map(res => res.json());
  }
  dateWiseUser(date) {
    console.log('services:::' + date);
    return this._http.get('/web/userDateWiseProcess/' + date, {withCredentials: true})
      .map(res => res.json());
  }
  updateUser(userEditData) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log('====services' + JSON.stringify(userEditData))
    return this._http.put('/web/updateUser', JSON.stringify(userEditData), {headers : headers, withCredentials: true})
      .map(res => res.json());
    /*return this._http.get('/web/updateUser/' + userEditData , {withCredentials: true})
      .map(res => res.json());*/
  }
  showAllRequestTypesForSpecificService(info) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log('====services' + JSON.stringify(info))
    return this._http.put('/web/showAllRequestTypesForSpecificService', JSON.stringify(info), {headers : headers, withCredentials: true})
      .map(res => res.json());
    /*return this._http.get('/web/updateUser/' + userEditData , {withCredentials: true})
      .map(res => res.json());*/
  }
  updateServiceProvider(userEditData) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log('====services' + JSON.stringify(userEditData));
    return this._http.put('/web/updateServiceProvider', JSON.stringify(userEditData), {headers : headers, withCredentials: true})
      .map(res => res.json());
    /*return this._http.get('/web/updateUser/' + userEditData , {withCredentials: true})
      .map(res => res.json());*/
  }
  sendQuoteToUsersProcess(userEditData) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log('====services' + JSON.stringify(userEditData));
    return this._http.put('/web/sendQuoteToUsersProcess', JSON.stringify(userEditData), {headers : headers, withCredentials: true})
      .map(res => res.json());
    /*return this._http.get('/web/updateUser/' + userEditData , {withCredentials: true})
      .map(res => res.json());*/
  }
  findSecondLevelOfDs(level1) {
    return this._http.get('/web/findSecondLevelOfDs/' + level1, {withCredentials: true})
      .map(res => res.json());
  }
  findThirdLevelOfDs(level3) {
    return this._http.get('/web/findThirdLevelOfDs/' + level3, {withCredentials: true})
      .map(res => res.json());
  }
  getSendSmsUsingMsg91Process() {
    console.log('services:::')
    return this._http.get('/web/sendSmsUsingMsg91')
      .map(res => res.json());
  }

  getSendSmsUsingtextLocalProcess() {
    console.log('services:::')
    return this._http.get('/web/sendSmsUsingtextLocal')
      .map(res => res.json());
  }
  downloadExcelProcess(selected_value) {
    return this._http.get('/web/downloadExcelProcess/' + selected_value, {withCredentials: true})
      .map(res => res.json());
  }
}
