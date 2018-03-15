import { Component, OnInit , Input} from '@angular/core';

import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {ActivatedRoute , Router, CanActivate, NavigationEnd} from '@angular/router';
import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { DataService } from '../data.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
declare let require: any;
declare var $: any; // JQuery
declare var swal: any;

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent {
  @Input() inputModel: Object;
  userSessionName: string;
  selectedItem: string;
  selectedItem1: string;
  selectedItem2: string;
  selectedItem3: string;
  // currentRoute: string;
  current_route: String;
  constructor (private _dataService: DataService, private route: ActivatedRoute, private _http: Http, private router: Router) {
    this._dataService.showUserNameSessionWise()
      .subscribe(response => {
        console.log('>>>>>>>>>>>>>>' + JSON.stringify(response));
        this.userSessionName = response.user_name[0].first_name + ' ' + response.user_name[0].last_name;
        console.log('userSessionName>>>>>>>>>>>>>>' + JSON.stringify(this.userSessionName));
        // this.dtTrigger.next();
      });
  }
  ngOnInit(): void {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
         let currentRoute = this.route.root;
        while (currentRoute.children[0] !== undefined) {
          currentRoute = currentRoute.children[0];
        }
        console.log('sidebar::::::::::------->' + JSON.stringify(currentRoute.snapshot.data));
        this.setCurrentRoute(currentRoute.snapshot.data);
      });
  }
  setCurrentRoute(route_obj) {
    this.current_route = route_obj.name;
  }

  navigationBar() {
    alert('clicked sidebar')
  }
  showAlert() {
    swal({
      title: 'Are you sure?',
      text: 'You wont be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(function() {
      swal(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      );
    });
  }
  successAlert() {
    swal('Cool!', 'Successful Login.', 'success');
  }
  helloAlert() {
    swal('Hello world!');
  }
  errorAlert() {
    swal('Oops...', 'Something went wrong!', 'error');
  }

}
