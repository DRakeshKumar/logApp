webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-info/app-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Custom code */\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-info/app-info.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<div class=\"app-body clearfix\">\n  <app-sidebar>  </app-sidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">Home</li>\n      <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a></li>\n      <li class=\"breadcrumb-item active\">Application Information</li>\n\n      <!-- Breadcrumb Menu-->\n      <li class=\"breadcrumb-menu d-md-down-none\">\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group\">\n        <!--  <a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>\n          <a class=\"btn\" href=\"#\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n          <a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>-->\n        </div>\n      </li>\n    </ol>\n\n\n    <div class=\"container-fluid\">\n      Welcome to Application Information Page!!!\n    </div>\n\n  </main>\n</div>\n\n\n<app-footer></app-footer>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app-info/app-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppInfoComponent = (function () {
    function AppInfoComponent(_dataService, _http) {
        this._dataService = _dataService;
        this._http = _http;
        this.userEditData = {};
        this.editForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            type_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            level1List: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            level2List: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            level3List: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    AppInfoComponent.prototype.ngOnInit = function () {
    };
    AppInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-info',
            template: __webpack_require__("../../../../../src/app/app-info/app-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app-info/app-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]])
    ], AppInfoComponent);
    return AppInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div ng-view></div>\n\n<router-outlet></router-outlet>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_app_multi_wizard_data_formData_service__ = __webpack_require__("../../../../../src/app/multi-wizard/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import the DataService




var alertify = __webpack_require__("../../../../alertify.js/dist/js/alertify.js");
var AppComponent = (function () {
    // Create an instance of the DataService through dependency injection
    function AppComponent(router, route, _dataService, _http, formDataService) {
        this.router = router;
        this.route = route;
        this._dataService = _dataService;
        this._http = _http;
        this.formDataService = formDataService;
        this.filesToUpload = [];
        this.title = 'Multi-Step Wizard';
        this.usersData = [];
        this.serviceForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            service_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.check_services = true;
        // Access the Data Service's getUsers() method we defined
        /* this._dataService.getUsers()
             .subscribe(res => this.users = res);*/
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["NavigationEnd"]; })
            .subscribe(function (event) {
            var currentRoute = _this.route.root;
            while (currentRoute.children[0] !== undefined) {
                currentRoute = currentRoute.children[0];
            }
            console.log('------->' + JSON.stringify(currentRoute.snapshot.data));
            _this.setCurrentRoute(currentRoute.snapshot.data);
        });
    };
    AppComponent.prototype.setCurrentRoute = function (route_obj) {
        this.current_route = route_obj.name;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "formData", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_5__src_app_multi_wizard_data_formData_service__["a" /* FormDataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_authenticate_module__ = __webpack_require__("../../../../../src/app/auth/authenticate.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_management_data_management_component__ = __webpack_require__("../../../../../src/app/data-management/data-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__enquiry_enquiry_component__ = __webpack_require__("../../../../../src/app/enquiry/enquiry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__resident_resident_component__ = __webpack_require__("../../../../../src/app/resident/resident.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_provider_service_provider_component__ = __webpack_require__("../../../../../src/app/service-provider/service-provider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__property_property_component__ = __webpack_require__("../../../../../src/app/property/property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__requests_sla_request_sla_component__ = __webpack_require__("../../../../../src/app/requests-sla/request-sla.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__customer_experience_customer_experience_component__ = __webpack_require__("../../../../../src/app/customer-experience/customer-experience.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__privacy_policy_privacy_policy_component__ = __webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__terms_conditions_terms_conditions_component__ = __webpack_require__("../../../../../src/app/terms-conditions/terms-conditions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_info_app_info_component__ = __webpack_require__("../../../../../src/app/app-info/app-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__routing_app_routing_module__ = __webpack_require__("../../../../../src/app/routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__right_sidebar_right_sidebar_component__ = __webpack_require__("../../../../../src/app/right-sidebar/right-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng2_modal__ = __webpack_require__("../../../../ng2-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_ng2_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__multi_wizard_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/multi-wizard/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__multi_wizard_personal_personal_component__ = __webpack_require__("../../../../../src/app/multi-wizard/personal/personal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__multi_wizard_work_work_component__ = __webpack_require__("../../../../../src/app/multi-wizard/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__multi_wizard_address_address_component__ = __webpack_require__("../../../../../src/app/multi-wizard/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__multi_wizard_result_result_component__ = __webpack_require__("../../../../../src/app/multi-wizard/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__multi_wizard_data_formData_service__ = __webpack_require__("../../../../../src/app/multi-wizard/data/formData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__multi_wizard_workflow_workflow_service__ = __webpack_require__("../../../../../src/app/multi-wizard/workflow/workflow.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Import the Http Module and our Data Service





























/* Feature Components */






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__data_management_data_management_component__["a" /* DataManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_28__dashboard_dashboard_component__["a" /* DashBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__resident_resident_component__["a" /* ResidentComponent */],
                __WEBPACK_IMPORTED_MODULE_16__property_property_component__["a" /* PropertyComponent */],
                __WEBPACK_IMPORTED_MODULE_15__service_provider_service_provider_component__["a" /* ServiceProviderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_29__right_sidebar_right_sidebar_component__["a" /* RightSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_30__index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_18__requests_sla_request_sla_component__["a" /* RequestSlaComponent */],
                __WEBPACK_IMPORTED_MODULE_22__customer_experience_customer_experience_component__["a" /* CustomerExperienceComponent */],
                __WEBPACK_IMPORTED_MODULE_23__privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */],
                __WEBPACK_IMPORTED_MODULE_24__terms_conditions_terms_conditions_component__["a" /* TermsConditionsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__app_info_app_info_component__["a" /* AppInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_19__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_21__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__enquiry_enquiry_component__["a" /* EnquiryComponent */],
                __WEBPACK_IMPORTED_MODULE_13__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_20__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_32__multi_wizard_navbar_navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_33__multi_wizard_personal_personal_component__["a" /* PersonalComponent */], __WEBPACK_IMPORTED_MODULE_34__multi_wizard_work_work_component__["a" /* WorkComponent */], __WEBPACK_IMPORTED_MODULE_35__multi_wizard_address_address_component__["a" /* AddressComponent */], __WEBPACK_IMPORTED_MODULE_36__multi_wizard_result_result_component__["a" /* ResultComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["d" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_8__auth_authenticate_module__["a" /* AuthModule */], __WEBPACK_IMPORTED_MODULE_26__routing_app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_27_angular_datatables__["a" /* DataTablesModule */], __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot(), __WEBPACK_IMPORTED_MODULE_31_ng2_modal__["ModalModule"],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7__auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
                { provide: __WEBPACK_IMPORTED_MODULE_37__multi_wizard_data_formData_service__["a" /* FormDataService */], useClass: __WEBPACK_IMPORTED_MODULE_37__multi_wizard_data_formData_service__["a" /* FormDataService */] },
                { provide: __WEBPACK_IMPORTED_MODULE_38__multi_wizard_workflow_workflow_service__["a" /* WorkflowService */], useClass: __WEBPACK_IMPORTED_MODULE_38__multi_wizard_workflow_workflow_service__["a" /* WorkflowService */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('apiToken') !== null) {
            console.log('getting true..');
            return true;
        }
        this.router.navigate(['/']);
        return false;
        /* if (this.authService.loggedIn()) {
          // this.router.navigateByUrl('/dashboard');
           return true;
         } else {
           console.log('-------------------2' + this.authService.loggedIn())
           this.router.navigateByUrl('/');
           return false;
         }*/
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(_http, authHttp) {
        this._http = _http;
        this.authHttp = authHttp;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
    }
    AuthService.prototype.useJwtHelper = function () {
        if (localStorage.getItem('apiToken')) {
            var token = localStorage.getItem('apiToken');
            console.log('token::::' + token);
            if (!this.jwtHelper.isTokenExpired(token)) {
                return true;
            }
            else {
                localStorage.clear();
                return false;
            }
        }
        return false;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.verifyUsers = function (phone_number) {
        console.log('services:::' + phone_number);
        return this._http.get('/web/verifyUsersProcess/' + phone_number, { withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.movers_enquiry_data_verification = function (data) {
        console.log('services:::' + data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.put('/web/movers_enquiry_data_verificationProcess', JSON.stringify(data), { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.movers_enquiry_data_aadhar_validate_verification = function (data) {
        console.log('services:::' + data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.put('/web/movers_enquiry_data_aadhar_validate_verification', JSON.stringify(data), { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.user_enquiry = function (data) {
        console.log('services:::' + data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this._http.put('/web/user_enquiry_process', JSON.stringify(data), { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.verifyOtp = function (otp, phone_number) {
        console.log('services:::' + otp);
        return this._http.get("/web/verifyOtpProcess/?otp=" + otp + "&phone=" + phone_number, { withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.userLogout = function () {
        console.log('Signing Out...');
        return this.authHttp.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].url + '/logout');
        // return this.authHttp.get('https://localhost:443/logout');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/authenticate.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



function authHttpServiceFactory(_http, options) {
    return new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthConfig"]({
        tokenName: 'token',
        headerPrefix: 'Bearer:',
        tokenGetter: (function () { return localStorage.getItem('apiToken'); }),
        globalHeaders: [{ 'Content-Type': 'application/json' }],
    }), _http, options);
}
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"],
                    useFactory: authHttpServiceFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]]
                }
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/customer-experience/customer-experience.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Custom code */\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer-experience/customer-experience.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<div class=\"app-body clearfix\">\n  <app-sidebar>  </app-sidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">Home</li>\n      <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a></li>\n      <li class=\"breadcrumb-item active\">Customer Experience</li>\n\n      <!-- Breadcrumb Menu-->\n      <li class=\"breadcrumb-menu d-md-down-none\">\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group\">\n        <!--  <a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>\n          <a class=\"btn\" href=\"#\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n          <a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>-->\n        </div>\n      </li>\n    </ol>\n\n\n    <div class=\"container-fluid\">\n      Welcome to Customer Experience Page!!!\n    </div>\n\n  </main>\n</div>\n\n\n<app-footer></app-footer>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/customer-experience/customer-experience.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerExperienceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerExperienceComponent = (function () {
    function CustomerExperienceComponent(_dataService, _http) {
        this._dataService = _dataService;
        this._http = _http;
        this.userEditData = {};
        this.editForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            type_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            level1List: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            level2List: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            level3List: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    CustomerExperienceComponent.prototype.ngOnInit = function () {
    };
    CustomerExperienceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__("../../../../../src/app/customer-experience/customer-experience.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customer-experience/customer-experience.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]])
    ], CustomerExperienceComponent);
    return CustomerExperienceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Custom code */\r\n/*.mid-content {\r\n  width: 100%;\r\n  padding: 5% 0;\r\n}\r\n.sidebar {float:left;width:15%}\r\n.mid-content h3 {}\r\n.content-data {float: left; width: 75%;}*/\r\n\r\ndiv.dataTables_wrapper {\r\n  margin: 0 auto;\r\n}\r\ntable {\r\n  font-family: arial, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n\r\n}\r\nthead td, th {\r\n  border: 1px solid #dddddd;\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\ntbody\r\ntd, th {\r\n  border: 1px solid #dddddd;\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\ntbody tr:nth-child(even) {\r\n  background-color: #b2ccff;\r\n}\r\n\r\n.fixed {\r\n  position: fixed;\r\n  top:0; left:0;\r\n  width: 100%; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"app-body\">\r\n\r\n  <app-sidebar>  </app-sidebar>\r\n\r\n  <main class=\"main\">\r\n    <ol class=\"breadcrumb\">\r\n      <!--<li class=\"breadcrumb-item\">Home</li>\r\n      <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Admin</a></li>-->\r\n      <li class=\"breadcrumb-item active rob\">Dashboard</li>\r\n\r\n      <!-- Breadcrumb Menu-->\r\n      <li class=\"breadcrumb-menu d-md-down-none\">\r\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group\">\r\n          <!-- <a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>\r\n           <a class=\"btn\" href=\"#\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\r\n           <a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>-->\r\n        </div>\r\n      </li>\r\n    </ol>\r\n      <div class=\"container-fluid\" >\r\n          <div id=\"ui-view\"></div>\r\n          <div>\r\n            <input type=\"date\" id=\"enquiry_date\" (change)=\"userDateWise()\"/>\r\n          </div>\r\n          <div class=\"content-data\" style=\"overflow-x: hidden;\">\r\n\r\n            <table id=\"example\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\" >\r\n              <thead class=\"rob\">\r\n              <tr>\r\n                <th>#</th>\r\n                <th>Date</th>\r\n                <th>Name</th>\r\n                <th>Email</th>\r\n                <th>Mobile</th>\r\n                <th>From</th>\r\n                <th>To</th>\r\n                <th>Date</th>\r\n                <th>Main Listed Items</th>\r\n                <th>Settings</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody class=\"rob\">\r\n              <tr *ngFor=\"let user of loggedRequestData; let i = index;\">\r\n                <td style=\"background-color: lightslategrey;color: #FFFFFF\">{{i+1}}</td>\r\n                <td style=\"background-color: #FFFFFF;color: #000000\">{{user.created_date}}</td>\r\n                <td style=\"background-color: #FFFFFF;color: #000000\">{{ user.first_name }} | {{ user.last_name }}</td>\r\n                <td style=\"background-color: #FFFFFF;color: #000000\">{{ user.email }}</td>\r\n                <td style=\"background-color: #FFFFFF;color: #000000\">{{ user.mobile }}</td>\r\n                <td style=\"background-color: lightgray;color: #000000\">{{ user.from_name }}</td>\r\n                <td style=\"background-color: lightgray;color: #000000\">{{ user.to_name }}</td>\r\n                <td style=\"background-color: lightgray;color: #000000\">{{ user.pick_up_date }}</td>\r\n                <td style=\"background-color: #FFFFFF;color: #000000\">{{ user.list_item }}</td>\r\n                <td><button type=\"button\" style=\"color:#0e6498\" class=\"\" (click)=\"openmodal(user)\">Edit</button></td>\r\n               <!-- <td><button type=\"button\" class=\"btn btn-primary\" (click)=\"openmodal(user)\">Edit</button></td>-->\r\n                <!--<td><button type=\"button\" class=\"btn btn-primary\" (click)=\"openmodal(user, user_id)\">Edit</button></td>-->\r\n              </tr>\r\n              </tbody>\r\n\r\n            </table>\r\n\r\n\r\n          </div>\r\n      </div>\r\n      <div class=\"modal inmodal rounded-corners \"   id=\"myModal\" tabindex=\"-1\" role=\"dialog\"  aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-lg rounded-corners \" style=\"width:50%\">\r\n          <div class=\"modal-content animated fadeIn rounded-corners \" style=\"background-color: rgb(239, 236, 236);\">\r\n            <div class=\"rounded-corners\" style=\"background-color: rgb(239, 236, 236); text-align:center;\">\r\n            </div>\r\n            <div class=\"panel panel-default\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"walkInModalClose($event)\" >&times;</button>\r\n              <div class=\"panel-body\" >\r\n                <form [formGroup]=\"medicine_editForm\" >\r\n                  <div>Quotation Details</div>\r\n                  <div>\r\n                   From: <input type=\"text\" class=\"form-control\"   formControlName=\"from_number\"  [(ngModel)]=\"userEditData['from_number']\"  name=\"from_number\" id=\"from_number\" >\r\n                  </div>\r\n                  <div>\r\n                    To:<input type=\"text\" class=\"form-control\"  readonly formControlName=\"to_number\"  [(ngModel)]=\"userEditData['to_number']\"  name=\"to_number\" id=\"to_number\" >\r\n                  </div>\r\n                  <div>\r\n                   Item Price: <textarea  class=\"form-control\"  formControlName=\"list_item_details\"  [(ngModel)]=\"userEditData['list_item_details']\"  name=\"list_item_details\" id=\"list_item_details\" ></textarea>\r\n                  </div>\r\n                  <div>\r\n                    Logisic Details: <textarea  class=\"form-control\" style=\"color: orangered\" formControlName=\"logistic_details\"  [(ngModel)]=\"userEditData['logistic_details']\"  name=\"logistic_details\" id=\"logistic_details\" ></textarea>\r\n                  </div>\r\n                  <button type=\"button\" class=\"btn btn-md btn-primary \" (click)=\"sendQuoteToUsers(userEditData)\">Send</button>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"route-main-content\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n  </main>\r\n\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--\r\n\r\n<div>\r\n  <h3 >Welcome to hubcontrol Dashboard</h3>\r\n</div>\r\n<div>\r\n  <div style=\"display: inline\"><app-sidebar></app-sidebar></div>\r\n  <div style=\"display: inline;\"> <router-outlet></router-outlet></div>\r\n</div>-->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var alertify = __webpack_require__("../../../../alertify.js/dist/js/alertify.js");
var ChildDirective = (function () {
    function ChildDirective() {
    }
    ChildDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: 'child-directive' })
    ], ChildDirective);
    return ChildDirective;
}());
var DashBoardComponent = (function () {
    function DashBoardComponent(_dataService, _http) {
        var _this = this;
        this._dataService = _dataService;
        this._http = _http;
        this.filesToUpload = [];
        this.usersData = [];
        this.propertyForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            property_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.residentForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            resident_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.userData = [];
        this.loggedRequestData = [];
        this.date = {};
        this.request_typeData = [];
        this.request_type_sp = [];
        this.level_2_array = [];
        this.level_1_array = [];
        this.user_id = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["b" /* Subject */]();
        this.dtOptions = {};
        this.check_property = true;
        this.check_resident = true;
        this.userEditData = {};
        this.level2_json = {};
        this.medicine_editForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            from_number: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            to_number: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            list_item_details: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            logistic_details: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        /*this._dataService.showAllUsers()
          .subscribe(response => {
            console.dir(response);
            this.userData = response;
            this.dtTrigger.next();
          });*/
        /*
            this._dataService.showloggedRequestUsers()
              .subscribe(response => {
                console.dir(response);
                this.loggedRequestData = response;
                this.dtTrigger.next();
        
              });*/
        this._dataService.showEnquiredUsers()
            .subscribe(function (response) {
            console.dir(response);
            _this.loggedRequestData = response;
            _this.dtTrigger.next();
        });
        /*this._dataService.showIndividualServices()
          .subscribe(response => {
            // console.log(JSON.stringify(response));
            // console.log(JSON.stringify(response[0].daily_service_info));
            this.user_id = response._id;
            this.userData = response.daily_service_info;
             console.log('========= ' + JSON.stringify(this.usersData));
            this.dtTrigger.next();
          });*/
    }
    DashBoardComponent.prototype.openmodal = function (info) {
        var _this = this;
        console.log('the data is here ' + JSON.stringify(info));
        // this.userData = info;
        var name = 'hello';
        $('#myModal').show();
        var level_id = info.level_id;
        var parent_id = info.parent_id;
        var level = info.level;
        var request_id = info.request_id;
        console.log(parent_id);
        var prooBJ = {};
        var prooBJ_new = {};
        var sp_list = [];
        /*this._dataService.showAllRequestTypesForSpecificService(info)
          .subscribe(response => {
            console.dir(response);
            this.request_typeData = response;
            console.log('request_types_list>>>' + JSON.stringify(sp_list));
    
          });*/
        this._dataService.showUserNameSessionWise()
            .subscribe(function (response) {
            console.log('>>>>>>>>>>>>>>' + JSON.stringify(response));
            _this.userEditData['from_number'] = response.user_name[0].movers_mobile;
            _this.userEditData['to_number'] = info.mobile;
            _this.userEditData['list_item_details'] = info.list_item;
            _this.userEditData['logistic_details'] = "Call us at:" + response.user_name[0].movers_mobile + " " + "Our address:" + response.user_name[0].movers_address;
        });
    };
    DashBoardComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            scrollX: true,
            searching: false,
        };
    };
    DashBoardComponent.prototype.userDateWise = function () {
        var _this = this;
        this.date = $('#enquiry_date').val();
        alert(this.date);
        this._dataService.dateWiseUser(this.date)
            .subscribe(function (response) {
            //console.log('========= ' + JSON.stringify(this.userData));
            _this.loggedRequestData = response;
        });
    };
    DashBoardComponent.prototype.sendSmsUsingMsg91 = function () {
        this._dataService.getSendSmsUsingMsg91Process()
            .subscribe(function (response) {
        });
    };
    DashBoardComponent.prototype.sendSmsUsingtextLocal = function () {
        this._dataService.getSendSmsUsingtextLocalProcess()
            .subscribe(function (response) {
        });
    };
    DashBoardComponent.prototype.walkInModalClose = function () {
        $('#myModal').hide();
    };
    DashBoardComponent.prototype.sumbitedited_value = function (userEditData) {
        var _this = this;
        console.log('------------', JSON.stringify(userEditData));
        var _id = userEditData._id;
        /* const _stockeditedata = {
           idlogin: userEditData.idlogin,
           user_Name: userEditData.user_Name,
           password: userEditData.password,
           created_date: userEditData.created_date,
           first_Name: userEditData.first_Name,
           last_Name: userEditData.last_Name,
           sp_name: userEditData.sp_name,
         }*/
        console.log(' edited const _id', _id);
        console.log(' edited const value', userEditData);
        this._dataService.updateServiceProvider(userEditData)
            .subscribe(function (response) {
            console.log('========= ' + JSON.stringify(_this.userData));
            if (response.save === true) {
                alertify.logPosition('top right');
                alertify.success('Data Updated Successfully!!!');
                $('#myModal').hide();
                //  window.location.reload();
            }
        });
        /* this._dataService.updateUser(userEditData)
           .subscribe(response => {
             console.log('========= ' + JSON.stringify(this.userData));
             if (response.save === true) {
               alertify.logPosition('top right');
               alertify.success('Data Updated Successfully!!!' );
               this.walkInModalClose();
               window.location.reload();
             }
         });*/
    };
    DashBoardComponent.prototype.sendQuoteToUsers = function (userEditData) {
        var _this = this;
        console.log('------------', JSON.stringify(userEditData));
        var _id = userEditData._id;
        console.log(' edited const _id', _id);
        console.log(' edited const value', userEditData);
        this._dataService.sendQuoteToUsersProcess(userEditData)
            .subscribe(function (response) {
            console.log('========= ' + JSON.stringify(_this.userData));
            if (response.save === true) {
                alertify.logPosition('top right');
                alertify.success('Quotation Sent Successfully!!!');
                $('#myModal').hide();
                //  window.location.reload();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(ChildDirective),
        __metadata("design:type", ChildDirective)
    ], DashBoardComponent.prototype, "child", void 0);
    DashBoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"]])
    ], DashBoardComponent);
    return DashBoardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data-management/data-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Custom code */\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/data-management/data-management.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<div class=\"app-body clearfix\">\n  <app-sidebar>  </app-sidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">Home</li>\n      <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a></li>\n      <li class=\"breadcrumb-item active\">Data Management</li>\n\n      <!-- Breadcrumb Menu-->\n      <li class=\"breadcrumb-menu d-md-down-none\">\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group\">\n        <!--  <a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>\n          <a class=\"btn\" href=\"#\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n          <a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>-->\n        </div>\n      </li>\n    </ol>\n\n  <!--<div class=\"container-fluid\">\n    <div class=\"row\">\n\n      <div class=\"col-lg-7\">\n        <select class=\"form-control\" id=\"categoryList\"  >\n          <option value=\"Resident\">Resident</option>\n          <option value=\"Service-Provider\">Service Provider</option>\n          <option value=\"services\">Services</option>\n          <option value=\"property\">Property</option>\n        </select>\n      </div>\n      <div class=\"col-lg-2 cat_div\">\n        <button class=\"btn btn-info btn-md\" (click)=\"downloadExcel()\"> Download</button>\n      </div>\n    </div>\n  </div>-->\n    <div class=\"container-fluid\">\n        <div id=\"r_div\" class=\"upload-file\" style=\"height:100px;padding-top:15px\">\n          <div class=\"row\">\n          <div class=\"col-lg-7\">\n            <select class=\"form-control\" id=\"categoryList\"  >\n              <option value=\"Resident\">Resident</option>\n              <option value=\"Service-Provider\">Service Provider</option>\n              <option value=\"services\">Services</option>\n              <option value=\"property\">Property</option>\n            </select>\n          </div>\n          <div class=\"col-lg-2 \">\n            <button class=\"btn btn-info btn-md\" (click)=\"downloadExcel()\"> Download</button>\n          </div>\n          </div>\n        </div>\n      </div>\n\n  </main>\n</div>\n\n\n<app-footer></app-footer>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/data-management/data-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_alasql__ = __webpack_require__("../../../../alasql/dist/alasql.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_alasql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_alasql__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataManagementComponent = (function () {
    function DataManagementComponent(_dataService, _http) {
        this._dataService = _dataService;
        this._http = _http;
        this.userEditData = {};
        this.editForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            type_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            level1List: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            level2List: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            level3List: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    DataManagementComponent.prototype.ngOnInit = function () {
    };
    DataManagementComponent.prototype.downloadExcel = function () {
        //  alert($('#categoryList').val())
        this.selected_value = $('#categoryList').val();
        this._dataService.downloadExcelProcess(this.selected_value)
            .subscribe(function (response) {
            var excel_json = {};
            var excel_array = [];
            console.log('datat::::' + JSON.stringify(response));
            // const property_name = response.users_Data[0].property_name;
            // const p_name = property_name + '.xls';
            // console.log('property_name---------->' + property_name)
            var mystyle = {
                headers: true,
                column: { style: { Font: { Bold: '1' } } },
            };
            if (response.flag === 1) {
                console.log('Resident---->');
                __WEBPACK_IMPORTED_MODULE_5_alasql__('SELECT  _id AS `id`, first_name As `First Name`, last_name AS `Last Name`, phone_number AS `Phone Number`, email_id AS `Email Id` , flat_id as `Flat Id` INTO XLSXML("Resident.xls",?) FROM ?', [mystyle, response.users_Data]);
            }
            else if (response.flag === 2) {
                console.log('Service-Provider---->');
                __WEBPACK_IMPORTED_MODULE_5_alasql__('SELECT _id AS `id`, id AS ID,first_name AS `First Name`, last_name AS `Last Name`, phone_number AS `Phone Number`, email_id AS `email_id`,is_manager AS `Is Manager (only one can be the manager)`,request_types AS `Request Types` INTO XLSXML("Service-Provider.xls",?) FROM ?', [mystyle, response.users_Data]);
            }
            else if (response.flag === 3) {
                console.log('services---->');
                __WEBPACK_IMPORTED_MODULE_5_alasql__('SELECT  _id AS `id`,request_id AS `Request Ids`, service_type AS `Services Type`, level_1 AS `Level 1`, level_2 AS `Level 2`, level_3 AS `Level 3`, level_4 AS `Level 4`, sla_time  AS `Completion SLA (in hours)`, active AS `Active` INTO XLSXML("Services.xls",?) FROM ?', [mystyle, response.users_Data]);
            }
            else if (response.flag === 4) {
                console.log('property---->');
                // alasql('SELECT _id AS `id` phase_name AS Phase, tower_name AS Tower, flat_no AS Flat, room AS Rooms   INTO XLSXML("' + p_name + '",?) FROM ?', [mystyle, response.users_Data[0].flat]);
                __WEBPACK_IMPORTED_MODULE_5_alasql__('SELECT _id AS `id`, phase_name AS Phase, tower_name AS Tower, flat_no AS Flat, flat_id AS `Flat Id`,  room AS Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, response.users_Data[0].flat]);
            }
        });
    };
    DataManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-data',
            template: __webpack_require__("../../../../../src/app/data-management/data-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/data-management/data-management.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]])
    ], DataManagementComponent);
    return DataManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.uploadResident = function (formData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log('====services' + JSON.stringify(formData));
        return this._http.put('/resident/uploadResident', JSON.stringify(formData), { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.showAllUsers = function () {
        return this._http.get('/web/users')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.showIndividualServices = function () {
        return this._http.get('/web/showIndividualServiceProcess')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.showloggedRequestUsers = function () {
        return this._http.get('/web/showloggedRequestUsers')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.showEnquiredUsers = function () {
        return this._http.get('/web/showEnquiredUsers')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.showCompanyOwnerList = function () {
        return this._http.get('/web/showCompanyOwnerListProcess')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.showUserNameSessionWise = function () {
        return this._http.get('/web/showUserNameSessionWise')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.findFirstLevelOfDs = function (type_name) {
        return this._http.get('/web/findFirstLevelOfDs/' + type_name, { withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.dateWiseUser = function (date) {
        console.log('services:::' + date);
        return this._http.get('/web/userDateWiseProcess/' + date, { withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.updateUser = function (userEditData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log('====services' + JSON.stringify(userEditData));
        return this._http.put('/web/updateUser', JSON.stringify(userEditData), { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); });
        /*return this._http.get('/web/updateUser/' + userEditData , {withCredentials: true})
          .map(res => res.json());*/
    };
    DataService.prototype.showAllRequestTypesForSpecificService = function (info) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log('====services' + JSON.stringify(info));
        return this._http.put('/web/showAllRequestTypesForSpecificService', JSON.stringify(info), { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); });
        /*return this._http.get('/web/updateUser/' + userEditData , {withCredentials: true})
          .map(res => res.json());*/
    };
    DataService.prototype.updateServiceProvider = function (userEditData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log('====services' + JSON.stringify(userEditData));
        return this._http.put('/web/updateServiceProvider', JSON.stringify(userEditData), { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); });
        /*return this._http.get('/web/updateUser/' + userEditData , {withCredentials: true})
          .map(res => res.json());*/
    };
    DataService.prototype.sendQuoteToUsersProcess = function (userEditData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log('====services' + JSON.stringify(userEditData));
        return this._http.put('/web/sendQuoteToUsersProcess', JSON.stringify(userEditData), { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); });
        /*return this._http.get('/web/updateUser/' + userEditData , {withCredentials: true})
          .map(res => res.json());*/
    };
    DataService.prototype.findSecondLevelOfDs = function (level1) {
        return this._http.get('/web/findSecondLevelOfDs/' + level1, { withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.findThirdLevelOfDs = function (level3) {
        return this._http.get('/web/findThirdLevelOfDs/' + level3, { withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getSendSmsUsingMsg91Process = function () {
        console.log('services:::');
        return this._http.get('/web/sendSmsUsingMsg91')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getSendSmsUsingtextLocalProcess = function () {
        console.log('services:::');
        return this._http.get('/web/sendSmsUsingtextLocal')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.downloadExcelProcess = function (selected_value) {
        return this._http.get('/web/downloadExcelProcess/' + selected_value, { withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/enquiry/enquiry.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Raleway);", ""]);

// module
exports.push([module.i, "#cssmenu,\r\n#cssmenu ul,\r\n#cssmenu ul li,\r\n#cssmenu ul li a {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  list-style: none;\r\n  line-height: 1;\r\n  display: block;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n#cssmenu:after,\r\n#cssmenu > ul:after {\r\n  content: \".\";\r\n  display: block;\r\n  clear: both;\r\n  visibility: hidden;\r\n  line-height: 0;\r\n  height: 0;\r\n}\r\n#cssmenu {\r\n  width: auto;\r\n  border-bottom: 3px solid #47c9af;\r\n  font-family: Raleway, sans-serif;\r\n  line-height: 1;\r\n}\r\n#cssmenu ul {\r\n  background: #ffffff;\r\n}\r\n#cssmenu > ul > li {\r\n  float: left;\r\n}\r\n#cssmenu.align-center > ul {\r\n  font-size: 0;\r\n  text-align: center;\r\n}\r\n#cssmenu.align-center > ul > li {\r\n  display: inline-block;\r\n  float: none;\r\n}\r\n#cssmenu.align-right > ul > li {\r\n  float: right;\r\n}\r\n#cssmenu.align-right > ul > li > a {\r\n  margin-right: 0;\r\n  margin-left: -4px;\r\n}\r\n#cssmenu > ul > li > a {\r\n  z-index: 2;\r\n  padding: 18px 25px 12px 25px;\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n  color: #444444;\r\n  transition: all .2s ease;\r\n  margin-right: -4px;\r\n  margin-top:50px;\r\n}\r\n#cssmenu > ul > li.active > a,\r\n#cssmenu > ul > li:hover > a,\r\n#cssmenu > ul > li > a:hover {\r\n  color: #ffffff;\r\n}\r\n#cssmenu > ul > li > a:after {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  z-index: -1;\r\n  width: 100%;\r\n  height: 120%;\r\n  border-top-left-radius: 8px;\r\n  border-top-right-radius: 8px;\r\n  content: \"\";\r\n  transition: all .2s ease;\r\n  -webkit-transform: perspective(5px) rotateX(2deg);\r\n  -webkit-transform-origin: bottom;\r\n  -moz-transform: perspective(5px) rotateX(2deg);\r\n  -moz-transform-origin: bottom;\r\n  transform: perspective(5px) rotateX(2deg);\r\n  transform-origin: bottom;\r\n}\r\n#cssmenu > ul > li.active > a:after,\r\n#cssmenu > ul > li:hover > a:after,\r\n#cssmenu > ul > li > a:hover:after {\r\n  background: #47c9af;\r\n}\r\nbody {\r\n  padding: 20px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  line-height: 1.5;\r\n  font-size: 14px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.tab {\r\n  border: 1px solid #d4d4d1;\r\n  background-color: #fff;\r\n  float: inherit;\r\n\r\n  margin-bottom: 20px;\r\n  width: auto;\r\n}\r\n\r\n\r\n.tab-content {\r\n  width: 660px;\r\n  height:600px;\r\n  padding: 20px;\r\n  display: none;\r\n}\r\n\r\n\r\n#tab-1 {\r\n  display: block;\r\n}\r\n.form-style-1 {\r\n  margin:10px auto;\r\n  max-width: 400px;\r\n  padding: 20px 12px 10px 80px;\r\n  font: 13px \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;\r\n}\r\n.form-style-1 li {\r\n  padding: 0;\r\n  display: block;\r\n  list-style: none;\r\n  margin: 10px 0 0 0;\r\n}\r\n.form-style-1 label{\r\n  margin:0 0 3px 0;\r\n  padding:0px;\r\n  display:block;\r\n  font-weight: bold;\r\n}\r\n.form-style-1 input[type=text],\r\n.form-style-1 input[type=date],\r\n.form-style-1 input[type=datetime],\r\n.form-style-1 input[type=number],\r\n.form-style-1 input[type=search],\r\n.form-style-1 input[type=time],\r\n.form-style-1 input[type=url],\r\n.form-style-1 input[type=email],\r\ntextarea,\r\nselect{\r\n  box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  border:1px solid #BEBEBE;\r\n  padding: 7px;\r\n  margin:0px;\r\n  -webkit-transition: all 0.30s ease-in-out;\r\n  -moz-transition: all 0.30s ease-in-out;\r\n  -ms-transition: all 0.30s ease-in-out;\r\n  -o-transition: all 0.30s ease-in-out;\r\n  outline: none;\r\n}\r\n.form-style-1 input[type=text]:focus,\r\n.form-style-1 input[type=date]:focus,\r\n.form-style-1 input[type=datetime]:focus,\r\n.form-style-1 input[type=number]:focus,\r\n.form-style-1 input[type=search]:focus,\r\n.form-style-1 input[type=time]:focus,\r\n.form-style-1 input[type=url]:focus,\r\n.form-style-1 input[type=email]:focus,\r\n.form-style-1 textarea:focus,\r\n.form-style-1 select:focus{\r\n  box-shadow: 0 0 8px #88D5E9;\r\n  border: 1px solid #88D5E9;\r\n}\r\n.form-style-1 .field-divided{\r\n  width: 49%;\r\n}\r\n\r\n.form-style-1 .field-long{\r\n  width: 100%;\r\n}\r\n.form-style-1 .field-select{\r\n  width: 100%;\r\n}\r\n.form-style-1 .field-textarea{\r\n  height: 100px;\r\n}\r\n.form-style-1 input[type=submit], .form-style-1 input[type=button]{\r\n  background: #4B99AD;\r\n  padding: 8px 15px 8px 15px;\r\n  border: none;\r\n  color: #fff;\r\n}\r\n.form-style-1 input[type=submit]:hover, .form-style-1 input[type=button]:hover{\r\n  background: #4691A4;\r\n  box-shadow:none;\r\n  -moz-box-shadow:none;\r\n  -webkit-box-shadow:none;\r\n}\r\n.form-style-1 .required{\r\n  color:red;\r\n}\r\n#tab-1{\r\n  background:  url(" + __webpack_require__("../../../../../src/assets/e-images/melogo.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n#tab-2{\r\n  background:  url(" + __webpack_require__("../../../../../src/assets/e-images/melogo.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n#tab-3{\r\n  background:  url(" + __webpack_require__("../../../../../src/assets/e-images/melogo.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n#tab-4{\r\n  background:  url(" + __webpack_require__("../../../../../src/assets/e-images/melogo.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n#tab-5{\r\n  background:  url(" + __webpack_require__("../../../../../src/assets/e-images/melogo.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}#tab-6{\r\n   background:  url(" + __webpack_require__("../../../../../src/assets/e-images/melogo.png") + ");\r\n   background-repeat: no-repeat;\r\n   background-position: center;\r\n }\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/enquiry/enquiry.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!--border: 2px solid black;-->\r\n<div id='cssmenu'>\r\n  <ul class=\"tabs-menu\">\r\n    <li><img src=\"../../assets/e-images/melogo.png\" style=\"height:100px\"></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li class='active'><a routerLink=\"/home\">Home</a></li>\r\n    <li><a href='#tab-2'>Products</a></li>\r\n    <li><a href='#tab-3'>Company</a></li>\r\n    <li><a href='#tab-4'>Contact</a></li>\r\n    <li><a href='#tab-5'>Register</a></li>\r\n    <li><a href='#tab-6'>LogIn</a></li>\r\n  </ul>\r\n</div>\r\n<div id=\"tab-1\">\r\n  <form [formGroup]=\"enquiry_Form\">\r\n    <ul class=\"form-style-1\">\r\n      <li><label>Full Name <span class=\"required\">*</span></label>\r\n        <input type=\"text\" name=\"first_name\" formControlName=\"first_name\"  class=\"field-divided\" placeholder=\"First\" />&nbsp;<input type=\"text\" name=\"last_name\" formControlName=\"last_name\" class=\"field-divided\" placeholder=\"Last\" /></li>\r\n      <li>\r\n        <label>Email</label>\r\n        <input type=\"email\" name=\"email\" formControlName=\"email\" class=\"field-long\" />\r\n      </li>\r\n      <li>\r\n        <label>Mobile <span class=\"required\">*</span></label>\r\n        <input type=\"mobile\" formControlName=\"mobile\" name=\"field4\" class=\"field-long\" />\r\n      </li>\r\n      <li>\r\n        <label>From<span class=\"required\">*</span></label>\r\n        <select name=\"from_name\" formControlName=\"from_name\" class=\"field-select\">\r\n          <option value=\"Pune\">Pune</option>\r\n          <option value=\"Bhubaneswar\">Bhubaneswar</option>\r\n          <option value=\"Kolkatta\">Kolkatta</option>\r\n        </select>\r\n      </li>\r\n      <li>\r\n        <label>To<span class=\"required\">*</span></label>\r\n        <select name=\"to_name\" formControlName=\"to_name\" class=\"field-select\">\r\n          <option value=\"Pune\">Pune</option>\r\n          <option value=\"Bhubaneswar\">Bhubaneswar</option>\r\n          <option value=\"Kolkatta\">Kolkatta</option>\r\n        </select>\r\n      </li>\r\n\r\n      <li>\r\n        <input type=\"submit\" value=\"Submit\"  (click)=\"enquiry_data()\"/>\r\n      </li>\r\n    </ul>\r\n  </form>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/enquiry/enquiry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnquiryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var alertify = __webpack_require__("../../../../alertify.js/dist/js/alertify.js");

var EnquiryComponent = (function () {
    function EnquiryComponent(_dataService, authService, _http, router) {
        this._dataService = _dataService;
        this.authService = authService;
        this._http = _http;
        this.router = router;
        this.stockistdata = {};
        this.loginData = {};
        this.otpData = {};
        this.stockistForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            med_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            phone_number: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.otpForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            otp_text: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.phone_number = {};
        this.enquiry_Form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            first_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            last_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            mobile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            from_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            to_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            aadhar: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    EnquiryComponent.prototype.ngOnInit = function () {
        this.auth_verified = this.authService.useJwtHelper();
        // const auth_verified = this.authService.useJwtHelper();
        console.log('auth_verified:::::' + this.auth_verified);
        if (this.auth_verified) {
            // console.log('moved to dashboard page.....')
            this.router.navigateByUrl('/dashboard');
        }
    };
    EnquiryComponent.prototype.clickedUser = function () {
        var get_phone = $('#phone_number').val();
        // console.log('******' + get_phone);
        var filter = /^[0-9]*$/;
        if (!filter.test(get_phone)) {
            swal('Oops...', 'Please enter numbers only', 'error');
            return false;
        }
        else {
            if (get_phone === '' || get_phone === undefined || get_phone === null) {
                swal('Oops...', 'Please enter Your Phone Number First', 'error');
            }
            else {
                this.phone_number = $('#phone_number').val();
                this.loginData = this.loginForm.value;
                console.log(this.phone_number);
                $('.otp_form').show();
                $('.resent_otp_form').show();
                console.log('>>>>>>>>>>>>>>>>>>>>>>>' + this.phone_number);
                this.authService.verifyUsers(this.phone_number)
                    .subscribe(function (response) {
                    if (response.save === false) {
                        $('.otp_form').hide();
                        $('.resent_otp_form').hide();
                        swal('Oops...', response.message, 'error');
                    }
                });
            }
        }
        // this.router.navigateByUrl('/sidebar');
    };
    EnquiryComponent.prototype.otpVerification = function () {
        var _this = this;
        var otp = $('#otp').val();
        console.log('******' + otp + this.phone_number);
        this.otpData = this.otpForm.value;
        //  console.log('=============' + JSON.stringify(this.otpData))
        this.authService.verifyOtp(otp, this.phone_number)
            .subscribe(function (response) {
            console.log('-------------------->' + JSON.stringify(response));
            _this.response = response;
            if (response.save === true) {
                localStorage.apiToken = response.token;
                // alertify.logPosition('top right');
                //  alertify.success('Authenticated');
                swal({
                    text: 'Authenticated',
                    timer: 1000,
                    type: 'success'
                });
                _this.router.navigateByUrl('/dashboard');
                // window.location.reload();
            }
            if (response.save === false) {
                swal('Oops...', response.message, 'error');
                _this.router.navigateByUrl('/');
            }
        });
    };
    EnquiryComponent.prototype.coolForm = function () {
        this.stockistdata = this.stockistForm.value;
        // console.log('>>>>>>>>>>>>>' + JSON.stringify(this.stockistdata));
    };
    EnquiryComponent.prototype.reSendOTP = function () {
        // alert('resend OTP clicked!!!' + this.phone_number);
        this.authService.verifyUsers(this.phone_number)
            .subscribe(function (response) {
            if (response.save === false) {
                swal('Oops...', response.message, 'error');
            }
            if (response.save === true) {
                alertify.logPosition('top right');
                alertify.success('OTP has been sent again.');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EnquiryComponent.prototype, "inputModel", void 0);
    EnquiryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-enquiry',
            template: __webpack_require__("../../../../../src/app/enquiry/enquiry.component.html"),
            styles: [__webpack_require__("../../../../../src/app/enquiry/enquiry.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], EnquiryComponent);
    return EnquiryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Custom code */\r\n\r\n\r\n.content-data {float: left; width: 100%}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <footer class=\"app-footer\">\r\n  <!--  <span><a href=\"#\">Hub Control</a> &copy; 2018</span>-->\r\n    <span class=\"ml-auto rob\" >Powered by <a href=\"https://ec2-13-126-184-97.ap-south-1.compute.amazonaws.com/\" class=\"rob\" target=\"_blank\">MovEasy</a> &copy; 2018</span>\r\n  </footer>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FooterComponent = (function () {
    function FooterComponent(_dataService, _http, router) {
        var _this = this;
        this._dataService = _dataService;
        this._http = _http;
        this.router = router;
        this.userData = [];
        this.level_1 = [];
        this.level_2 = [];
        this.type = [];
        this.type_name = {};
        this.level2 = {};
        this.level3 = {};
        this.level1 = {};
        this.usersData = [];
        this.userform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            type_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            level1: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            level2: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            level3: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["b" /* Subject */]();
        this.dtOptions = {};
        this._dataService.showIndividualServices()
            .subscribe(function (response) {
            console.log(JSON.stringify(response));
            // console.log(JSON.stringify(response[0].daily_service_info));
            console.dir(response);
            _this.userData = response;
            console.log(response.length);
        });
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.findL1OfDs = function () {
        var _this = this;
        alert('1' + $('#type_name').val());
        this.type_name = $('#type_name').val();
        this._dataService.findFirstLevelOfDs(this.type_name)
            .subscribe(function (response) {
            console.log(JSON.stringify(response));
            _this.type = response;
        });
    };
    FooterComponent.prototype.findL2OfDs = function () {
        var _this = this;
        alert('2' + $('#level1').val());
        this.level2 = $('#level1').val();
        this._dataService.findSecondLevelOfDs(this.level2)
            .subscribe(function (response) {
            console.log(JSON.stringify(response));
            _this.level_1 = response;
        });
    };
    FooterComponent.prototype.findL3OfDs = function () {
        var _this = this;
        alert('3' + $('#level2').val());
        this.level3 = $('#level2').val();
        this._dataService.findThirdLevelOfDs(this.level3)
            .subscribe(function (response) {
            console.log(JSON.stringify(response));
            _this.level_2 = response;
        });
    };
    FooterComponent.prototype.onSubmitData = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FooterComponent.prototype, "inputModel", void 0);
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Custom code */\r\n\r\n.mid-content {\r\n  width: 70%;\r\n  padding: 5% 10%;\r\n}\r\n.sidebar {float:left;width:15%}\r\n.mid-content h3 {}\r\n.content-data {float: left; width: 84%;}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n\r\n<div class=\"content-data\">\r\n\r\n  <header class=\"container-fluid text-center \" style=\"background-color: #A9A9A9;height: 50px\">\r\n    <div class=\"pull-right\">\r\n      <ul class=\"nav pull-right\">\r\n        <li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Welcome, {{userSessionName}} <b class=\"caret\"></b></a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a href=\"\"><i class=\"icon-cog\"></i> Preferences</a></li>\r\n            <li><a href=\"\"><i class=\"icon-envelope\"></i> Contact Support</a></li>\r\n            <li class=\"divider\"></li>\r\n            <li><a routerLink=\"/logout\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </header>\r\n\r\n\r\n</div>\r\n-->\r\n\r\n<header class=\"app-header navbar\">\r\n <!-- <button class=\"navbar-toggler mobile-sidebar-toggler d-lg-none mr-auto\" type=\"button\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>-->\r\n  <a class=\"navbar-brand\" href=\"#\"></a>\r\n  <!--<button class=\"navbar-toggler sidebar-toggler d-md-down-none\" type=\"button\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n-->\r\n  <!--<ul class=\"nav navbar-nav d-md-down-none\">\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" href=\"#\">Dashboard</a>\r\n    </li>\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" href=\"#\">Users</a>\r\n    </li>\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" href=\"#\">Settings</a>\r\n    </li>\r\n  </ul>-->\r\n\r\n  <ul class=\"nav navbar-nav ml-auto\">\r\n    <li class=\"nav-item d-md-down-none displaynone\">\r\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-bell\"></i><span class=\"badge badge-pill badge-danger\">5</span></a>\r\n    </li>\r\n    <li class=\"nav-item d-md-down-none displaynone\">\r\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-list\"></i></a>\r\n    </li>\r\n    <li class=\"nav-item d-md-down-none displaynone\">\r\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-location-pin\"></i></a>\r\n    </li>\r\n    <li class=\"nav-item dropdown\">\r\n      <a class=\"nav-link dropdown-toggle nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <img src=\"\" class=\"img-avatar\">\r\n        <span class=\"d-md-down-none rob\" style=\"font-weight: 600;color: #000000\">{{userSessionName}}</span>\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right\">\r\n        <!--<div class=\"dropdown-header text-center\">\r\n          <strong>Account</strong>\r\n        </div>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Updates<span class=\"badge badge-info\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"badge badge-success\">42</span></a>-->\r\n       <!-- <div class=\"dropdown-header text-center\">\r\n          <strong></strong>\r\n        </div>-->\r\n        <!--<a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Settings</a>-->\r\n        <div class=\"divider\"></div>\r\n        <a class=\"dropdown-item rob\" routerLink=\"/logout\"><i class=\"fa fa-sign-out\"></i> Logout</a>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n  <button class=\"navbar-toggler aside-menu-toggler\" style=\"display: none;\" type=\"button\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n</header>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeaderComponent = (function () {
    function HeaderComponent(_dataService, _http, router) {
        var _this = this;
        this._dataService = _dataService;
        this._http = _http;
        this.router = router;
        this.userData = [];
        this.level_1 = [];
        this.level_2 = [];
        this.type = [];
        this.type_name = {};
        this.level2 = {};
        this.level3 = {};
        this.level1 = {};
        this.usersData = [];
        this.userform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            type_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            level1: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            level2: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            level3: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.propertyName = [];
        this.userName = [];
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["b" /* Subject */]();
        this.dtOptions = {};
        /* this._dataService.showIndividualServices()
           .subscribe(response => {
             console.log(JSON.stringify(response));
            // console.log(JSON.stringify(response[0].daily_service_info));
             console.dir(response);
             this.userData = response;
             console.log(response.length);
           });*/
        this._dataService.showUserNameSessionWise()
            .subscribe(function (response) {
            console.log('>>>>>>>>>>>>>>' + JSON.stringify(response));
            _this.userSessionName = response.user_name[0].movers_first_name + ' ' + response.user_name[0].movers_last_name;
            var time = new Date();
            console.log('time::::::' + time);
            var loginTime = time.toString();
            console.log('time::::::' + _this.userSessionTime);
            var fTime = loginTime.split('GMT+0530 (India Standard Time)')[0];
            _this.userSessionTime = fTime;
            console.log('userSessionName>>>>>>>>>>>>>>' + JSON.stringify(_this.userSessionName));
            console.log('response.property_name>>>>>>>>>>>>>' + JSON.stringify(response.property_name[0].property_name));
            _this.propertyName = response.property_name[0].property_name;
            console.log('==========>' + JSON.stringify(_this.propertyName));
            // this.dtTrigger.next();
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onSubmitData = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "inputModel", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Raleway);", ""]);

// module
exports.push([module.i, "#cssmenu,\r\n#cssmenu ul,\r\n#cssmenu ul li,\r\n#cssmenu ul li a {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  list-style: none;\r\n  line-height: 1;\r\n  display: block;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n#cssmenu:after,\r\n#cssmenu > ul:after {\r\n  content: \".\";\r\n  display: block;\r\n  clear: both;\r\n  visibility: hidden;\r\n  line-height: 0;\r\n  height: 0;\r\n}\r\n#cssmenu {\r\n  width: auto;\r\n  border-bottom: 3px solid #47c9af;\r\n  font-family: Raleway, sans-serif;\r\n  line-height: 1;\r\n}\r\n#cssmenu ul {\r\n  background: #ffffff;\r\n}\r\n#cssmenu > ul > li {\r\n  float: left;\r\n}\r\n#cssmenu.align-center > ul {\r\n  font-size: 0;\r\n  text-align: center;\r\n}\r\n#cssmenu.align-center > ul > li {\r\n  display: inline-block;\r\n  float: none;\r\n}\r\n#cssmenu.align-right > ul > li {\r\n  float: right;\r\n}\r\n#cssmenu.align-right > ul > li > a {\r\n  margin-right: 0;\r\n  margin-left: -4px;\r\n}\r\n#cssmenu > ul > li > a {\r\n  z-index: 2;\r\n  padding: 18px 25px 12px 25px;\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n  color: #444444;\r\n  transition: all .2s ease;\r\n  margin-right: -4px;\r\n  margin-top:50px;\r\n}\r\n#cssmenu > ul > li.active > a,\r\n#cssmenu > ul > li:hover > a,\r\n#cssmenu > ul > li > a:hover {\r\n  color: #ffffff;\r\n}\r\n#cssmenu > ul > li > a:after {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  z-index: -1;\r\n  width: 100%;\r\n  height: 120%;\r\n  border-top-left-radius: 8px;\r\n  border-top-right-radius: 8px;\r\n  content: \"\";\r\n  transition: all .2s ease;\r\n  -webkit-transform: perspective(5px) rotateX(2deg);\r\n  -webkit-transform-origin: bottom;\r\n  -moz-transform: perspective(5px) rotateX(2deg);\r\n  -moz-transform-origin: bottom;\r\n  transform: perspective(5px) rotateX(2deg);\r\n  transform-origin: bottom;\r\n}\r\n#cssmenu > ul > li.active > a:after,\r\n#cssmenu > ul > li:hover > a:after,\r\n#cssmenu > ul > li > a:hover:after {\r\n  background: #47c9af;\r\n}\r\nbody {\r\n  padding: 20px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  line-height: 1.5;\r\n  font-size: 14px;\r\n}\r\n\r\n.tab {\r\n  border: 1px solid #d4d4d1;\r\n  background-color: #fff;\r\n  float: none;\r\n\r\n  margin-bottom: 20px;\r\n  width: auto;\r\n}\r\n\r\n\r\n.tab-content {\r\n  width: 660px;\r\n  height:600px;\r\n  padding: 20px;\r\n  display: none;\r\n}\r\n\r\n\r\n#tab-1 {\r\n  display: block;\r\n}\r\n.form-style-1 {\r\n  margin:10px auto;\r\n  max-width: 400px;\r\n  padding: 20px 12px 10px 80px;\r\n  font: 13px \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;\r\n}\r\n.form-style-1 li {\r\n  padding: 0;\r\n  display: block;\r\n  list-style: none;\r\n  margin: 10px 0 0 0;\r\n}\r\n.form-style-1 label{\r\n  margin:0 0 3px 0;\r\n  padding:0px;\r\n  display:block;\r\n  font-weight: bold;\r\n}\r\n.form-style-1 input[type=text],\r\n.form-style-1 input[type=date],\r\n.form-style-1 input[type=datetime],\r\n.form-style-1 input[type=number],\r\n.form-style-1 input[type=search],\r\n.form-style-1 input[type=time],\r\n.form-style-1 input[type=url],\r\n.form-style-1 input[type=email],\r\ntextarea,\r\nselect{\r\n  box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  border:1px solid #BEBEBE;\r\n  padding: 7px;\r\n  margin:0px;\r\n  -webkit-transition: all 0.30s ease-in-out;\r\n  -moz-transition: all 0.30s ease-in-out;\r\n  -ms-transition: all 0.30s ease-in-out;\r\n  -o-transition: all 0.30s ease-in-out;\r\n  outline: none;\r\n}\r\n.form-style-1 input[type=text]:focus,\r\n.form-style-1 input[type=date]:focus,\r\n.form-style-1 input[type=datetime]:focus,\r\n.form-style-1 input[type=number]:focus,\r\n.form-style-1 input[type=search]:focus,\r\n.form-style-1 input[type=time]:focus,\r\n.form-style-1 input[type=url]:focus,\r\n.form-style-1 input[type=email]:focus,\r\n.form-style-1 textarea:focus,\r\n.form-style-1 select:focus{\r\n  box-shadow: 0 0 8px #88D5E9;\r\n  border: 1px solid #88D5E9;\r\n}\r\n.form-style-1 .field-divided{\r\n  width: 49%;\r\n}\r\n\r\n.form-style-1 .field-long{\r\n  width: 100%;\r\n}\r\n.form-style-1 .field-select{\r\n  width: 100%;\r\n}\r\n.form-style-1 .field-textarea{\r\n  height: 100px;\r\n}\r\n.form-style-1 input[type=submit], .form-style-1 input[type=button]{\r\n  background: #4B99AD;\r\n  padding: 8px 15px 8px 15px;\r\n  border: none;\r\n  color: #fff;\r\n}\r\n.form-style-1 input[type=submit]:hover, .form-style-1 input[type=button]:hover{\r\n  background: #4691A4;\r\n  box-shadow:none;\r\n  -moz-box-shadow:none;\r\n  -webkit-box-shadow:none;\r\n}\r\n.form-style-1 .required{\r\n  color:red;\r\n}\r\n\r\n/* Latest compiled and minified CSS included as External Resource*/\r\n\r\n/* Optional theme */\r\n\r\n/*@import url('//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-theme.min.css');*/\r\nbody {\r\n  margin-top:30px;\r\n}\r\n.stepwizard-step p {\r\n  margin-top: 0px;\r\n  color:#666;\r\n}\r\n.stepwizard-row {\r\n  display: table-row;\r\n}\r\n.stepwizard {\r\n  display: table;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n.stepwizard-step button[disabled] {\r\n  /*opacity: 1 !important;\r\n  filter: alpha(opacity=100) !important;*/\r\n}\r\n.stepwizard .btn.disabled, .stepwizard .btn[disabled], .stepwizard fieldset[disabled] .btn {\r\n  opacity:1 !important;\r\n  color:#bbb;\r\n}\r\n.stepwizard-row:before {\r\n  top: 14px;\r\n  bottom: 0;\r\n  position: absolute;\r\n  content:\" \";\r\n  width: 100%;\r\n  height: 1px;\r\n  background-color: #ccc;\r\n  z-index: 0;\r\n}\r\n.stepwizard-step {\r\n  display: table-cell;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n.btn-circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  text-align: center;\r\n  padding: 6px 0;\r\n  font-size: 12px;\r\n  line-height: 1.428571429;\r\n  border-radius: 15px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <meta charset='utf-8'>\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" href=\"styles.css\">\r\n  <script src=\"http://code.jquery.com/jquery-latest.min.js\" type=\"text/javascript\"></script>\r\n  <script src=\"script.js\"></script>\r\n  <title>CSS MenuMaker</title>\r\n\r\n\r\n<div id='cssmenu'>\r\n  <ul class=\"tabs-menu\">\r\n    <li><img src=\"../../assets/e-images/melogo.png\" style=\"height:100px\"></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li class='active'><a href='#tab-1'>Home</a></li>\r\n    <li><a href='#tab-2'>Products</a></li>\r\n    <li><a href='#tab-3'>Enquiry</a></li>\r\n    <li><a href='#tab-4'>Contact</a></li>\r\n    <li><a href='#tab-5'>Register</a></li>\r\n    <li><a href='#tab-6'>LogIn</a></li>\r\n  </ul>\r\n</div>\r\n\r\n      <div class=\"tab\">\r\n        <div id=\"tab-1\" class=\"tab-content\">\r\n          <b><u>Listed Logistics:</u></b>\r\n          <ul *ngFor=\"let user of listedOwner; let i = index;\">\r\n            <li style=\"color: darkcyan\">{{i+1}} | {{user.movers_company}}</li>\r\n\r\n          </ul>\r\n\r\n        </div>\r\n        <div id=\"tab-2\" class=\"tab-content\">\r\n\r\n            <!--<div class=\"container\">\r\n              <div class=\"board\">\r\n                &lt;!&ndash; Navigation Area (Circular Tabs) &ndash;&gt;\r\n                <msw-navbar></msw-navbar>\r\n                &lt;!&ndash; End Navigation Area (Circular Tabs) &ndash;&gt;\r\n\r\n                &lt;!&ndash; Content Area &ndash;&gt;\r\n                <div class=\"tab\">\r\n                  &lt;!&ndash; Routed view  &ndash;&gt;\r\n                  <router-outlet></router-outlet>\r\n                </div>\r\n                &lt;!&ndash; End Content Area &ndash;&gt;\r\n              </div>\r\n\r\n              &lt;!&ndash; For Debugging: show our formData as it is being typed &ndash;&gt;\r\n            </div>-->\r\n        </div>\r\n        <div id=\"tab-3\" class=\"tab-content\">\r\n          <form [formGroup]=\"enquiry_Form\">\r\n            <ul class=\"form-style-1\">\r\n              <li><label>Full Name <span class=\"required\">*</span></label>\r\n                <input type=\"text\" name=\"first_name\" formControlName=\"first_name\"  class=\"field-divided\" placeholder=\"First\" />&nbsp;<input type=\"text\" name=\"last_name\" formControlName=\"last_name\" class=\"field-divided\" placeholder=\"Last\" /></li>\r\n              <li>\r\n                <label>Email</label>\r\n                <input type=\"email\" name=\"email\" formControlName=\"email\" class=\"field-long\" />\r\n              </li>\r\n              <li>\r\n                <label>Mobile <span class=\"required\">*</span></label>\r\n                <input type=\"mobile\" formControlName=\"mobile\" name=\"field4\" class=\"field-long\" />\r\n              </li>\r\n              <li>\r\n                <label>From<span class=\"required\">*</span></label>\r\n                <select name=\"from_name\" formControlName=\"from_name\" class=\"field-select\">\r\n                  <option value=\"Pune\">Pune</option>\r\n                  <option value=\"Bhubaneswar\">Bhubaneswar</option>\r\n                  <option value=\"Kolkatta\">Kolkatta</option>\r\n                </select>\r\n              </li>\r\n              <li>\r\n                <label>To<span class=\"required\">*</span></label>\r\n                <select name=\"to_name\" formControlName=\"to_name\" class=\"field-select\">\r\n                  <option value=\"Pune\">Pune</option>\r\n                  <option value=\"Bhubaneswar\">Bhubaneswar</option>\r\n                  <option value=\"Kolkatta\">Kolkatta</option>\r\n                </select>\r\n              </li>\r\n\r\n              <li>\r\n                <input type=\"submit\" value=\"Submit\"  (click)=\"enquiry_data()\"/>\r\n              </li>\r\n            </ul>\r\n          </form>\r\n        </div>\r\n        <div id=\"tab-4\" class=\"tab-content\">\r\n          <div class=\"container\">\r\n            <div class=\"stepwizard\">\r\n              <div class=\"stepwizard-row setup-panel\">\r\n                <div class=\"stepwizard-step col-xs-3\">\r\n                  <a href=\"#step-1\" type=\"button\" class=\"btn btn-success btn-circle\">1</a>\r\n                  <p><small>Name Details</small></p>\r\n                </div>\r\n                <div class=\"stepwizard-step col-xs-3\">\r\n                  <a href=\"#step-2\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">2</a>\r\n                  <p><small>Personal Details</small></p>\r\n                </div>\r\n                <div class=\"stepwizard-step col-xs-3\">\r\n                  <a href=\"#step-3\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">3</a>\r\n                  <p><small>Destination Details</small></p>\r\n                </div>\r\n                <div class=\"stepwizard-step col-xs-3\">\r\n                  <a href=\"#step-4\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">4</a>\r\n                  <p><small>Optional Details</small></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <form role=\"form\" [formGroup]=\"enquiry_Form\">\r\n              <div class=\"panel panel-primary setup-content\" id=\"step-1\">\r\n                <div class=\"panel-heading\">\r\n                  <h3 class=\"panel-title\">Name Details</h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\">First Name</label>\r\n                    <input maxlength=\"100\" type=\"text\" name=\"first_name\" formControlName=\"first_name\" required=\"required\" class=\"form-control\" placeholder=\"Enter First Name\" />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\">Last Name</label>\r\n                    <input maxlength=\"100\" type=\"text\" name=\"last_name\" formControlName=\"last_name\" required=\"required\" class=\"form-control\" placeholder=\"Enter Last Name\" />\r\n                  </div>\r\n                  <button class=\"btn btn-primary nextBtn pull-right\" type=\"button\">Next</button>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"panel panel-primary setup-content\" id=\"step-2\">\r\n                <div class=\"panel-heading\">\r\n                  <h3 class=\"panel-title\">Personal Details</h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\">Email</label>\r\n                    <input type=\"email\" name=\"email\" formControlName=\"email\" required=\"required\" class=\"form-control\"  />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\">Mobile</label>\r\n                    <input type=\"mobile\" formControlName=\"mobile\" required=\"required\" class=\"form-control\"  />\r\n                  </div>\r\n                  <button class=\"btn btn-primary nextBtn pull-right\" type=\"button\">Next</button>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"panel panel-primary setup-content\" id=\"step-3\">\r\n                <div class=\"panel-heading\">\r\n                  <h3 class=\"panel-title\">Destination Details</h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\">From</label>\r\n                    <select name=\"from_name\" formControlName=\"from_name\" class=\"form-control\">\r\n                      <option value=\"Pune\">Pune</option>\r\n                      <option value=\"Bhubaneswar\">Bhubaneswar</option>\r\n                      <option value=\"Kolkatta\">Kolkatta</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\">To</label>\r\n                    <select name=\"to_name\" formControlName=\"to_name\" class=\"form-control\">\r\n                      <option value=\"Pune\">Pune</option>\r\n                      <option value=\"Bhubaneswar\">Bhubaneswar</option>\r\n                      <option value=\"Kolkatta\">Kolkatta</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\">Date</label>\r\n                    <input type=\"date\" formControlName=\"pick_up_date\" required=\"required\" class=\"form-control\"  />\r\n                  </div>\r\n                  <button class=\"btn btn-primary nextBtn pull-right\" type=\"button\">Next</button>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"panel panel-primary setup-content\" id=\"step-4\">\r\n                <div class=\"panel-heading\">\r\n                  <h3 class=\"panel-title\">Optional Details</h3>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\">Check Your Necessary Belongings</label><br>\r\n                    <select id=\"second\" formControlName=\"list_item\" data-placeholder=\"Choose a Country...\" class=\"chosen-select\" multiple style=\"width:350px;\" tabindex=\"4\">\r\n                      <option value=\"\"></option>\r\n                      <option value=\"TV\">TV</option>\r\n                      <option value=\"Fridge\">Fridge</option>\r\n                      <option value=\"Washing Machine\">Washing Machine</option>\r\n                      <option value=\"Godej\">Godej</option>\r\n                      <option value=\"Computer\">Computer</option>\r\n                      <option value=\"Table\">Table</option>\r\n                      <option value=\"Chair\">Chair</option>\r\n                      <option value=\"Gadda\">Gadda</option>\r\n                      <option value=\"Sofa set\">Sofa set</option>\r\n                    </select>\r\n                  </div>\r\n\r\n                  <button class=\"btn btn-success pull-right\" type=\"submit\" (click)=\"enquiry_data()\">Finish!</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n\r\n        </div>\r\n        <div id=\"tab-5\" class=\"tab-content\">\r\n          <div class=\"container\">\r\n            <div class=\"stepwizard\">\r\n              <div class=\"stepwizard-row setup-panel\">\r\n                <div class=\"stepwizard-step col-xs-3\">\r\n                  <a href=\"#step-11\" type=\"button\" class=\"btn btn-success btn-circle\">1</a>\r\n                  <p><small>Name Details</small></p>\r\n                </div>\r\n                <div class=\"stepwizard-step col-xs-3\">\r\n                  <a href=\"#step-22\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">2</a>\r\n                  <p><small>Personal Details</small></p>\r\n                </div>\r\n                <div class=\"stepwizard-step col-xs-3\">\r\n                  <a href=\"#step-33\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">3</a>\r\n                  <p><small>Aadhar Details</small></p>\r\n                </div>\r\n                <div class=\"stepwizard-step col-xs-3\">\r\n                  <a href=\"#step-44\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">4</a>\r\n                  <p><small>Company Details</small></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <form role=\"form\" [formGroup]=\"movers_Form\">\r\n            <div class=\"panel panel-primary setup-content\" id=\"step-11\">\r\n              <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">Name Details</h3>\r\n              </div>\r\n              <div class=\"panel-body\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label\">First Name</label>\r\n                  <input maxlength=\"100\" type=\"text\" name=\"first_name\" formControlName=\"movers_first_name\" required=\"required\" class=\"form-control\" placeholder=\"Enter First Name\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label\">Last Name</label>\r\n                  <input maxlength=\"100\" type=\"text\" name=\"last_name\" formControlName=\"movers_last_name\" required=\"required\" class=\"form-control\" placeholder=\"Enter Last Name\" />\r\n                </div>\r\n                <button class=\"btn btn-primary nextBtn pull-right\" type=\"button\">Next</button>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"panel panel-primary setup-content\" id=\"step-22\">\r\n              <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">Personal Details</h3>\r\n              </div>\r\n              <div class=\"panel-body\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label\">Email</label>\r\n                  <input type=\"email\" name=\"email\" formControlName=\"movers_email\" required=\"required\" class=\"form-control\"  />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label\">Mobile</label>\r\n                  <input type=\"mobile\" formControlName=\"movers_mobile\" required=\"required\" class=\"form-control\"  />\r\n                </div>\r\n                <button class=\"btn btn-primary nextBtn pull-right\" type=\"button\">Next</button>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"panel panel-primary setup-content\" id=\"step-33\">\r\n              <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">Aadhar Details</h3>\r\n              </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label\">Aadhar</label>\r\n                  <input type=\"text\" formControlName=\"movers_aadhar\" required=\"required\" class=\"form-control\"  />\r\n                </div>\r\n                <button class=\"btn btn-primary nextBtn pull-right\" type=\"button\" (click)=\"movers_enquiry_data_aadhar_validate()\">Next</button>\r\n              </div>\r\n\r\n\r\n            <div class=\"panel panel-primary setup-content\" id=\"step-44\">\r\n              <div class=\"panel-heading\">\r\n                <h3 class=\"panel-title\">Company Details</h3>\r\n              </div>\r\n              <div class=\"panel-body\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label\">Company</label><br>\r\n                  <input type=\"movers_company\" formControlName=\"movers_company\" name=\"movers_company\" class=\"form-control\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"control-label\">Address</label><br>\r\n                  <textarea formControlName=\"movers_address\" name=\"movers_address\" class=\"form-control\" ></textarea>\r\n                </div>\r\n                <button class=\"btn btn-success pull-right\" type=\"submit\" (click)=\"movers_enquiry_data()\">Finish!</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          </div>\r\n          <!--<form [formGroup]=\"movers_Form\">\r\n          <ul class=\"form-style-1\">\r\n            <li><label>Full Name <span class=\"required\">*</span></label>\r\n              <input type=\"text\" name=\"movers_first_name\" formControlName=\"movers_first_name\"  class=\"field-divided\" placeholder=\"First\" />&nbsp;<input type=\"text\" name=\"movers_last_name\" formControlName=\"movers_last_name\" class=\"field-divided\" placeholder=\"Last\" /></li>\r\n            <li>\r\n              <label>Email</label>\r\n              <input type=\"movers_email\" name=\"movers_email\" formControlName=\"movers_email\" class=\"field-long\" />\r\n            </li>\r\n            <li>\r\n              <label>Mobile <span class=\"required\">*</span></label>\r\n              <input type=\"movers_mobile\" formControlName=\"movers_mobile\" name=\"movers_mobile\" class=\"field-long\" />\r\n            </li>\r\n            <li>\r\n              <label>Aadhar  No:<span class=\"required\">*</span></label>\r\n              <input type=\"movers_aadhar\" formControlName=\"movers_aadhar\" name=\"movers_aadhar\" class=\"field-long\" />\r\n            </li>\r\n            <li>\r\n              <label>Company Name:<span class=\"required\">*</span></label>\r\n              <input type=\"movers_company\" formControlName=\"movers_company\" name=\"movers_company\" class=\"field-long\" />\r\n            </li>\r\n            <li>\r\n              <label>Address:<span class=\"required\">*</span></label>\r\n              <textarea formControlName=\"movers_address\" name=\"movers_address\" class=\"field-long\" ></textarea>\r\n            </li>\r\n            <li>\r\n              <input type=\"submit\" value=\"Submit\"  (click)=\"movers_enquiry_data()\"/>\r\n            </li>\r\n          </ul>\r\n        </form>-->\r\n        </div>\r\n        <div id=\"tab-6\" class=\"tab-content\">\r\n              <div class=\"send_otp_div\">\r\n                <form [formGroup]=\"loginForm\" class=\"login_form\" (submit)=\"clickedUser()\" >\r\n                  <div>\r\n                    <input type=\"text\" id=\"phone_number\" required=\"10\" formControlName=\"phone_number\" class=\"form-control\" maxlength=\"10\" style=\"width:300px;display: inline \" placeholder=\"Enter Phone Number\">\r\n                    <button class=\"btn btn-success\" style=\"display: inline;vertical-align: top;\" type=\"submit\">Send</button>\r\n\r\n                  </div>\r\n                </form>\r\n              </div>\r\n              <div class=\"otp_form\">\r\n                <form [formGroup]=\"otpForm\" class=\"otp_form\" style=\"display: none\" (submit)=\"otpVerification()\">\r\n\r\n                  <input type=\"text\" id=\"otp\"  maxlength=\"4\" class=\"form-control\"  formControlName=\"otp_text\" style=\"width:300px;display: inline \" placeholder=\"Enter OTP Number\">\r\n                  <button class=\"btn btn-success\"  type=\"submit\" style=\"vertical-align: top;\" >Next</button>\r\n\r\n                </form>\r\n                <form class=\"resent_otp_form\" style=\"display: none;\">\r\n                  <u><a href=\"#\"  (click)=\"reSendOTP()\" style=\"color: orangered\">Have not received the OTP yet?</a></u>\r\n                </form>\r\n              </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<script>\r\n\r\n</script>\r\n"

/***/ }),

/***/ "../../../../../src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__multi_wizard_data_formData_service__ = __webpack_require__("../../../../../src/app/multi-wizard/data/formData.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var alertify = __webpack_require__("../../../../alertify.js/dist/js/alertify.js");


var IndexComponent = (function () {
    function IndexComponent(_dataService, authService, _http, router, formDataService, spinnerService) {
        var _this = this;
        this._dataService = _dataService;
        this.authService = authService;
        this._http = _http;
        this.router = router;
        this.formDataService = formDataService;
        this.spinnerService = spinnerService;
        this.title = 'Multi-Step Wizard';
        this.stockistdata = {};
        this.loginData = {};
        this.otpData = {};
        this.stockistForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            med_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            phone_number: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.otpForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            otp_text: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.enquiry_Form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            first_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            last_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            mobile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            from_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            to_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            list_item: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            pick_up_date: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.movers_Form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            movers_first_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            movers_last_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            movers_email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            movers_mobile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            movers_aadhar: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            movers_company: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            movers_address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.phone_number = {};
        this.listedOwner = [];
        this._dataService.showCompanyOwnerList()
            .subscribe(function (response) {
            console.dir(response);
            _this.listedOwner = response;
        });
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.auth_verified = this.authService.useJwtHelper();
        // const auth_verified = this.authService.useJwtHelper();
        console.log('auth_verified:::::' + this.auth_verified);
        if (this.auth_verified) {
            // console.log('moved to dashboard page.....')
            this.router.navigateByUrl('/dashboard');
        }
        this.formData = this.formDataService.getFormData();
        console.log(this.title + ' loaded!');
    };
    IndexComponent.prototype.clickedUser = function () {
        var get_phone = $('#phone_number').val();
        // console.log('******' + get_phone);
        var filter = /^[0-9]*$/;
        if (!filter.test(get_phone)) {
            swal('Oops...', 'Please enter numbers only', 'error');
            return false;
        }
        else {
            if (get_phone === '' || get_phone === undefined || get_phone === null) {
                swal('Oops...', 'Please enter Your Phone Number First', 'error');
            }
            else {
                this.phone_number = $('#phone_number').val();
                this.loginData = this.loginForm.value;
                console.log(this.phone_number);
                $('.otp_form').show();
                $('.resent_otp_form').show();
                console.log('>>>>>>>>>>>>>>>>>>>>>>>' + this.phone_number);
                this.authService.verifyUsers(this.phone_number)
                    .subscribe(function (response) {
                    if (response.save === false) {
                        $('.otp_form').hide();
                        $('.resent_otp_form').hide();
                        swal('Oops...', response.message, 'error');
                    }
                });
            }
        }
        // this.router.navigateByUrl('/sidebar');
    };
    IndexComponent.prototype.otpVerification = function () {
        var _this = this;
        var otp = $('#otp').val();
        console.log('******' + otp + this.phone_number);
        this.otpData = this.otpForm.value;
        //  console.log('=============' + JSON.stringify(this.otpData))
        this.authService.verifyOtp(otp, this.phone_number)
            .subscribe(function (response) {
            console.log('-------------------->' + JSON.stringify(response));
            _this.response = response;
            if (response.save === true) {
                localStorage.apiToken = response.token;
                // alertify.logPosition('top right');
                //  alertify.success('Authenticated');
                swal({
                    text: 'Authenticated',
                    timer: 1000,
                    type: 'success'
                });
                _this.router.navigateByUrl('/dashboard');
                // window.location.reload();
            }
            if (response.save === false) {
                swal('Oops...', response.message, 'error');
                _this.router.navigateByUrl('/');
            }
        });
    };
    IndexComponent.prototype.coolForm = function () {
        this.stockistdata = this.stockistForm.value;
        // console.log('>>>>>>>>>>>>>' + JSON.stringify(this.stockistdata));
    };
    IndexComponent.prototype.reSendOTP = function () {
        // alert('resend OTP clicked!!!' + this.phone_number);
        this.authService.verifyUsers(this.phone_number)
            .subscribe(function (response) {
            if (response.save === false) {
                swal('Oops...', response.message, 'error');
            }
            if (response.save === true) {
                alertify.logPosition('top right');
                alertify.success('OTP has been sent again.');
            }
        });
    };
    IndexComponent.prototype.enquiry_data = function () {
        console.log(JSON.stringify(this.enquiry_Form.value));
        this.authService.user_enquiry(this.enquiry_Form.value)
            .subscribe(function (response) {
            if (response.save === false) {
                swal('Oops...', response.message, 'error');
            }
            if (response.save === true) {
                alertify.logPosition('top right');
                alertify.success('Successfully Saved!!!');
            }
        });
    };
    IndexComponent.prototype.movers_enquiry_data = function () {
        console.log(JSON.stringify(this.movers_Form.value));
        this.authService.movers_enquiry_data_verification(this.movers_Form.value)
            .subscribe(function (response) {
            if (response.save === false) {
                swal('Oops...', response.message, 'error');
            }
            if (response.save === true) {
                alertify.logPosition('top right');
                alertify.success('Successfully Saved!!!');
            }
        });
    };
    IndexComponent.prototype.movers_enquiry_data_aadhar_validate = function () {
        console.log(JSON.stringify(this.movers_Form.value));
        this.authService.movers_enquiry_data_aadhar_validate_verification(this.movers_Form.value)
            .subscribe(function (response) {
            if (response.save === false) {
                swal('Oops...', response.message, 'error');
            }
            if (response.save === true) {
                alertify.logPosition('top right');
                alertify.success('Successfully Saved!!!');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], IndexComponent.prototype, "inputModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], IndexComponent.prototype, "formData", void 0);
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'multi-step-wizard-app',
            template: __webpack_require__("../../../../../src/app/index/index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_7__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_6__multi_wizard_data_formData_service__["a" /* FormDataService */], __WEBPACK_IMPORTED_MODULE_8_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Raleway);", ""]);

// module
exports.push([module.i, "#cssmenu,\r\n#cssmenu ul,\r\n#cssmenu ul li,\r\n#cssmenu ul li a {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  list-style: none;\r\n  line-height: 1;\r\n  display: block;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n#cssmenu:after,\r\n#cssmenu > ul:after {\r\n  content: \".\";\r\n  display: block;\r\n  clear: both;\r\n  visibility: hidden;\r\n  line-height: 0;\r\n  height: 0;\r\n}\r\n#cssmenu {\r\n  width: auto;\r\n  border-bottom: 3px solid #47c9af;\r\n  font-family: Raleway, sans-serif;\r\n  line-height: 1;\r\n}\r\n#cssmenu ul {\r\n  background: #ffffff;\r\n}\r\n#cssmenu > ul > li {\r\n  float: left;\r\n}\r\n#cssmenu.align-center > ul {\r\n  font-size: 0;\r\n  text-align: center;\r\n}\r\n#cssmenu.align-center > ul > li {\r\n  display: inline-block;\r\n  float: none;\r\n}\r\n#cssmenu.align-right > ul > li {\r\n  float: right;\r\n}\r\n#cssmenu.align-right > ul > li > a {\r\n  margin-right: 0;\r\n  margin-left: -4px;\r\n}\r\n#cssmenu > ul > li > a {\r\n  z-index: 2;\r\n  padding: 18px 25px 12px 25px;\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n  color: #444444;\r\n  transition: all .2s ease;\r\n  margin-right: -4px;\r\n  margin-top:50px;\r\n}\r\n#cssmenu > ul > li.active > a,\r\n#cssmenu > ul > li:hover > a,\r\n#cssmenu > ul > li > a:hover {\r\n  color: #ffffff;\r\n}\r\n#cssmenu > ul > li > a:after {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  z-index: -1;\r\n  width: 100%;\r\n  height: 120%;\r\n  border-top-left-radius: 8px;\r\n  border-top-right-radius: 8px;\r\n  content: \"\";\r\n  transition: all .2s ease;\r\n  -webkit-transform: perspective(5px) rotateX(2deg);\r\n  -webkit-transform-origin: bottom;\r\n  -moz-transform: perspective(5px) rotateX(2deg);\r\n  -moz-transform-origin: bottom;\r\n  transform: perspective(5px) rotateX(2deg);\r\n  transform-origin: bottom;\r\n}\r\n#cssmenu > ul > li.active > a:after,\r\n#cssmenu > ul > li:hover > a:after,\r\n#cssmenu > ul > li > a:hover:after {\r\n  background: #47c9af;\r\n}\r\nbody {\r\n  padding: 20px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  line-height: 1.5;\r\n  font-size: 14px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.tab {\r\n  border: 1px solid #d4d4d1;\r\n  background-color: #fff;\r\n  float: inherit;\r\n\r\n  margin-bottom: 20px;\r\n  width: auto;\r\n}\r\n\r\n\r\n.tab-content {\r\n  width: 660px;\r\n  height:600px;\r\n  padding: 20px;\r\n  display: none;\r\n}\r\n\r\n\r\n#tab-1 {\r\n  display: block;\r\n}\r\n.form-style-1 {\r\n  margin:10px auto;\r\n  max-width: 400px;\r\n  padding: 20px 12px 10px 80px;\r\n  font: 13px \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;\r\n}\r\n.form-style-1 li {\r\n  padding: 0;\r\n  display: block;\r\n  list-style: none;\r\n  margin: 10px 0 0 0;\r\n}\r\n.form-style-1 label{\r\n  margin:0 0 3px 0;\r\n  padding:0px;\r\n  display:block;\r\n  font-weight: bold;\r\n}\r\n.form-style-1 input[type=text],\r\n.form-style-1 input[type=date],\r\n.form-style-1 input[type=datetime],\r\n.form-style-1 input[type=number],\r\n.form-style-1 input[type=search],\r\n.form-style-1 input[type=time],\r\n.form-style-1 input[type=url],\r\n.form-style-1 input[type=email],\r\ntextarea,\r\nselect{\r\n  box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  border:1px solid #BEBEBE;\r\n  padding: 7px;\r\n  margin:0px;\r\n  -webkit-transition: all 0.30s ease-in-out;\r\n  -moz-transition: all 0.30s ease-in-out;\r\n  -ms-transition: all 0.30s ease-in-out;\r\n  -o-transition: all 0.30s ease-in-out;\r\n  outline: none;\r\n}\r\n.form-style-1 input[type=text]:focus,\r\n.form-style-1 input[type=date]:focus,\r\n.form-style-1 input[type=datetime]:focus,\r\n.form-style-1 input[type=number]:focus,\r\n.form-style-1 input[type=search]:focus,\r\n.form-style-1 input[type=time]:focus,\r\n.form-style-1 input[type=url]:focus,\r\n.form-style-1 input[type=email]:focus,\r\n.form-style-1 textarea:focus,\r\n.form-style-1 select:focus{\r\n  box-shadow: 0 0 8px #88D5E9;\r\n  border: 1px solid #88D5E9;\r\n}\r\n.form-style-1 .field-divided{\r\n  width: 49%;\r\n}\r\n\r\n.form-style-1 .field-long{\r\n  width: 100%;\r\n}\r\n.form-style-1 .field-select{\r\n  width: 100%;\r\n}\r\n.form-style-1 .field-textarea{\r\n  height: 100px;\r\n}\r\n.form-style-1 input[type=submit], .form-style-1 input[type=button]{\r\n  background: #4B99AD;\r\n  padding: 8px 15px 8px 15px;\r\n  border: none;\r\n  color: #fff;\r\n}\r\n.form-style-1 input[type=submit]:hover, .form-style-1 input[type=button]:hover{\r\n  background: #4691A4;\r\n  box-shadow:none;\r\n  -moz-box-shadow:none;\r\n  -webkit-box-shadow:none;\r\n}\r\n.form-style-1 .required{\r\n  color:red;\r\n}\r\n#tab-1{\r\n  background:  url(" + __webpack_require__("../../../../../src/assets/e-images/melogo.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n#tab-2{\r\n  background:  url(" + __webpack_require__("../../../../../src/assets/e-images/melogo.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n#tab-3{\r\n  background:  url(" + __webpack_require__("../../../../../src/assets/e-images/melogo.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n#tab-4{\r\n  background:  url(" + __webpack_require__("../../../../../src/assets/e-images/melogo.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n#tab-5{\r\n  background:  url(" + __webpack_require__("../../../../../src/assets/e-images/melogo.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}#tab-6{\r\n   background:  url(" + __webpack_require__("../../../../../src/assets/e-images/melogo.png") + ");\r\n   background-repeat: no-repeat;\r\n   background-position: center;\r\n }\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--border: 2px solid black;-->\r\n<div id=\"tab-1\">\r\n<div class=\"send_otp_div\">\r\n  <form [formGroup]=\"loginForm\" class=\"login_form\" (submit)=\"clickedUser()\" >\r\n    <div>\r\n      <input type=\"text\" id=\"phone_number\" required=\"10\" formControlName=\"phone_number\" class=\"form-control\" maxlength=\"10\" style=\"width:300px;display: inline \" placeholder=\"Enter Phone Number\">\r\n      <button class=\"btn btn-success\" style=\"display: inline;vertical-align: top;\" type=\"submit\">Send</button>\r\n\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"otp_form\">\r\n  <form [formGroup]=\"otpForm\" class=\"otp_form\" style=\"display: none\" (submit)=\"otpVerification()\">\r\n\r\n    <input type=\"text\" id=\"otp\"  maxlength=\"4\" class=\"form-control\"  formControlName=\"otp_text\" style=\"width:300px;display: inline \" placeholder=\"Enter OTP Number\">\r\n    <button class=\"btn btn-success\"  type=\"submit\" style=\"vertical-align: top;\" >Next</button>\r\n\r\n  </form>\r\n  <form class=\"resent_otp_form\" style=\"display: none;\">\r\n    <u><a href=\"#\"  (click)=\"reSendOTP()\" style=\"color: orangered\">Have not received the OTP yet?</a></u>\r\n  </form>\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var alertify = __webpack_require__("../../../../alertify.js/dist/js/alertify.js");

var LoginComponent = (function () {
    function LoginComponent(_dataService, authService, _http, router) {
        this._dataService = _dataService;
        this.authService = authService;
        this._http = _http;
        this.router = router;
        this.stockistdata = {};
        this.loginData = {};
        this.otpData = {};
        this.stockistForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            med_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            phone_number: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.otpForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            otp_text: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.phone_number = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.auth_verified = this.authService.useJwtHelper();
        // const auth_verified = this.authService.useJwtHelper();
        console.log('auth_verified:::::' + this.auth_verified);
        if (this.auth_verified) {
            // console.log('moved to dashboard page.....')
            this.router.navigateByUrl('/dashboard');
        }
    };
    LoginComponent.prototype.clickedUser = function () {
        var get_phone = $('#phone_number').val();
        // console.log('******' + get_phone);
        var filter = /^[0-9]*$/;
        if (!filter.test(get_phone)) {
            swal('Oops...', 'Please enter numbers only', 'error');
            return false;
        }
        else {
            if (get_phone === '' || get_phone === undefined || get_phone === null) {
                swal('Oops...', 'Please enter Your Phone Number First', 'error');
            }
            else {
                this.phone_number = $('#phone_number').val();
                this.loginData = this.loginForm.value;
                console.log(this.phone_number);
                $('.otp_form').show();
                $('.resent_otp_form').show();
                console.log('>>>>>>>>>>>>>>>>>>>>>>>' + this.phone_number);
                this.authService.verifyUsers(this.phone_number)
                    .subscribe(function (response) {
                    if (response.save === false) {
                        $('.otp_form').hide();
                        $('.resent_otp_form').hide();
                        swal('Oops...', response.message, 'error');
                    }
                });
            }
        }
        // this.router.navigateByUrl('/sidebar');
    };
    LoginComponent.prototype.otpVerification = function () {
        var _this = this;
        var otp = $('#otp').val();
        console.log('******' + otp + this.phone_number);
        this.otpData = this.otpForm.value;
        //  console.log('=============' + JSON.stringify(this.otpData))
        this.authService.verifyOtp(otp, this.phone_number)
            .subscribe(function (response) {
            console.log('-------------------->' + JSON.stringify(response));
            _this.response = response;
            if (response.save === true) {
                localStorage.apiToken = response.token;
                // alertify.logPosition('top right');
                //  alertify.success('Authenticated');
                swal({
                    text: 'Authenticated',
                    timer: 1000,
                    type: 'success'
                });
                _this.router.navigateByUrl('/dashboard');
                // window.location.reload();
            }
            if (response.save === false) {
                swal('Oops...', response.message, 'error');
                _this.router.navigateByUrl('/');
            }
        });
    };
    LoginComponent.prototype.coolForm = function () {
        this.stockistdata = this.stockistForm.value;
        // console.log('>>>>>>>>>>>>>' + JSON.stringify(this.stockistdata));
    };
    LoginComponent.prototype.reSendOTP = function () {
        // alert('resend OTP clicked!!!' + this.phone_number);
        this.authService.verifyUsers(this.phone_number)
            .subscribe(function (response) {
            if (response.save === false) {
                swal('Oops...', response.message, 'error');
            }
            if (response.save === true) {
                alertify.logPosition('top right');
                alertify.success('OTP has been sent again.');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "inputModel", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <strong style=\"color: #ffffff\"></strong>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = (function () {
    function LogoutComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.authService.userLogout()
            .subscribe(function (response) {
            // if (response.redirect) {
            localStorage.removeItem('apiToken');
            // localStorage.removeItem('currentUser');
            _this.router.navigateByUrl('/');
            // }
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LogoutComponent.prototype, "inputModel", void 0);
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/logout/logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/multi-wizard/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "<form #addressForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"tab-pane fade in active\">\n        <h4 class=\"head text-center\">{{title}}</h4>\n        <br/>\n        <div class='row'>\n            <div class='col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10'>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"street\">Street Address</label>  \n                    <input class=\"form-control input-md\" #street=\"ngModel\" required id=\"street\" name=\"street\" type=\"text\" placeholder=\"Street Address\" [(ngModel)]=\"address.street\">\n                    <div class=\"alert alert-danger\" [hidden]=\"street.valid\">Street Address is required</div>\n                </div>   \n                <div class=\"row\">\n                    <div class='col-xs-12 col-sm-4'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"city\">City</label>  \n                            <input class=\"form-control input-md\" #city=\"ngModel\" required id=\"city\" name=\"city\" type=\"text\" placeholder=\"City\" [(ngModel)]=\"address.city\">\n                            <div class=\"alert alert-danger\" [hidden]=\"city.valid\">City is required</div>\n                        </div>\n                    </div>\n                    <div class='col-xs-4 col-sm-offset-1 col-sm-3'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"state\">State</label>  \n                            <input class=\"form-control input-md\" #state=\"ngModel\" required id=\"state\" name=\"state\" type=\"text\" placeholder=\"State\" [(ngModel)]=\"address.state\">\n                            <div class=\"alert alert-danger\" [hidden]=\"state.valid\">State is required</div>\n                        </div>\n                    </div>\n                    <div class='col-xs-offset-1 col-xs-7 col-sm-offset-1 col-sm-3'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"zip\">Zip</label>  \n                            <input class=\"form-control input-md\" #zip=\"ngModel\" required id=\"zip\" name=\"zip\" type=\"text\" placeholder=\"Zip\" [(ngModel)]=\"address.zip\">\n                            <div class=\"alert alert-danger\" [hidden]=\"zip.valid\">Zip is required</div>\n                        </div>  \n                    </div> \n                </div>\n            </div>\n\n            <div class=\"form-group text-center\">\n                <button class=\"btn btn-outline-rounded btn-default\" (click)=\"goToPrevious(addressForm)\"> <span style=\"margin-right:10px;\" class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n                <button class=\"btn btn-outline-rounded btn-info\" [disabled]=\"!addressForm.valid\" (click)=\"goToNext(addressForm)\"> Next <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n            </div>\n        </div>\n    \n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/multi-wizard/address/address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/multi-wizard/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddressComponent = (function () {
    function AddressComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.title = 'Where do you live?';
    }
    AddressComponent.prototype.ngOnInit = function () {
        this.address = this.formDataService.getAddress();
        console.log('Address feature loaded!');
    };
    AddressComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setAddress(this.address);
        return true;
    };
    AddressComponent.prototype.goToPrevious = function (form) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/work']);
        }
    };
    AddressComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the result page
            this.router.navigate(['/result']);
        }
    };
    AddressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mt-wizard-address',
            template: __webpack_require__("../../../../../src/app/multi-wizard/address/address.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "../../../../../src/app/multi-wizard/data/formData.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormData; });
/* unused harmony export Personal */
/* unused harmony export Address */
var FormData = (function () {
    function FormData() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
    FormData.prototype.clear = function () {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    };
    return FormData;
}());

var Personal = (function () {
    function Personal() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
    }
    return Personal;
}());

var Address = (function () {
    function Address() {
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
    return Address;
}());



/***/ }),

/***/ "../../../../../src/app/multi-wizard/data/formData.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formData_model__ = __webpack_require__("../../../../../src/app/multi-wizard/data/formData.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__ = __webpack_require__("../../../../../src/app/multi-wizard/workflow/workflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__ = __webpack_require__("../../../../../src/app/multi-wizard/workflow/workflow.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormDataService = (function () {
    function FormDataService(workflowService) {
        this.workflowService = workflowService;
        this.formData = new __WEBPACK_IMPORTED_MODULE_1__formData_model__["a" /* FormData */]();
        this.isPersonalFormValid = false;
        this.isWorkFormValid = false;
        this.isAddressFormValid = false;
    }
    FormDataService.prototype.getPersonal = function () {
        // Return the Personal data
        var personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email
        };
        return personal;
    };
    FormDataService.prototype.setPersonal = function (data) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(__WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__["a" /* STEPS */].personal);
    };
    FormDataService.prototype.getWork = function () {
        // Return the work type
        return this.formData.work;
    };
    FormDataService.prototype.setWork = function (data) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(__WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__["a" /* STEPS */].work);
    };
    FormDataService.prototype.getAddress = function () {
        // Return the Address data
        var address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    };
    FormDataService.prototype.setAddress = function (data) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(__WEBPACK_IMPORTED_MODULE_3__workflow_workflow_model__["a" /* STEPS */].address);
    };
    FormDataService.prototype.getFormData = function () {
        // Return the entire Form Data
        return this.formData;
    };
    FormDataService.prototype.resetFormData = function () {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    };
    FormDataService.prototype.isFormValid = function () {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
            this.isWorkFormValid &&
            this.isAddressFormValid;
    };
    FormDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__workflow_workflow_service__["a" /* WorkflowService */]])
    ], FormDataService);
    return FormDataService;
}());



/***/ }),

/***/ "../../../../../src/app/multi-wizard/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"board-inner\" id=\"status-buttons\">\n    <ul class=\"nav nav-tabs\" id=\"myTab\">\n        <div class=\"liner\"></div>\n\n        <!-- circular user icon -->\n        <li>\n            <a routerLink=\"/personal\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" data-toggle=\"tab\" title=\"personal\">\n                <span class=\"round-tabs one\">\n                    <i class=\"glyphicon glyphicon-user\"></i>\n                </span>\n            </a>\n        </li>\n\n        <!-- circular tasks icon -->\n         <li>\n            <a routerLink=\"/work\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"work\">\n                <span class=\"round-tabs two\">\n                    <i class=\"glyphicon glyphicon-tasks\"></i>\n                </span>\n            </a>\n        </li>\n\n        <!-- circular home icon -->\n        <li>\n            <a routerLink=\"/address\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"address\">\n                <span class=\"round-tabs three\">\n                    <i class=\"glyphicon glyphicon-home\"></i>\n                </span>\n            </a>\n        </li>\n\n        <!-- circular ok icon -->\n        <li>\n            <a routerLink=\"/result\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"completed\">\n                <span class=\"round-tabs four\">\n                    <i class=\"glyphicon glyphicon-ok\"></i>\n                </span>\n            </a>\n        </li>\n\n    </ul>\n    <div class=\"clearfix\"></div>\n</div>\n\n<!-- Close the Splash screen -->\n<script src=\"../../../../src/assets/mw-js/loading-bars.js\"></script>\n"

/***/ }),

/***/ "../../../../../src/app/multi-wizard/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'msw-navbar',
            template: __webpack_require__("../../../../../src/app/multi-wizard/navbar/navbar.component.html")
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/multi-wizard/personal/personal.component.html":
/***/ (function(module, exports) {

module.exports = "<form #personalForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"tab-pane fade in active\">\n        <h4 class=\"head text-center\">{{title}}</h4>\n        <br/>\n        <div class='row'>\n            <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\n                <div class=\"row\">\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"firstname\">First Name</label>\n                            <input class=\"form-control input-md\" #firstname=\"ngModel\" required id=\"firstname\" name=\"firstname\" type=\"text\" placeholder=\"First Name\" [(ngModel)]=\"personal.firstName\">\n                            <div class=\"alert alert-danger\" [hidden]=\"firstname.valid\">First Name is required</div>\n                        </div>\n                    </div>\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"lastname\">Last Name</label>\n                            <input class=\"form-control input-md\" #lastname=\"ngModel\" required id=\"lastname\" name=\"lastname\" type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"personal.lastName\">\n                            <div class=\"alert alert-danger\" [hidden]=\"lastname.valid\">Last Name is required</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"email\">Email</label>\n                    <input class=\"form-control input-md\" #email=\"ngModel\" required pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" id=\"email\" name=\"email\" type=\"text\" placeholder=\"Email\" [(ngModel)]=\"personal.email\">\n                    <div class=\"alert alert-danger\" [hidden]=\"email.valid\">Email is required and must be valid</div>\n                </div>\n\n                <div class=\"form-group text-center\">\n                    <button class=\"btn btn-success btn-outline-rounded btn-info\" [disabled]=\"!personalForm.valid\" (click)=\"goToNext(personalForm)\"> Next <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/multi-wizard/personal/personal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/multi-wizard/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonalComponent = (function () {
    function PersonalComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.title = 'Please tell us about yourself.';
    }
    PersonalComponent.prototype.ngOnInit = function () {
        this.personal = this.formDataService.getPersonal();
        console.log('Personal feature loaded!');
    };
    PersonalComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setPersonal(this.personal);
        return true;
    };
    PersonalComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/work']);
        }
    };
    PersonalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mt-wizard-personal',
            template: __webpack_require__("../../../../../src/app/multi-wizard/personal/personal.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]])
    ], PersonalComponent);
    return PersonalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/multi-wizard/result/result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-pane fade in active\">\n    <h3 class=\"head text-center\">{{title}}</h3>\n    <h4 class=\"text-center\">\n        Made with <i class=\"fa fa-heart heart\" style=\"color:#f48260;\"></i> by <a href=\"https://www.cc28tech.com\" target=\"_blank\">Cathy Wun</a>. Check out the tutorials <a href=\"https://www.cc28tech.com/angular-multi-step-part-1\" target=\"_blank\">here.</a>\n    </h4>\n    <p class=\"narrow text-center\">\n        Here is a copy of the information you have entered:\n    </p>\n    <div class='row'>\n        <div class='col-xs-offset-1 col-xs-10 col-sm-offset-3 col-sm-8 col-md-offset-4 col-md-8'>\n            <div class=\"row\">\n                <div class='col-xs-3 col-sm-2'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"name\">Name: </label> \n                    </div>\n                </div>\n                <div class='col-xs-9 col-sm-10'>\n                    {{formData.firstName + ' ' + formData.lastName}}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class='col-xs-3 col-sm-2'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"email\">Email: </label> \n                    </div>\n                </div>\n                <div class='col-xs-9 col-sm-10'>\n                    {{formData.email}}\n                </div>\n           </div>     \n            <div class=\"row\">\n                <div class='col-xs-3 col-sm-2'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"work\">Work: </label> \n                    </div>\n                </div>\n                <div class='col-xs-9 col-sm-10'>\n                    {{formData.work}}\n                </div>\n           </div>     \n           <div class=\"row\">\n                <div class='col-xs-3 col-sm-2'>\n                    <div class=\"form-group\">\n                        <label class=\"control-label\" for=\"address\">Address: </label>\n                    </div>\n                </div>\n                <div class='col-xs-9 col-sm-10'>\n                    {{formData.street}}\n                    <br/>\n                    {{formData.city + ' ' + formData.state + ' ' + formData.zip}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"text-center\">\n        <button class=\"btn btn-success btn-outline-rounded\" [disabled]=\"!isFormValid\" (click)=\"submit()\"> Submit <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/multi-wizard/result/result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_formData_model__ = __webpack_require__("../../../../../src/app/multi-wizard/data/formData.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/multi-wizard/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultComponent = (function () {
    function ResultComponent(formDataService) {
        this.formDataService = formDataService;
        this.title = 'Thanks for staying tuned!';
        this.isFormValid = false;
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        console.log('Result feature loaded!');
    };
    ResultComponent.prototype.submit = function () {
        alert('Excellent Job!');
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__data_formData_model__["a" /* FormData */])
    ], ResultComponent.prototype, "formData", void 0);
    ResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mt-wizard-result',
            template: __webpack_require__("../../../../../src/app/multi-wizard/result/result.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/multi-wizard/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "<form #workForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"form-horizontal\">\n        <div class=\"tab-pane fade in active\">\n            <h4 class=\"head text-center\">{{title}}</h4>\n            <br/>\n            <div class='row'>\n                <div class='col-xs-offset-4 col-xs-10 col-sm-offset-5 col-sm-4'>\n                    <div class=\"form-group\">\n                        <div class=\"radio\">\n                            <label>\n                                <input type=\"radio\" #work=\"ngModel\" required name=\"work\" [(ngModel)]=\"workType\" value=\"Design\">\n                                Design\n                            </label>\n                        </div>\n                        <div class=\"radio\">\n                            <label>\n                                <input type=\"radio\" #work=\"ngModel\" required name=\"work\" [(ngModel)]=\"workType\" value=\"Code\">\n                                Code\n                            </label>\n                        </div>\n                        <div class=\"radio\">\n                            <label>\n                                <input type=\"radio\" #work=\"ngModel\" required name=\"work\" [(ngModel)]=\"workType\" value=\"Deploy\">\n                                Deploy\n                            </label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group text-center space-20\">\n                <button class=\"btn btn-outline-rounded btn-default\" (click)=\"goToPrevious(workForm)\"> <span style=\"margin-right:10px;\" class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n                <button class=\"btn btn-outline-rounded btn-info\" [disabled]=\"!workForm.valid\" (click)=\"goToNext(workForm)\"> Next <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n            </div>\n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/multi-wizard/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_formData_service__ = __webpack_require__("../../../../../src/app/multi-wizard/data/formData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkComponent = (function () {
    function WorkComponent(router, formDataService) {
        this.router = router;
        this.formDataService = formDataService;
        this.title = 'What do you do?';
    }
    WorkComponent.prototype.ngOnInit = function () {
        this.workType = this.formDataService.getWork();
        console.log('Work feature loaded!');
    };
    WorkComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setWork(this.workType);
        return true;
    };
    WorkComponent.prototype.goToPrevious = function (form) {
        if (this.save(form)) {
            // Navigate to the personal page
            this.router.navigate(['/personal']);
        }
    };
    WorkComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/address']);
        }
    };
    WorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mt-wizard-work',
            template: __webpack_require__("../../../../../src/app/multi-wizard/work/work.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__data_formData_service__["a" /* FormDataService */]])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "../../../../../src/app/multi-wizard/workflow/workflow-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workflow_service__ = __webpack_require__("../../../../../src/app/multi-wizard/workflow/workflow.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkflowGuard = (function () {
    function WorkflowGuard(router, workflowService) {
        this.router = router;
        this.workflowService = workflowService;
    }
    WorkflowGuard.prototype.canActivate = function (route, state) {
        var path = route.routeConfig.path;
        return this.verifyWorkFlow(path);
    };
    WorkflowGuard.prototype.verifyWorkFlow = function (path) {
        console.log("Entered '" + path + "' path.");
        // If any of the previous steps is invalid, go back to the first invalid step
        var firstPath = this.workflowService.getFirstInvalidStep(path);
        if (firstPath.length > 0) {
            console.log("Redirected to '" + firstPath + "' path which it is the first invalid step.");
            var url = "/" + firstPath;
            this.router.navigate([url]);
            return false;
        }
        ;
        return true;
    };
    WorkflowGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__workflow_service__["a" /* WorkflowService */]])
    ], WorkflowGuard);
    return WorkflowGuard;
}());



/***/ }),

/***/ "../../../../../src/app/multi-wizard/workflow/workflow.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STEPS; });
var STEPS = {
    personal: 'personal',
    work: 'work',
    address: 'address',
    result: 'result'
};


/***/ }),

/***/ "../../../../../src/app/multi-wizard/workflow/workflow.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workflow_model__ = __webpack_require__("../../../../../src/app/multi-wizard/workflow/workflow.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WorkflowService = (function () {
    function WorkflowService() {
        this.workflow = [
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].personal, valid: false },
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].work, valid: false },
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].address, valid: false },
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].result, valid: false }
        ];
    }
    WorkflowService.prototype.validateStep = function (step) {
        // If the state is found, set the valid field to true 
        var found = false;
        for (var i = 0; i < this.workflow.length && !found; i++) {
            if (this.workflow[i].step === step) {
                found = this.workflow[i].valid = true;
            }
        }
    };
    WorkflowService.prototype.resetSteps = function () {
        // Reset all the steps in the Workflow to be invalid
        this.workflow.forEach(function (element) {
            element.valid = false;
        });
    };
    WorkflowService.prototype.getFirstInvalidStep = function (step) {
        // If all the previous steps are validated, return blank
        // Otherwise, return the first invalid step
        var found = false;
        var valid = true;
        var redirectToStep = '';
        for (var i = 0; i < this.workflow.length && !found && valid; i++) {
            var item = this.workflow[i];
            if (item.step === step) {
                found = true;
                redirectToStep = '';
            }
            else {
                valid = item.valid;
                redirectToStep = item.step;
            }
        }
        return redirectToStep;
    };
    WorkflowService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], WorkflowService);
    return WorkflowService;
}());



/***/ }),

/***/ "../../../../../src/app/privacy-policy/privacy-policy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Custom code */\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/privacy-policy/privacy-policy.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<div class=\"app-body clearfix\">\n  <app-sidebar>  </app-sidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">Home</li>\n      <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a></li>\n      <li class=\"breadcrumb-item active\">Privacy Policy</li>\n\n      <!-- Breadcrumb Menu-->\n      <li class=\"breadcrumb-menu d-md-down-none\">\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group\">\n        <!--  <a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>\n          <a class=\"btn\" href=\"#\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n          <a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>-->\n        </div>\n      </li>\n    </ol>\n\n\n    <div class=\"container-fluid\">\n      Welcome to Privacy Policy Page!!!\n    </div>\n\n  </main>\n</div>\n\n\n<app-footer></app-footer>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/privacy-policy/privacy-policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrivacyPolicyComponent = (function () {
    function PrivacyPolicyComponent(_dataService, _http) {
        this._dataService = _dataService;
        this._http = _http;
        this.userEditData = {};
        this.editForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            type_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            level1List: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            level2List: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            level3List: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacyPolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-policy',
            template: __webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/property/property.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#r_div {\r\n  width: 50%;\r\n  border: 2px solid green;\r\n  padding: 25px;\r\n  margin: 25px;\r\n\r\n}\r\n/* Custom code */\r\n/*.mid-content {\r\n  width: 70%;\r\n  padding: 5% 0;\r\n}\r\n.sidebar {float:left;width:15%}\r\n.mid-content h3 {}\r\n.content-data {float: left; width: 75%;}*/\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/property/property.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n\n<div class=\"app-body\">\n\n  <app-sidebar>  </app-sidebar>\n\n  <main class=\"main\">\n\n\n\n    <!-- Breadcrumb -->\n    <ol class=\"breadcrumb\">\n     <!-- <li class=\"breadcrumb-item\">Home</li>\n      <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Admin</a></li>-->\n      <li class=\"breadcrumb-item active rob\">Property Management</li>\n\n      <!-- Breadcrumb Menu-->\n      <li class=\"breadcrumb-menu d-md-down-none\">\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group\">\n          <!--<a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>\n          <a class=\"btn\" href=\"#\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n          <a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>-->\n        </div>\n      </li>\n    </ol>\n\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\"></div>\n      <div class=\"content-data\">\n        <div id=\"r_div\" class=\"upload-file\">\n          <form [formGroup]=\"propertyForm\">\n            <div class=\"form-group\">\n            <b class=\"rob\">Properties Upload File:</b>\n            <input type=\"file\"  (change)=\"fileChangeEventForProperty($event)\" required formControlName=\"property_name\" placeholder=\"Upload file...\" />\n              <br>\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"uploadCsvProperty()\" [disabled]='check_property' >Upload</button>\n             </div>\n          </form>\n        </div>\n        <div id=\"r_div\" style=\"border: dashed 2px #000000;\">\n          <b class=\"rob\">Download the latest Property file:</b><br>\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"downloadProperty()\" ><i class=\"fa fa-file-excel-o\" style=\"font-size:24px\">xls</i></button>\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"downloadPropertyXlsxFormat()\" ><i class=\"fa fa-file-excel-o\" style=\"font-size:24px\">xlsx</i></button>\n        </div>\n        <ng4-loading-spinner> </ng4-loading-spinner>\n      </div>\n    </div>\n\n  </main>\n\n</div>\n\n\n\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/property/property.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var alertify = __webpack_require__("../../../../alertify.js/dist/js/alertify.js");

var PropertyComponent = (function () {
    function PropertyComponent(_dataService, _http, spinnerService) {
        this._dataService = _dataService;
        this._http = _http;
        this.spinnerService = spinnerService;
        this.filesToUpload = [];
        this.usersData = [];
        this.header_array = [];
        this.propertyForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            property_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.residentForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            resident_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.check_property = true;
        this.isResetting = false;
    }
    PropertyComponent.prototype.ngOnInit = function () {
    };
    PropertyComponent.prototype.uploadCsvProperty = function () {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        formData.append('uploads[]', files[0], files[0]['name']);
        if (['xls', 'xlsx'].indexOf(files[0]['name'].split('.')[files[0]['name'].split('.').length - 1]) === -1) {
            swal('Sorry!', 'please upload xlsx file', 'error');
            return;
        }
        this.spinnerService.show();
        this._http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].url + '/property/uploadExcelProcessForProperty', formData)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error); })
            .subscribe(function (response) {
            _this.response = response;
            console.log('-------------------->' + JSON.stringify(response));
            if (response.save === true) {
                setTimeout(function () {
                    _this.spinnerService.hide();
                    alertify.logPosition('bottom-right');
                    alertify.success('Properties file uploaded successfully');
                    swal('', 'Properties file uploaded successfully', 'success');
                }, 3000);
                _this.check_property = true;
                _this.isResetting = true;
                setTimeout(function () { return _this.isResetting = false; }, 0);
                return false;
            }
            if (response.save === false) {
                _this.spinnerService.hide();
                swal('Oops...', response.message, 'error');
            }
        });
    };
    PropertyComponent.prototype.fileChangeEventForProperty = function (fileInput) {
        this.check_property = false;
        this.filesToUpload = fileInput.target.files;
    };
    PropertyComponent.prototype.downloadProperty = function () {
        var _this = this;
        this.selected_value = 'property';
        this._dataService.downloadExcelProcess(this.selected_value)
            .subscribe(function (response) {
            var excel_json = {};
            var excel_array = [];
            console.log('datat::::' + JSON.stringify(response.users_Data));
            // const property_name = response.users_Data[0].property_name;
            // const p_name = property_name + '.xls';
            // console.log('property_name---------->' + property_name)
            var mystyle = {
                headers: true,
                column: { style: { Font: { Bold: '1' } } },
            };
            if (response.save == 'NO') {
                swal('Oops...', response.message, 'error');
            }
            if (response.save == false) {
                console.log('flaseeeeeeeeeeeeeeeeeeeeeeeeeee:::::::::::');
                _this.header_array = [{ Phase: '', Tower: '', Flat: '', Rooms: '' }];
                alasql('SELECT  Phase,  Tower,  Flat,    Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, _this.header_array]);
                //  alasql('SELECT * INTO XLSX("Property.xls",?) FROM ?', ['Phase', 'Tower', 'Flat', 'Rooms']);
                //  alasql('SELECT ,  Phase,  Tower,  Flat,  Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, response.users_Data[0]]);
            }
            if (response.flag == 4) {
                console.log('property---->');
                // alasql('SELECT _id AS `id` phase_name AS Phase, tower_name AS Tower, flat_no AS Flat, room AS Rooms   INTO XLSXML("' + p_name + '",?) FROM ?', [mystyle, response.users_Data[0].flat]);
                alasql('SELECT _id AS `id`, phase_name AS Phase, tower_name AS Tower, flat_no AS Flat, flat_id AS `Flat Id`,  room AS Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, response.users_Data[0].flat]);
            }
        });
    };
    PropertyComponent.prototype.downloadPropertyXlsxFormat = function () {
        var _this = this;
        this.selected_value = 'property';
        this._dataService.downloadExcelProcess(this.selected_value)
            .subscribe(function (response) {
            var excel_json = {};
            var excel_array = [];
            console.log('datat::::' + JSON.stringify(response.users_Data));
            // const property_name = response.users_Data[0].property_name;
            // const p_name = property_name + '.xls';
            // console.log('property_name---------->' + property_name)
            var mystyle = {
                headers: true,
                column: { style: { Font: { Bold: '1' } } },
            };
            if (response.save == 'NO') {
                swal('Oops...', response.message, 'error');
            }
            if (response.save == false) {
                console.log('flaseeeeeeeeeeeeeeeeeeeeeeeeeee:::::::::::');
                _this.header_array = [{ Phase: '', Tower: '', Flat: '', Rooms: '' }];
                alasql('SELECT  Phase,  Tower,  Flat,    Rooms   INTO xlsx("Property.xlsx",?) FROM ?', [mystyle, _this.header_array]);
                //  alasql('SELECT * INTO XLSX("Property.xls",?) FROM ?', ['Phase', 'Tower', 'Flat', 'Rooms']);
                //  alasql('SELECT ,  Phase,  Tower,  Flat,  Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, response.users_Data[0]]);
            }
            if (response.flag == 4) {
                console.log('property---->');
                // alasql('SELECT _id AS `id` phase_name AS Phase, tower_name AS Tower, flat_no AS Flat, room AS Rooms   INTO XLSXML("' + p_name + '",?) FROM ?', [mystyle, response.users_Data[0].flat]);
                alasql('SELECT _id AS `id`, phase_name AS Phase, tower_name AS Tower, flat_no AS Flat, flat_id AS `Flat Id`,  room AS Rooms   INTO xlsx("Property.xlsx",?) FROM ?', [mystyle, response.users_Data[0].flat]);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PropertyComponent.prototype, "isResetting", void 0);
    PropertyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-property',
            template: __webpack_require__("../../../../../src/app/property/property.component.html"),
            styles: [__webpack_require__("../../../../../src/app/property/property.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], PropertyComponent);
    return PropertyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Raleway);", ""]);

// module
exports.push([module.i, "#cssmenu,\r\n#cssmenu ul,\r\n#cssmenu ul li,\r\n#cssmenu ul li a {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  list-style: none;\r\n  line-height: 1;\r\n  display: block;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n#cssmenu:after,\r\n#cssmenu > ul:after {\r\n  content: \".\";\r\n  display: block;\r\n  clear: both;\r\n  visibility: hidden;\r\n  line-height: 0;\r\n  height: 0;\r\n}\r\n#cssmenu {\r\n  width: auto;\r\n  border-bottom: 3px solid #47c9af;\r\n  font-family: Raleway, sans-serif;\r\n  line-height: 1;\r\n}\r\n#cssmenu ul {\r\n  background: #ffffff;\r\n}\r\n#cssmenu > ul > li {\r\n  float: left;\r\n}\r\n#cssmenu.align-center > ul {\r\n  font-size: 0;\r\n  text-align: center;\r\n}\r\n#cssmenu.align-center > ul > li {\r\n  display: inline-block;\r\n  float: none;\r\n}\r\n#cssmenu.align-right > ul > li {\r\n  float: right;\r\n}\r\n#cssmenu.align-right > ul > li > a {\r\n  margin-right: 0;\r\n  margin-left: -4px;\r\n}\r\n#cssmenu > ul > li > a {\r\n  z-index: 2;\r\n  padding: 18px 25px 12px 25px;\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n  color: #444444;\r\n  transition: all .2s ease;\r\n  margin-right: -4px;\r\n  margin-top:50px;\r\n}\r\n#cssmenu > ul > li.active > a,\r\n#cssmenu > ul > li:hover > a,\r\n#cssmenu > ul > li > a:hover {\r\n  color: #ffffff;\r\n}\r\n#cssmenu > ul > li > a:after {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  z-index: -1;\r\n  width: 100%;\r\n  height: 120%;\r\n  border-top-left-radius: 8px;\r\n  border-top-right-radius: 8px;\r\n  content: \"\";\r\n  transition: all .2s ease;\r\n  -webkit-transform: perspective(5px) rotateX(2deg);\r\n  -webkit-transform-origin: bottom;\r\n  -moz-transform: perspective(5px) rotateX(2deg);\r\n  -moz-transform-origin: bottom;\r\n  transform: perspective(5px) rotateX(2deg);\r\n  transform-origin: bottom;\r\n}\r\n#cssmenu > ul > li.active > a:after,\r\n#cssmenu > ul > li:hover > a:after,\r\n#cssmenu > ul > li > a:hover:after {\r\n  background: #47c9af;\r\n}\r\nbody {\r\n  padding: 20px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  line-height: 1.5;\r\n  font-size: 14px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.tab {\r\n  border: 1px solid #d4d4d1;\r\n  background-color: #fff;\r\n  float: inherit;\r\n\r\n  margin-bottom: 20px;\r\n  width: auto;\r\n}\r\n\r\n\r\n.tab-content {\r\n  width: 660px;\r\n  height:600px;\r\n  padding: 20px;\r\n  display: none;\r\n}\r\n\r\n\r\n#tab-1 {\r\n  display: block;\r\n}\r\n.form-style-1 {\r\n  margin:10px auto;\r\n  max-width: 400px;\r\n  padding: 20px 12px 10px 80px;\r\n  font: 13px \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;\r\n}\r\n.form-style-1 li {\r\n  padding: 0;\r\n  display: block;\r\n  list-style: none;\r\n  margin: 10px 0 0 0;\r\n}\r\n.form-style-1 label{\r\n  margin:0 0 3px 0;\r\n  padding:0px;\r\n  display:block;\r\n  font-weight: bold;\r\n}\r\n.form-style-1 input[type=text],\r\n.form-style-1 input[type=date],\r\n.form-style-1 input[type=datetime],\r\n.form-style-1 input[type=number],\r\n.form-style-1 input[type=search],\r\n.form-style-1 input[type=time],\r\n.form-style-1 input[type=url],\r\n.form-style-1 input[type=email],\r\ntextarea,\r\nselect{\r\n  box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  border:1px solid #BEBEBE;\r\n  padding: 7px;\r\n  margin:0px;\r\n  -webkit-transition: all 0.30s ease-in-out;\r\n  -moz-transition: all 0.30s ease-in-out;\r\n  -ms-transition: all 0.30s ease-in-out;\r\n  -o-transition: all 0.30s ease-in-out;\r\n  outline: none;\r\n}\r\n.form-style-1 input[type=text]:focus,\r\n.form-style-1 input[type=date]:focus,\r\n.form-style-1 input[type=datetime]:focus,\r\n.form-style-1 input[type=number]:focus,\r\n.form-style-1 input[type=search]:focus,\r\n.form-style-1 input[type=time]:focus,\r\n.form-style-1 input[type=url]:focus,\r\n.form-style-1 input[type=email]:focus,\r\n.form-style-1 textarea:focus,\r\n.form-style-1 select:focus{\r\n  box-shadow: 0 0 8px #88D5E9;\r\n  border: 1px solid #88D5E9;\r\n}\r\n.form-style-1 .field-divided{\r\n  width: 49%;\r\n}\r\n\r\n.form-style-1 .field-long{\r\n  width: 100%;\r\n}\r\n.form-style-1 .field-select{\r\n  width: 100%;\r\n}\r\n.form-style-1 .field-textarea{\r\n  height: 100px;\r\n}\r\n.form-style-1 input[type=submit], .form-style-1 input[type=button]{\r\n  background: #4B99AD;\r\n  padding: 8px 15px 8px 15px;\r\n  border: none;\r\n  color: #fff;\r\n}\r\n.form-style-1 input[type=submit]:hover, .form-style-1 input[type=button]:hover{\r\n  background: #4691A4;\r\n  box-shadow:none;\r\n  -moz-box-shadow:none;\r\n  -webkit-box-shadow:none;\r\n}\r\n.form-style-1 .required{\r\n  color:red;\r\n}\r\n#tab-1{\r\n  background:  url(" + __webpack_require__("../../../../../src/assets/e-images/melogo.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n#tab-2{\r\n  background:  url(" + __webpack_require__("../../../../../src/assets/e-images/melogo.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n#tab-3{\r\n  background:  url(" + __webpack_require__("../../../../../src/assets/e-images/melogo.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n#tab-4{\r\n  background:  url(" + __webpack_require__("../../../../../src/assets/e-images/melogo.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n#tab-5{\r\n  background:  url(" + __webpack_require__("../../../../../src/assets/e-images/melogo.png") + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}#tab-6{\r\n   background:  url(" + __webpack_require__("../../../../../src/assets/e-images/melogo.png") + ");\r\n   background-repeat: no-repeat;\r\n   background-position: center;\r\n }\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!--border: 2px solid black;-->\r\n<div id='cssmenu'>\r\n  <ul class=\"tabs-menu\">\r\n    <li><img src=\"../../assets/e-images/melogo.png\" style=\"height:100px\"></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li></li>\r\n    <li class='active'><a routerLink=\"/home\">Home</a></li>\r\n    <li><a>Products</a></li>\r\n    <li><a >Company</a></li>\r\n    <li><a >Contact</a></li>\r\n    <li><a routerLink=\"/register\">Register</a></li>\r\n    <li><a routerLink=\"/login\">LogIn</a></li>\r\n  </ul>\r\n</div>\r\n<div id=\"tab-1\">\r\n\r\n  <msw-navbar>\r\n\r\n  </msw-navbar>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var alertify = __webpack_require__("../../../../alertify.js/dist/js/alertify.js");

var RegisterComponent = (function () {
    function RegisterComponent(_dataService, authService, _http, router) {
        this._dataService = _dataService;
        this.authService = authService;
        this._http = _http;
        this.router = router;
        this.stockistdata = {};
        this.loginData = {};
        this.otpData = {};
        this.stockistForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            med_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            phone_number: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.otpForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            otp_text: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.phone_number = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.auth_verified = this.authService.useJwtHelper();
        // const auth_verified = this.authService.useJwtHelper();
        console.log('auth_verified:::::' + this.auth_verified);
        if (this.auth_verified) {
            // console.log('moved to dashboard page.....')
            this.router.navigateByUrl('/dashboard');
        }
    };
    RegisterComponent.prototype.clickedUser = function () {
        var get_phone = $('#phone_number').val();
        // console.log('******' + get_phone);
        var filter = /^[0-9]*$/;
        if (!filter.test(get_phone)) {
            swal('Oops...', 'Please enter numbers only', 'error');
            return false;
        }
        else {
            if (get_phone === '' || get_phone === undefined || get_phone === null) {
                swal('Oops...', 'Please enter Your Phone Number First', 'error');
            }
            else {
                this.phone_number = $('#phone_number').val();
                this.loginData = this.loginForm.value;
                console.log(this.phone_number);
                $('.otp_form').show();
                $('.resent_otp_form').show();
                console.log('>>>>>>>>>>>>>>>>>>>>>>>' + this.phone_number);
                this.authService.verifyUsers(this.phone_number)
                    .subscribe(function (response) {
                    if (response.save === false) {
                        $('.otp_form').hide();
                        $('.resent_otp_form').hide();
                        swal('Oops...', response.message, 'error');
                    }
                });
            }
        }
        // this.router.navigateByUrl('/sidebar');
    };
    RegisterComponent.prototype.otpVerification = function () {
        var _this = this;
        var otp = $('#otp').val();
        console.log('******' + otp + this.phone_number);
        this.otpData = this.otpForm.value;
        //  console.log('=============' + JSON.stringify(this.otpData))
        this.authService.verifyOtp(otp, this.phone_number)
            .subscribe(function (response) {
            console.log('-------------------->' + JSON.stringify(response));
            _this.response = response;
            if (response.save === true) {
                localStorage.apiToken = response.token;
                // alertify.logPosition('top right');
                //  alertify.success('Authenticated');
                swal({
                    text: 'Authenticated',
                    timer: 1000,
                    type: 'success'
                });
                _this.router.navigateByUrl('/dashboard');
                // window.location.reload();
            }
            if (response.save === false) {
                swal('Oops...', response.message, 'error');
                _this.router.navigateByUrl('/');
            }
        });
    };
    RegisterComponent.prototype.coolForm = function () {
        this.stockistdata = this.stockistForm.value;
        // console.log('>>>>>>>>>>>>>' + JSON.stringify(this.stockistdata));
    };
    RegisterComponent.prototype.reSendOTP = function () {
        // alert('resend OTP clicked!!!' + this.phone_number);
        this.authService.verifyUsers(this.phone_number)
            .subscribe(function (response) {
            if (response.save === false) {
                swal('Oops...', response.message, 'error');
            }
            if (response.save === true) {
                alertify.logPosition('top right');
                alertify.success('OTP has been sent again.');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "inputModel", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/requests-sla/request-sla.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#r_div {\r\n  width: 50%;\r\n  border: 2px solid green;\r\n  padding: 25px;\r\n  margin: 25px;\r\n\r\n}\r\n/* Custom code */\r\n/*.mid-content {\r\n  width: 70%;\r\n  padding: 5% 0;\r\n}\r\n.sidebar {float:left;width:15%}\r\n.mid-content h3 {}\r\n.content-data {float: left; width: 75%;}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/requests-sla/request-sla.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"app-body\">\r\n\r\n  <app-sidebar>  </app-sidebar>\r\n  <main class=\"main\">\r\n    <ol class=\"breadcrumb\">\r\n     <!-- <li class=\"breadcrumb-item\">Home</li>\r\n      <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Admin</a></li>-->\r\n      <li class=\"breadcrumb-item active rob\">Services Management</li>\r\n\r\n      <!-- Breadcrumb Menu-->\r\n      <li class=\"breadcrumb-menu d-md-down-none\">\r\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group\">\r\n         <!-- <a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>\r\n          <a class=\"btn\" href=\"#\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\r\n          <a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>-->\r\n        </div>\r\n      </li>\r\n    </ol>\r\n    <div class=\"container-fluid\">\r\n      <div id=\"ui-view\"></div>\r\n    <div class=\"content-data\">\r\n      <div id=\"r_div\" class=\"upload-file\">\r\n        <form [formGroup]=\"requestSLAForm\">\r\n          <div class=\"form-group\">\r\n          <b class=\"rob\">Services Upload File:</b>\r\n          <input type=\"file\" (change)=\"fileChangeEvent_request_sla($event)\" required formControlName=\"request_sla_name\" placeholder=\"Upload file...\" />\r\n            <br>\r\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"uploadExcel_request_sla()\" [disabled]='check_request_sla'>Upload</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div id=\"r_div\" style=\"border: dashed 2px #000000;\">\r\n       <b class=\"rob\"> Download the latest Services file:</b> <br>\r\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"downloadServices()\" ><i class=\"fa fa-file-excel-o\" style=\"font-size:24px\">xls</i></button>\r\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"downloadServicesXlsxFormat()\" ><i class=\"fa fa-file-excel-o\" style=\"font-size:24px\">xlsx</i></button>\r\n      </div>\r\n\r\n      <ng4-loading-spinner> </ng4-loading-spinner>\r\n    </div>\r\n    </div>\r\n  </main>\r\n\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/requests-sla/request-sla.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestSlaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var alertify = __webpack_require__("../../../../alertify.js/dist/js/alertify.js");

var RequestSlaComponent = (function () {
    function RequestSlaComponent(_dataService, _http, spinnerService) {
        this._dataService = _dataService;
        this._http = _http;
        this.spinnerService = spinnerService;
        this.filesToUpload = [];
        this.usersData = [];
        this.propertyForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            property_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.requestSLAForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            request_sla_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.check_request_sla = true;
        this.isResetting = false;
        this.header_array = [];
    }
    RequestSlaComponent.prototype.ngOnInit = function () {
    };
    RequestSlaComponent.prototype.uploadExcel_request_sla = function () {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        formData.append('uploads[]', files[0], files[0]['name']);
        if (['xls', 'xlsx'].indexOf(files[0]['name'].split('.')[files[0]['name'].split('.').length - 1]) === -1) {
            swal('Sorry!', 'please upload xlsx file', 'error');
            return;
        }
        this.spinnerService.show();
        this._http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].url + '/services/uploadExcelProcessForRequestSLA', formData)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error); })
            .subscribe(function (response) {
            console.log('-------------------->' + JSON.stringify(response));
            _this.response = response;
            if (response.save === true) {
                setTimeout(function () {
                    _this.spinnerService.hide();
                    alertify.logPosition('top right');
                    alertify.success('Excel file uploaded successfully');
                    swal('', 'Services file uploaded successfully', 'success');
                }, 3000);
                _this.check_request_sla = true;
                _this.isResetting = true;
                setTimeout(function () { return _this.isResetting = false; }, 0);
                return false;
                // alertify.error(response.invalid_field + ' ' + 'rows have invalid  data');
            }
            if (response.save === false) {
                _this.spinnerService.hide();
                swal('Oops...', response.message, 'error');
            }
        });
    };
    RequestSlaComponent.prototype.fileChangeEvent_request_sla = function (fileInput) {
        this.check_request_sla = false;
        this.filesToUpload = fileInput.target.files;
    };
    RequestSlaComponent.prototype.downloadServices = function () {
        var _this = this;
        this.selected_value = 'services';
        this._dataService.downloadExcelProcess(this.selected_value)
            .subscribe(function (response) {
            var excel_json = {};
            var excel_array = [];
            console.log('datat::::' + JSON.stringify(response));
            // const property_name = response.users_Data[0].property_name;
            // const p_name = property_name + '.xls';
            // console.log('property_name---------->' + property_name)
            var mystyle = {
                headers: true,
                column: { style: { Font: { Bold: '1' } } },
            };
            if (response.save == 'NO') {
                swal('Oops...', response.message, 'error');
            }
            if (response.save == false) {
                console.log('flaseeeeeeeeeeeeeeeeeeeeeeeeeee:::::::::::');
                // this.header_array = [{ Phase: '' , Tower: '', Flat: '', Rooms: ''}];
                _this.header_array = [{ 'Services Type': '', 'Level 1': '', 'Level 2': '', 'Level 3': '', 'Level 4': '', 'Completion SLA (in hours)': '', 'Active': '' }];
                alasql('SELECT  `Services Type`,  `Level 1`,  `Level 2`,  `Level 3`, `Level 4`, `Completion SLA (in hours)` , `Active` INTO XLSXML("Services.xls",?) FROM ?', [mystyle, _this.header_array]);
                //  alasql('SELECT * INTO XLSX("Property.xls",?) FROM ?', ['Phase', 'Tower', 'Flat', 'Rooms']);
                //  alasql('SELECT ,  Phase,  Tower,  Flat,  Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, response.users_Data[0]]);
            }
            if (response.flag === 3) {
                console.log('services---->');
                alasql('SELECT  _id AS `id`,request_id AS `Request Ids`, service_type AS `Services Type`, level_1 AS `Level 1`, level_2 AS `Level 2`, level_3 AS `Level 3`, level_4 AS `Level 4`, sla_time  AS `Completion SLA (in hours)`, active AS `Active` INTO XLSXML("Services.xls",?) FROM ?', [mystyle, response.users_Data]);
            }
        });
    };
    RequestSlaComponent.prototype.downloadServicesXlsxFormat = function () {
        var _this = this;
        this.selected_value = 'services';
        this._dataService.downloadExcelProcess(this.selected_value)
            .subscribe(function (response) {
            var excel_json = {};
            var excel_array = [];
            console.log('datat::::' + JSON.stringify(response));
            // const property_name = response.users_Data[0].property_name;
            // const p_name = property_name + '.xls';
            // console.log('property_name---------->' + property_name)
            var mystyle = {
                headers: true,
                column: { style: { Font: { Bold: '1' } } },
            };
            if (response.save == 'NO') {
                swal('Oops...', response.message, 'error');
            }
            if (response.save == false) {
                console.log('flaseeeeeeeeeeeeeeeeeeeeeeeeeee:::::::::::');
                // this.header_array = [{ Phase: '' , Tower: '', Flat: '', Rooms: ''}];
                _this.header_array = [{ 'Services Type': '', 'Level 1': '', 'Level 2': '', 'Level 3': '', 'Level 4': '', 'Completion SLA (in hours)': '', 'Active': '' }];
                alasql('SELECT  `Services Type`,  `Level 1`,  `Level 2`,  `Level 3`, `Level 4`, `Completion SLA (in hours)` , `Active` INTO xlsx("Services.xlsx",?) FROM ?', [mystyle, _this.header_array]);
                //  alasql('SELECT * INTO XLSX("Property.xls",?) FROM ?', ['Phase', 'Tower', 'Flat', 'Rooms']);
                //  alasql('SELECT ,  Phase,  Tower,  Flat,  Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, response.users_Data[0]]);
            }
            if (response.flag === 3) {
                console.log('services---->');
                alasql('SELECT  _id AS `id`,request_id AS `Request Ids`, service_type AS `Services Type`, level_1 AS `Level 1`, level_2 AS `Level 2`, level_3 AS `Level 3`, level_4 AS `Level 4`, sla_time  AS `Completion SLA (in hours)`, active AS `Active` INTO xlsx("Services.xlsx",?) FROM ?', [mystyle, response.users_Data]);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RequestSlaComponent.prototype, "isResetting", void 0);
    RequestSlaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-request-sla',
            template: __webpack_require__("../../../../../src/app/requests-sla/request-sla.component.html"),
            styles: [__webpack_require__("../../../../../src/app/requests-sla/request-sla.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], RequestSlaComponent);
    return RequestSlaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/resident/resident.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#r_div {\r\n  width: 50%;\r\n  border: 2px solid green;\r\n  padding: 25px;\r\n  margin: 25px;\r\n\r\n\r\n}\r\n\r\n/* Custom code */\r\n/*.mid-content {\r\n  width: 70%;\r\n  padding: 5% 0;\r\n}\r\n.sidebar {float:left;width:15%}\r\n.mid-content h3 {}\r\n.content-data {float: left; width: 75%;}*/\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resident/resident.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"app-body\">\r\n\r\n  <app-sidebar>  </app-sidebar>\r\n  <main class=\"main\">\r\n    <ol class=\"breadcrumb\">\r\n      <!--<li class=\"breadcrumb-item\">Home</li>\r\n      <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Admin</a></li>-->\r\n      <li class=\"breadcrumb-item active rob\" >Resident Management</li>\r\n\r\n      <!-- Breadcrumb Menu-->\r\n      <li class=\"breadcrumb-menu d-md-down-none\">\r\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group\">\r\n         <!-- <a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>\r\n          <a class=\"btn\" href=\"#\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\r\n          <a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>-->\r\n        </div>\r\n      </li>\r\n    </ol>\r\n    <div class=\"container-fluid\">\r\n      <div id=\"ui-view\"></div>\r\n        <div class=\"content-data\">\r\n          <div id=\"r_div\" class=\"upload-file\">\r\n            <form *ngIf=\"!isResetting\" [formGroup]=\"residentForm\">\r\n              <div class=\"form-group\">\r\n                <b class=\"rob\">Resident Upload File:</b>\r\n                <input type=\"file\"  (change)=\"fileChangeEvent($event)\" required formControlName=\"resident_name\" placeholder=\"Upload file...\" />\r\n                <br>\r\n                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"uploadCsv()\" [disabled]='check_resident'>Upload</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n\r\n\r\n\r\n          </div>\r\n          <div id=\"r_div\" style=\"border: dashed 2px #000000;\">\r\n            <b class=\"rob\"> Download the latest Resident file:</b><br>\r\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"downloadResident()\" ><i class=\"fa fa-file-excel-o\" style=\"font-size:24px\">xls</i></button>\r\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"downloadResidentXlsxFormat()\" ><i class=\"fa fa-file-excel-o\" style=\"font-size:24px\">xlsx</i></button>\r\n          </div>\r\n          <ng4-loading-spinner> </ng4-loading-spinner>\r\n\r\n        </div>\r\n    </div>\r\n  </main>\r\n\r\n\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/resident/resident.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResidentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var alertify = __webpack_require__("../../../../alertify.js/dist/js/alertify.js");

var ResidentComponent = (function () {
    function ResidentComponent(_dataService, _http, spinnerService) {
        this._dataService = _dataService;
        this._http = _http;
        this.spinnerService = spinnerService;
        this.filesToUpload = [];
        this.usersData = [];
        this.propertyForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            property_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.residentForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            resident_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.check_resident = true;
        this.isResetting = false;
        this.header_array = [];
    }
    ResidentComponent.prototype.uploadCsv = function () {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        console.log(files);
        //  let formData : FormData = new FormData();
        formData.append('uploads[]', files[0], files[0]['name']);
        if (['xls', 'xlsx'].indexOf(files[0]['name'].split('.')[files[0]['name'].split('.').length - 1]) === -1) {
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
        this._http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].url + '/resident/uploadExcelProcessForResident', formData)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error); })
            .subscribe(function (response) {
            console.log('-------------------->' + JSON.stringify(response));
            _this.response = response;
            if (response.save === true) {
                setTimeout(function () {
                    _this.spinnerService.hide();
                    alertify.logPosition('top right');
                    alertify.success('Excel file uploaded successfully');
                    swal('', 'Resident file uploaded successfully', 'success');
                }, 3000);
                _this.check_resident = true;
                _this.isResetting = true;
                setTimeout(function () { return _this.isResetting = false; }, 0);
                return false;
                // alertify.error(response.invalid_row.length + ' ' + 'records failed to upload');
                // swal('Oops...', response.invalid_row + ' ' + 'rows have invalid  data', 'error');
            }
            if (response.save === false) {
                _this.spinnerService.hide();
                swal('Oops...', response.message, 'error');
            }
            /* if (response.save == 'not saved') {
              this.spinnerService.hide();
              swal('Oops...', response.message, 'error');
            }*/
        });
    };
    ResidentComponent.prototype.fileChangeEvent = function (fileInput) {
        this.check_resident = false;
        this.filesToUpload = fileInput.target.files;
    };
    ResidentComponent.prototype.downloadResident = function () {
        var _this = this;
        this.selected_value = 'Resident';
        this._dataService.downloadExcelProcess(this.selected_value)
            .subscribe(function (response) {
            var excel_json = {};
            var excel_array = [];
            console.log('datat::::' + JSON.stringify(response));
            // const property_name = response.users_Data[0].property_name;
            // const p_name = property_name + '.xls';
            // console.log('property_name---------->' + property_name)
            var mystyle = {
                headers: true,
                column: { style: { Font: { Bold: '1' } } },
            };
            if (response.save == 'NO') {
                swal('Oops...', response.message, 'error');
            }
            if (response.save == false) {
                console.log('entered into false if:::::::::::');
                // this.header_array = [{ Phase: '' , Tower: '', Flat: '', Rooms: ''}];
                _this.header_array = [{ 'First Name': '', 'Last Name': '', 'Phone Number': '', 'Email Id': '', 'Flat Id': '' }];
                alasql('SELECT  `First Name`,  `Last Name`,  `Phone Number`,  `Email Id`, `Flat Id`  INTO XLSXML("Resident.xls",?) FROM ?', [mystyle, _this.header_array]);
                //  alasql('SELECT * INTO XLSX("Property.xls",?) FROM ?', ['Phase', 'Tower', 'Flat', 'Rooms']);
                //  alasql('SELECT ,  Phase,  Tower,  Flat,  Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, response.users_Data[0]]);
            }
            if (response.flag === 1) {
                console.log('Resident---->');
                alasql('SELECT  _id AS `id`, first_name As `First Name`, last_name AS `Last Name`, phone_number AS `Phone Number`, email_id AS `Email Id` , flat_id as `Flat Id` INTO XLSXML("Resident.xls",?) FROM ?', [mystyle, response.users_Data]);
            }
        });
    };
    ResidentComponent.prototype.downloadResidentXlsxFormat = function () {
        var _this = this;
        this.selected_value = 'Resident';
        this._dataService.downloadExcelProcess(this.selected_value)
            .subscribe(function (response) {
            var excel_json = {};
            var excel_array = [];
            console.log('datat::::' + JSON.stringify(response));
            // const property_name = response.users_Data[0].property_name;
            // const p_name = property_name + '.xls';
            // console.log('property_name---------->' + property_name)
            var mystyle = {
                headers: true,
                column: { style: { Font: { Bold: '1' } } },
            };
            if (response.save == 'NO') {
                swal('Oops...', response.message, 'error');
            }
            if (response.save == false) {
                console.log('entered into false if:::::::::::');
                // this.header_array = [{ Phase: '' , Tower: '', Flat: '', Rooms: ''}];
                _this.header_array = [{ 'First Name': '', 'Last Name': '', 'Phone Number': '', 'Email Id': '', 'Flat Id': '' }];
                alasql('SELECT  `First Name`,  `Last Name`,  `Phone Number`,  `Email Id`, `Flat Id`  INTO xlsx("Resident.xlsx",?) FROM ?', [mystyle, _this.header_array]);
                //  alasql('SELECT * INTO XLSX("Property.xls",?) FROM ?', ['Phase', 'Tower', 'Flat', 'Rooms']);
                //  alasql('SELECT ,  Phase,  Tower,  Flat,  Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, response.users_Data[0]]);
            }
            if (response.flag === 1) {
                console.log('Resident---->');
                alasql('SELECT  _id AS `id`, first_name As `First Name`, last_name AS `Last Name`, phone_number AS `Phone Number`, email_id AS `Email Id` , flat_id as `Flat Id` INTO xlsx("Resident.xlsx",?) FROM ?', [mystyle, response.users_Data]);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ResidentComponent.prototype, "isResetting", void 0);
    ResidentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-resident',
            template: __webpack_require__("../../../../../src/app/resident/resident.component.html"),
            styles: [__webpack_require__("../../../../../src/app/resident/resident.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], ResidentComponent);
    return ResidentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/right-sidebar/right-sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hi{\r\n  height:600px;\r\n  background-color: black;\r\n}\r\n/*\r\n\r\n!*.container {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  margin-right: auto;\r\n  !* margin-left: auto; *!\r\n}*!\r\np {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.1em;\r\n  font-weight: 300;\r\n  line-height: 1.7em;\r\n  color: #999;\r\n}\r\n\r\na, a:hover, a:focus {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n  padding: 15px 10px;\r\n  background: #fff;\r\n  border: none;\r\n  border-radius: 0;\r\n  margin-bottom: 40px;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n.navbar-btn {\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  border: none;\r\n}\r\n\r\n.line {\r\n  width: 100%;\r\n  height: 1px;\r\n  border-bottom: 1px dashed #ddd;\r\n  margin: 40px 0;\r\n}\r\n\r\n!* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- *!\r\n.wrapper {\r\n  display: flex;\r\n  align-items: stretch;\r\n}\r\n\r\n#sidebar {\r\n  min-width: 285px;\r\n  max-width: 250px;\r\n  background: #7386D5;\r\n  color: #fff;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#sidebar.active {\r\n  margin-left: 0px;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n  padding: 20px;\r\n  background: #6d7fcc;\r\n}\r\n\r\n#sidebar ul.components {\r\n  padding: 20px 0;\r\n}\r\n\r\n#sidebar ul p {\r\n  color: #fff;\r\n  padding: 10px;\r\n}\r\n\r\n#sidebar ul li a {\r\n  padding: 10px;\r\n  font-size: 1.1em;\r\n  display: block;\r\n}\r\n#sidebar ul li a:hover {\r\n  color: #7386D5;\r\n  background: #fff;\r\n}\r\n\r\n#sidebar ul li.active > a, a[aria-expanded=\"true\"] {\r\n  color: #fff;\r\n  background: #6d7fcc;\r\n}\r\n\r\n\r\na[data-toggle=\"collapse\"] {\r\n  position: relative;\r\n}\r\n\r\na[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\r\n  content: '\\e259';\r\n  display: block;\r\n  position: absolute;\r\n  right: 20px;\r\n  font-family: 'Glyphicons Halflings';\r\n  font-size: 0.6em;\r\n}\r\na[aria-expanded=\"true\"]::before {\r\n  content: '\\e260';\r\n}\r\n\r\n\r\nul ul a {\r\n  font-size: 0.9em !important;\r\n  padding-left: 30px !important;\r\n  background: #6d7fcc;\r\n}\r\n\r\nul.CTAs {\r\n  padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n  text-align: center;\r\n  font-size: 0.9em !important;\r\n  display: block;\r\n  border-radius: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n  background: #fff;\r\n  color: #7386D5;\r\n}\r\n\r\na.article, a.article:hover {\r\n  background: #6d7fcc !important;\r\n  color: #fff !important;\r\n}\r\n\r\n\r\n\r\n!* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- *!\r\n#content {\r\n  padding: 20px;\r\n  min-height: 100vh;\r\n  transition: all 0.3s;\r\n}\r\n\r\n!* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- *!\r\n@media (max-width: 768px) {\r\n  #sidebar {\r\n    margin-left: -250px;\r\n  }\r\n  #sidebar.active {\r\n    margin-left: 0;\r\n  }\r\n  #sidebarCollapse span {\r\n    display: none;\r\n  }\r\n}\r\n\r\n!* Custom code *!\r\n.mid-content {\r\n  float: left;\r\n  margin: 5%;\r\n}\r\n.mid-content h3 {}\r\n\r\n*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/right-sidebar/right-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!--<div class=\" wrapper\">\r\n  &lt;!&ndash; Sidebar Holder &ndash;&gt;\r\n  <nav id=\"sidebar\">\r\n    <div class=\"sidebar-header\">\r\n      <h3>hubcontrol</h3>\r\n    </div>\r\n\r\n    <ul class=\"list-unstyled components\">\r\n      <li>\r\n        <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\r\n      </li>\r\n      <li class=\"active\">\r\n        <a href=\"#homeSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\">Import Master Data</a>\r\n        <ul class=\"collapse list-unstyled\" id=\"homeSubmenu\">\r\n          <li><a routerLink=\"/property\">Property</a></li>\r\n          <li><a routerLink=\"/services\">Services</a></li>\r\n          <li><a routerLink=\"/resident\">Resident</a></li>\r\n          <li><a routerLink=\"/service-provider\">Service-Provider</a></li>\r\n        </ul>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"/data-management\" routerLinkActive=\"active\">Export Master Data</a>\r\n      </li>\r\n     &lt;!&ndash; <li><a routerLink=\"/logout\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>&ndash;&gt;\r\n      &lt;!&ndash;<li><a routerLink=\"/footer\"><span class=\"glyphicon glyphicon-log-out\"></span> Form</a></li>&ndash;&gt;\r\n    </ul>\r\n\r\n\r\n  </nav>\r\n  &lt;!&ndash; Page Content Holder &ndash;&gt;\r\n  <div id=\"content\">\r\n    &lt;!&ndash;<button (click)=\"showAlert()\">Confirm alert</button>\r\n    <button (click)=\"helloAlert()\">Hello alert</button>\r\n    <button (click)=\"errorAlert()\">Error alert</button>\r\n    <button (click)=\"successAlert()\">Success alert</button>&ndash;&gt;\r\n  </div>\r\n\r\n</div>-->\r\n\r\n\r\n\r\n<div class=\"hi\" id=\"\" >\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/right-sidebar/right-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RightSidebarComponent = (function () {
    function RightSidebarComponent(_dataService, route, _http, router) {
        var _this = this;
        this._dataService = _dataService;
        this.route = route;
        this._http = _http;
        this.router = router;
        this._dataService.showUserNameSessionWise()
            .subscribe(function (response) {
            console.log('>>>>>>>>>>>>>>' + JSON.stringify(response));
            _this.userSessionName = response.user_name[0].first_name + ' ' + response.user_name[0].last_name;
            console.log('userSessionName>>>>>>>>>>>>>>' + JSON.stringify(_this.userSessionName));
            // this.dtTrigger.next();
        });
    }
    RightSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"]; })
            .subscribe(function (event) {
            var currentRoute = _this.route.root;
            while (currentRoute.children[0] !== undefined) {
                currentRoute = currentRoute.children[0];
            }
            console.log('sidebar::::::::::------->' + JSON.stringify(currentRoute.snapshot.data));
            _this.setCurrentRoute(currentRoute.snapshot.data);
        });
    };
    RightSidebarComponent.prototype.setCurrentRoute = function (route_obj) {
        this.current_route = route_obj.name;
    };
    RightSidebarComponent.prototype.navigationBar = function () {
        alert('clicked sidebar');
    };
    RightSidebarComponent.prototype.showAlert = function () {
        swal({
            title: 'Are you sure?',
            text: 'You wont be able to revert this!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function () {
            swal('Deleted!', 'Your file has been deleted.', 'success');
        });
    };
    RightSidebarComponent.prototype.successAlert = function () {
        swal('Cool!', 'Successful Login.', 'success');
    };
    RightSidebarComponent.prototype.helloAlert = function () {
        swal('Hello world!');
    };
    RightSidebarComponent.prototype.errorAlert = function () {
        swal('Oops...', 'Something went wrong!', 'error');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RightSidebarComponent.prototype, "inputModel", void 0);
    RightSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-right-sidebar',
            template: __webpack_require__("../../../../../src/app/right-sidebar/right-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/right-sidebar/right-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], RightSidebarComponent);
    return RightSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_management_data_management_component__ = __webpack_require__("../../../../../src/app/data-management/data-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enquiry_enquiry_component__ = __webpack_require__("../../../../../src/app/enquiry/enquiry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__resident_resident_component__ = __webpack_require__("../../../../../src/app/resident/resident.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_provider_service_provider_component__ = __webpack_require__("../../../../../src/app/service-provider/service-provider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__property_property_component__ = __webpack_require__("../../../../../src/app/property/property.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__requests_sla_request_sla_component__ = __webpack_require__("../../../../../src/app/requests-sla/request-sla.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__customer_experience_customer_experience_component__ = __webpack_require__("../../../../../src/app/customer-experience/customer-experience.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__privacy_policy_privacy_policy_component__ = __webpack_require__("../../../../../src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__terms_conditions_terms_conditions_component__ = __webpack_require__("../../../../../src/app/terms-conditions/terms-conditions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_info_app_info_component__ = __webpack_require__("../../../../../src/app/app-info/app-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__multi_wizard_personal_personal_component__ = __webpack_require__("../../../../../src/app/multi-wizard/personal/personal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__multi_wizard_work_work_component__ = __webpack_require__("../../../../../src/app/multi-wizard/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__multi_wizard_address_address_component__ = __webpack_require__("../../../../../src/app/multi-wizard/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__multi_wizard_result_result_component__ = __webpack_require__("../../../../../src/app/multi-wizard/result/result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__multi_wizard_workflow_workflow_guard_service__ = __webpack_require__("../../../../../src/app/multi-wizard/workflow/workflow-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















/* Feature Components */





var routes = [
    { path: 'data-management', component: __WEBPACK_IMPORTED_MODULE_2__data_management_data_management_component__["a" /* DataManagementComponent */], data: { name: 'data-management' } },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashBoardComponent */], data: { name: 'dashboard' }, canActivate: [__WEBPACK_IMPORTED_MODULE_15__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'resident', component: __WEBPACK_IMPORTED_MODULE_8__resident_resident_component__["a" /* ResidentComponent */], data: { name: 'resident' }, canActivate: [__WEBPACK_IMPORTED_MODULE_15__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'property', component: __WEBPACK_IMPORTED_MODULE_10__property_property_component__["a" /* PropertyComponent */], data: { name: 'property' }, canActivate: [__WEBPACK_IMPORTED_MODULE_15__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'service-provider', component: __WEBPACK_IMPORTED_MODULE_9__service_provider_service_provider_component__["a" /* ServiceProviderComponent */], data: { name: 'service-provider' }, canActivate: [__WEBPACK_IMPORTED_MODULE_15__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'services', component: __WEBPACK_IMPORTED_MODULE_12__requests_sla_request_sla_component__["a" /* RequestSlaComponent */], data: { name: 'services' }, canActivate: [__WEBPACK_IMPORTED_MODULE_15__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'appexperience', component: __WEBPACK_IMPORTED_MODULE_16__customer_experience_customer_experience_component__["a" /* CustomerExperienceComponent */], data: { name: 'appexperience' }, canActivate: [__WEBPACK_IMPORTED_MODULE_15__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'apppolicy', component: __WEBPACK_IMPORTED_MODULE_17__privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */], data: { name: 'apppolicy' }, canActivate: [__WEBPACK_IMPORTED_MODULE_15__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'appterms', component: __WEBPACK_IMPORTED_MODULE_18__terms_conditions_terms_conditions_component__["a" /* TermsConditionsComponent */], data: { name: 'appterms' }, canActivate: [__WEBPACK_IMPORTED_MODULE_15__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'appinfo', component: __WEBPACK_IMPORTED_MODULE_19__app_info_app_info_component__["a" /* AppInfoComponent */], data: { name: 'appinfo' }, canActivate: [__WEBPACK_IMPORTED_MODULE_15__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'sidebar', component: __WEBPACK_IMPORTED_MODULE_11__sidebar_sidebar_component__["a" /* SidebarComponent */], data: { name: 'sidebar' } },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_14__logout_logout_component__["a" /* LogoutComponent */], data: { name: 'logout' } },
    { path: 'footer', component: __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__["a" /* FooterComponent */], data: { name: 'footer' } },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */], data: { name: 'login' } },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__enquiry_enquiry_component__["a" /* EnquiryComponent */], data: { name: 'home' } },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */], data: { name: 'register' } },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__index_index_component__["a" /* IndexComponent */], data: { name: 'index' } },
    // 1st Route
    { path: 'personal', component: __WEBPACK_IMPORTED_MODULE_20__multi_wizard_personal_personal_component__["a" /* PersonalComponent */] },
    // 2nd Route
    { path: 'work', component: __WEBPACK_IMPORTED_MODULE_21__multi_wizard_work_work_component__["a" /* WorkComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__multi_wizard_workflow_workflow_guard_service__["a" /* WorkflowGuard */]] },
    // 3rd Route
    { path: 'address', component: __WEBPACK_IMPORTED_MODULE_22__multi_wizard_address_address_component__["a" /* AddressComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__multi_wizard_workflow_workflow_guard_service__["a" /* WorkflowGuard */]] },
    // 4th Route
    { path: 'result', component: __WEBPACK_IMPORTED_MODULE_23__multi_wizard_result_result_component__["a" /* ResultComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_24__multi_wizard_workflow_workflow_guard_service__["a" /* WorkflowGuard */]] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]],
            providers: [__WEBPACK_IMPORTED_MODULE_24__multi_wizard_workflow_workflow_guard_service__["a" /* WorkflowGuard */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/service-provider/service-provider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#r_div {\r\n  width: 50%;\r\n  border: 2px solid green;\r\n  padding: 25px;\r\n  margin: 25px;\r\n\r\n}\r\n/* Custom code */\r\n/*.mid-content {\r\n  width: 70%;\r\n  padding: 5% 0;\r\n}\r\n.sidebar {float:left;width:15%}\r\n.mid-content h3 {}\r\n.content-data {float: left; width: 75%;}*/\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/service-provider/service-provider.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"app-body\">\n\n  <app-sidebar>  </app-sidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n     <!-- <li class=\"breadcrumb-item\">Home</li>\n      <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard\">Admin</a></li>-->\n      <li class=\"breadcrumb-item active rob\">Provider Management</li>\n\n      <!-- Breadcrumb Menu-->\n      <li class=\"breadcrumb-menu d-md-down-none\">\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group\">\n          <!--<a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>\n          <a class=\"btn\" href=\"#\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n          <a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>-->\n        </div>\n      </li>\n    </ol>\n    <div class=\"container-fluid\">\n      <div id=\"ui-view\"></div>\n        <div class=\"content-data\">\n          <div id=\"r_div\" class=\"upload-file\">\n            <form [formGroup]=\"serviceProviderForm\">\n              <div class=\"form-group\">\n              <b class=\"rob\">Service Provider Upload File:</b>\n              <input type=\"file\" (change)=\"fileChangeEvent_service_provider($event)\" required formControlName=\"provider_name\" placeholder=\"Upload file...\" />\n                <br>\n              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"uploadExcel_service_provider()\" [disabled]='check_service_provider'>Upload</button>\n              </div>\n            </form>\n          </div>\n          <div id=\"r_div\" style=\"border: dashed 2px #000000;\">\n           <b class=\"rob\"> Download the latest Service Provider file:</b> <br>\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"downloadServiceProvider()\" ><i class=\"fa fa-file-excel-o\" style=\"font-size:24px\">xls</i></button>\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"downloadServiceProviderXlsxFormat()\" ><i class=\"fa fa-file-excel-o\" style=\"font-size:24px\">xlsx</i></button>\n          </div>\n\n          <ng4-loading-spinner> </ng4-loading-spinner>\n        </div>\n    </div>\n  </main>\n\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/service-provider/service-provider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProviderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var alertify = __webpack_require__("../../../../alertify.js/dist/js/alertify.js");

var ServiceProviderComponent = (function () {
    function ServiceProviderComponent(_dataService, _http, spinnerService) {
        this._dataService = _dataService;
        this._http = _http;
        this.spinnerService = spinnerService;
        this.filesToUpload = [];
        this.usersData = [];
        this.propertyForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            property_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.serviceProviderForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            provider_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.check_service_provider = true;
        this.isResetting = false;
        this.header_array = [];
    }
    ServiceProviderComponent.prototype.ngOnInit = function () {
    };
    ServiceProviderComponent.prototype.uploadExcel_service_provider = function () {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        formData.append('uploads[]', files[0], files[0]['name']);
        if (['xls', 'xlsx'].indexOf(files[0]['name'].split('.')[files[0]['name'].split('.').length - 1]) === -1) {
            swal('Sorry!', 'please upload xlsx file', 'error');
            return;
        }
        this.spinnerService.show();
        this._http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].url + '/serviceprovider/uploadExcelProcessForServiceProvider', formData)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error); })
            .subscribe(function (response) {
            console.log('-------------------->' + JSON.stringify(response));
            _this.response = response;
            if (response.save === true) {
                setTimeout(function () {
                    _this.spinnerService.hide();
                    alertify.logPosition('bottom-right');
                    alertify.success('Excel file uploaded successfully');
                    swal('', 'Service Provider file uploaded successfully', 'success');
                }, 3000);
                _this.check_service_provider = true;
                _this.isResetting = true;
                setTimeout(function () { return _this.isResetting = false; }, 0);
                return false;
                // alertify.error(response.invalid_row.length + ' ' + 'records failed to upload');
                // swal('Oops...', response.invalid_row + ' ' + 'rows have invalid  data', 'error');
            }
            if (response.save === false) {
                _this.spinnerService.hide();
                swal('Oops...', response.message, 'error');
            }
            if (response.save == 'Not Saved') {
                _this.spinnerService.hide();
                swal('Oops...', response.message, 'error');
            }
        });
    };
    ServiceProviderComponent.prototype.fileChangeEvent_service_provider = function (fileInput) {
        this.check_service_provider = false;
        this.filesToUpload = fileInput.target.files;
    };
    ServiceProviderComponent.prototype.downloadServiceProvider = function () {
        var _this = this;
        this.selected_value = 'Service-Provider';
        this._dataService.downloadExcelProcess(this.selected_value)
            .subscribe(function (response) {
            var excel_json = {};
            var excel_array = [];
            console.log('datat::::' + JSON.stringify(response));
            // const property_name = response.users_Data[0].property_name;
            // const p_name = property_name + '.xls';
            // console.log('property_name---------->' + property_name)
            var mystyle = {
                headers: true,
                column: { style: { Font: { Bold: '1' } } },
            };
            if (response.save == 'NO') {
                swal('Oops...', response.message, 'error');
            }
            if (response.save == false) {
                console.log('flaseeeeeeeeeeeeeeeeeeeeeeeeeee:::::::::::');
                // this.header_array = [{ Phase: '' , Tower: '', Flat: '', Rooms: ''}];
                _this.header_array = [{ 'First Name': '', 'Last Name': '', 'Phone Number': '', 'Email Id': '', 'Is Manager (only one can be the manager)': '', 'Request Types': '' }];
                alasql('SELECT  `First Name`,  `Last Name`,  `Phone Number`,  `Email Id`, `Is Manager (only one can be the manager)`, `Request Types` INTO XLSXML("Service-Provider.xls",?) FROM ?', [mystyle, _this.header_array]);
                //  alasql('SELECT * INTO XLSX("Property.xls",?) FROM ?', ['Phase', 'Tower', 'Flat', 'Rooms']);
                //  alasql('SELECT ,  Phase,  Tower,  Flat,  Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, response.users_Data[0]]);
            }
            if (response.flag === 2) {
                console.log('Service-Provider---->');
                alasql('SELECT _id AS `id`, first_name AS `First Name`, last_name AS `Last Name`, phone_number AS `Phone Number`, email_id AS `Email Id`,is_manager AS `Is Manager (only one can be the manager)`,request_types AS `Request Types`, Active AS `Active` INTO XLSXML("Service-Provider.xls",?) FROM ?', [mystyle, response.users_Data]);
            }
        });
    };
    ServiceProviderComponent.prototype.downloadServiceProviderXlsxFormat = function () {
        var _this = this;
        this.selected_value = 'Service-Provider';
        this._dataService.downloadExcelProcess(this.selected_value)
            .subscribe(function (response) {
            var excel_json = {};
            var excel_array = [];
            console.log('datat::::' + JSON.stringify(response));
            // const property_name = response.users_Data[0].property_name;
            // const p_name = property_name + '.xls';
            // console.log('property_name---------->' + property_name)
            var mystyle = {
                headers: true,
                column: { style: { Font: { Bold: '1' } } },
            };
            if (response.save == 'NO') {
                swal('Oops...', response.message, 'error');
            }
            if (response.save == false) {
                console.log('flaseeeeeeeeeeeeeeeeeeeeeeeeeee:::::::::::');
                // this.header_array = [{ Phase: '' , Tower: '', Flat: '', Rooms: ''}];
                _this.header_array = [{ 'First Name': '', 'Last Name': '', 'Phone Number': '', 'Email Id': '', 'Is Manager (only one can be the manager)': '', 'Request Types': '' }];
                alasql('SELECT  `First Name`,  `Last Name`,  `Phone Number`,  `Email Id`, `Is Manager (only one can be the manager)`, `Request Types` INTO xlsx("Service-Provider.xlsx",?) FROM ?', [mystyle, _this.header_array]);
                //  alasql('SELECT * INTO XLSX("Property.xls",?) FROM ?', ['Phase', 'Tower', 'Flat', 'Rooms']);
                //  alasql('SELECT ,  Phase,  Tower,  Flat,  Rooms   INTO XLSXML("Property.xls",?) FROM ?', [mystyle, response.users_Data[0]]);
            }
            if (response.flag === 2) {
                console.log('Service-Provider---->');
                alasql('SELECT _id AS `id`, first_name AS `First Name`, last_name AS `Last Name`, phone_number AS `Phone Number`, email_id AS `Email Id`,is_manager AS `Is Manager (only one can be the manager)`,request_types AS `Request Types` INTO xlsx("Service-Provider.xlsx",?) FROM ?', [mystyle, response.users_Data]);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ServiceProviderComponent.prototype, "isResetting", void 0);
    ServiceProviderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-service-provider',
            template: __webpack_require__("../../../../../src/app/service-provider/service-provider.component.html"),
            styles: [__webpack_require__("../../../../../src/app/service-provider/service-provider.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], ServiceProviderComponent);
    return ServiceProviderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n\r\n!*.container {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  margin-right: auto;\r\n  !* margin-left: auto; *!\r\n}*!\r\np {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.1em;\r\n  font-weight: 300;\r\n  line-height: 1.7em;\r\n  color: #999;\r\n}\r\n\r\na, a:hover, a:focus {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n  padding: 15px 10px;\r\n  background: #fff;\r\n  border: none;\r\n  border-radius: 0;\r\n  margin-bottom: 40px;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n.navbar-btn {\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  border: none;\r\n}\r\n\r\n.line {\r\n  width: 100%;\r\n  height: 1px;\r\n  border-bottom: 1px dashed #ddd;\r\n  margin: 40px 0;\r\n}\r\n\r\n!* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- *!\r\n.wrapper {\r\n  display: flex;\r\n  align-items: stretch;\r\n}\r\n\r\n#sidebar {\r\n  min-width: 285px;\r\n  max-width: 250px;\r\n  background: #7386D5;\r\n  color: #fff;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#sidebar.active {\r\n  margin-left: 0px;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n  padding: 20px;\r\n  background: #6d7fcc;\r\n}\r\n\r\n#sidebar ul.components {\r\n  padding: 20px 0;\r\n}\r\n\r\n#sidebar ul p {\r\n  color: #fff;\r\n  padding: 10px;\r\n}\r\n\r\n#sidebar ul li a {\r\n  padding: 10px;\r\n  font-size: 1.1em;\r\n  display: block;\r\n}\r\n#sidebar ul li a:hover {\r\n  color: #7386D5;\r\n  background: #fff;\r\n}\r\n\r\n#sidebar ul li.active > a, a[aria-expanded=\"true\"] {\r\n  color: #fff;\r\n  background: #6d7fcc;\r\n}\r\n\r\n\r\na[data-toggle=\"collapse\"] {\r\n  position: relative;\r\n}\r\n\r\na[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\r\n  content: '\\e259';\r\n  display: block;\r\n  position: absolute;\r\n  right: 20px;\r\n  font-family: 'Glyphicons Halflings';\r\n  font-size: 0.6em;\r\n}\r\na[aria-expanded=\"true\"]::before {\r\n  content: '\\e260';\r\n}\r\n\r\n\r\nul ul a {\r\n  font-size: 0.9em !important;\r\n  padding-left: 30px !important;\r\n  background: #6d7fcc;\r\n}\r\n\r\nul.CTAs {\r\n  padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n  text-align: center;\r\n  font-size: 0.9em !important;\r\n  display: block;\r\n  border-radius: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n  background: #fff;\r\n  color: #7386D5;\r\n}\r\n\r\na.article, a.article:hover {\r\n  background: #6d7fcc !important;\r\n  color: #fff !important;\r\n}\r\n\r\n\r\n\r\n!* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- *!\r\n#content {\r\n  padding: 20px;\r\n  min-height: 100vh;\r\n  transition: all 0.3s;\r\n}\r\n\r\n!* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- *!\r\n@media (max-width: 768px) {\r\n  #sidebar {\r\n    margin-left: -250px;\r\n  }\r\n  #sidebar.active {\r\n    margin-left: 0;\r\n  }\r\n  #sidebarCollapse span {\r\n    display: none;\r\n  }\r\n}\r\n\r\n!* Custom code *!\r\n.mid-content {\r\n  float: left;\r\n  margin: 5%;\r\n}\r\n.mid-content h3 {}\r\n\r\n*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!--<div class=\" wrapper\">\r\n  &lt;!&ndash; Sidebar Holder &ndash;&gt;\r\n  <nav id=\"sidebar\">\r\n    <div class=\"sidebar-header\">\r\n      <h3>hubcontrol</h3>\r\n    </div>\r\n\r\n    <ul class=\"list-unstyled components\">\r\n      <li>\r\n        <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\r\n      </li>\r\n      <li class=\"active\">\r\n        <a href=\"#homeSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\">Import Master Data</a>\r\n        <ul class=\"collapse list-unstyled\" id=\"homeSubmenu\">\r\n          <li><a routerLink=\"/property\">Property</a></li>\r\n          <li><a routerLink=\"/services\">Services</a></li>\r\n          <li><a routerLink=\"/resident\">Resident</a></li>\r\n          <li><a routerLink=\"/service-provider\">Service-Provider</a></li>\r\n        </ul>\r\n      </li>\r\n      <li>\r\n        <a routerLink=\"/data-management\" routerLinkActive=\"active\">Export Master Data</a>\r\n      </li>\r\n     &lt;!&ndash; <li><a routerLink=\"/logout\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>&ndash;&gt;\r\n      &lt;!&ndash;<li><a routerLink=\"/footer\"><span class=\"glyphicon glyphicon-log-out\"></span> Form</a></li>&ndash;&gt;\r\n    </ul>\r\n\r\n\r\n  </nav>\r\n  &lt;!&ndash; Page Content Holder &ndash;&gt;\r\n  <div id=\"content\">\r\n    &lt;!&ndash;<button (click)=\"showAlert()\">Confirm alert</button>\r\n    <button (click)=\"helloAlert()\">Hello alert</button>\r\n    <button (click)=\"errorAlert()\">Error alert</button>\r\n    <button (click)=\"successAlert()\">Success alert</button>&ndash;&gt;\r\n  </div>\r\n\r\n</div>-->\r\n\r\n\r\n\r\n<div class=\"sidebar clearfix collapse\" id=\"collapseThree\" >\r\n  <nav class=\"sidebar-nav\">\r\n    <ul class=\"nav\">\r\n      <li class=\"nav-item\"  routerLinkActive=\"active\">\r\n        <a class=\"nav-link rob\" routerLink=\"/dashboard\" ><i class=\"icon-speedometer\"></i>Dashboard</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n  <button class=\"sidebar-minimizer brand-minimizer\"  type=\"button\"  onclick=\"test()\"></button>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidebarComponent = (function () {
    function SidebarComponent(_dataService, route, _http, router) {
        var _this = this;
        this._dataService = _dataService;
        this.route = route;
        this._http = _http;
        this.router = router;
        this._dataService.showUserNameSessionWise()
            .subscribe(function (response) {
            console.log('>>>>>>>>>>>>>>' + JSON.stringify(response));
            _this.userSessionName = response.user_name[0].first_name + ' ' + response.user_name[0].last_name;
            console.log('userSessionName>>>>>>>>>>>>>>' + JSON.stringify(_this.userSessionName));
            // this.dtTrigger.next();
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"]; })
            .subscribe(function (event) {
            var currentRoute = _this.route.root;
            while (currentRoute.children[0] !== undefined) {
                currentRoute = currentRoute.children[0];
            }
            console.log('sidebar::::::::::------->' + JSON.stringify(currentRoute.snapshot.data));
            _this.setCurrentRoute(currentRoute.snapshot.data);
        });
    };
    SidebarComponent.prototype.setCurrentRoute = function (route_obj) {
        this.current_route = route_obj.name;
    };
    SidebarComponent.prototype.navigationBar = function () {
        alert('clicked sidebar');
    };
    SidebarComponent.prototype.showAlert = function () {
        swal({
            title: 'Are you sure?',
            text: 'You wont be able to revert this!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function () {
            swal('Deleted!', 'Your file has been deleted.', 'success');
        });
    };
    SidebarComponent.prototype.successAlert = function () {
        swal('Cool!', 'Successful Login.', 'success');
    };
    SidebarComponent.prototype.helloAlert = function () {
        swal('Hello world!');
    };
    SidebarComponent.prototype.errorAlert = function () {
        swal('Oops...', 'Something went wrong!', 'error');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "inputModel", void 0);
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/terms-conditions/terms-conditions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Custom code */\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/terms-conditions/terms-conditions.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<div class=\"app-body clearfix\">\n  <app-sidebar>  </app-sidebar>\n  <main class=\"main\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">Home</li>\n      <li class=\"breadcrumb-item\"><a href=\"#\">Admin</a></li>\n      <li class=\"breadcrumb-item active\">Terms & Conditions</li>\n\n      <!-- Breadcrumb Menu-->\n      <li class=\"breadcrumb-menu d-md-down-none\">\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group\">\n        <!--  <a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>\n          <a class=\"btn\" href=\"#\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n          <a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>-->\n        </div>\n      </li>\n    </ol>\n\n\n    <div class=\"container-fluid\">\n      Welcome to Terms & Conditions Page!!!\n    </div>\n\n  </main>\n</div>\n\n\n<app-footer></app-footer>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/terms-conditions/terms-conditions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsConditionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TermsConditionsComponent = (function () {
    function TermsConditionsComponent(_dataService, _http) {
        this._dataService = _dataService;
        this._http = _http;
        this.userEditData = {};
        this.editForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            type_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            level1List: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            level2List: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            level3List: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    TermsConditionsComponent.prototype.ngOnInit = function () {
    };
    TermsConditionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__("../../../../../src/app/terms-conditions/terms-conditions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/terms-conditions/terms-conditions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]])
    ], TermsConditionsComponent);
    return TermsConditionsComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/e-images/melogo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "melogo.240c7cd7f0f640005309.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true,
    url: 'http://localhost:80'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map