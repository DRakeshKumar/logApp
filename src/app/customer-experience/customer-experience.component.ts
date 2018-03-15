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
  selector: 'app-experience',
  templateUrl: './customer-experience.component.html',
  styleUrls: ['./customer-experience.component.css']
})
export class CustomerExperienceComponent {
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


}
