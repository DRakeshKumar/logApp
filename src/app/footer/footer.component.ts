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
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() inputModel: Object;
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
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  constructor (private _dataService: DataService, private _http: Http, private router: Router) {
    this._dataService.showIndividualServices()
      .subscribe(response => {
        console.log(JSON.stringify(response));
       // console.log(JSON.stringify(response[0].daily_service_info));
        console.dir(response);
        this.userData = response;
        console.log(response.length);
      });
  }
  ngOnInit(): void {
  }

  findL1OfDs() {
    alert ('1' + $('#type_name').val()) ;
    this. type_name = $('#type_name').val();
    this._dataService.findFirstLevelOfDs( this. type_name)
      .subscribe(response => {
        console.log(JSON.stringify(response));
        this.type = response;
      });
  }
  findL2OfDs() {
    alert ('2' + $('#level1').val()) ;
    this. level2 = $('#level1').val();
    this._dataService.findSecondLevelOfDs( this. level2)
      .subscribe(response => {
        console.log(JSON.stringify(response));
        this.level_1 = response;
      });
  }
  findL3OfDs() {
    alert ('3' + $('#level2').val()) ;
    this. level3 = $('#level2').val();
    this._dataService.findThirdLevelOfDs( this. level3)
      .subscribe(response => {
        console.log(JSON.stringify(response));
        this.level_2 = response;
      });
  }

  onSubmitData() {
  }
}
