import {Component, OnInit, Input} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
// Import the DataService
import { DataService } from './data.service';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {ActivatedRoute , Router, CanActivate, NavigationEnd} from '@angular/router';
import * as _ from "lodash";
import { FormDataService }            from '../../src/app/multi-wizard/data/formData.service';
var alertify = require('../../node_modules/alertify.js');
declare let require: any;

declare var $: any; // JQuery
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  filesToUpload: Array<File> = [];
  title = 'Multi-Step Wizard';
  @Input() formData;
  // Define a users property to hold our user data
  current_route: String;
  users: Array<any>;
  private usersData: Array<any> = [];
  response: {};
  serviceForm = new FormGroup({
    service_name: new FormControl()
  });
  check_services: boolean = true;
  // Create an instance of the DataService through dependency injection
  constructor(private router: Router , private route: ActivatedRoute, private _dataService: DataService, private _http: Http, private formDataService: FormDataService) {
    // Access the Data Service's getUsers() method we defined
   /* this._dataService.getUsers()
        .subscribe(res => this.users = res);*/
  }
  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        let currentRoute = this.route.root;
        while (currentRoute.children[0] !== undefined) {
          currentRoute = currentRoute.children[0];
        }
         console.log('------->' + JSON.stringify(currentRoute.snapshot.data));
        this.setCurrentRoute(currentRoute.snapshot.data);
      });

  }
  setCurrentRoute(route_obj) {
    this.current_route = route_obj.name;
  }
  /*uploadCsvServices() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    formData.append('uploads[]', files[0], files[0]['name']);
    this._http.post('http://localhost:3000/api/uploadExcelProcessForServices', formData)
      .map(res => res.json())
      .catch(error => Observable.throw(error))
      .subscribe(response => {
        console.log('-------------------->' + JSON.stringify(response));
        this.response = response;
        if (response.save === true) {
          alertify.logPosition('top right');
          alertify.success('Excel file uploaded successfully');
          alertify.error(response.invalid_field + ' ' + 'rows have invalid  data');
        }
      });
  }
  fileChangeEventForServices(fileInput: any) {
    this.check_services = false;
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }*/


}
