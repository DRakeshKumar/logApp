import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';
import {Router, RouterModule} from '@angular/router';
// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { AuthModule } from './auth/authenticate.module';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { DataManagementComponent } from './data-management/data-management.component';
import { LoginComponent } from './login/login.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { RegisterComponent } from './register/register.component';
import { ResidentComponent } from './resident/resident.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { PropertyComponent } from './property/property.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RequestSlaComponent } from './requests-sla/request-sla.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { CustomerExperienceComponent } from './customer-experience/customer-experience.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { AppInfoComponent } from './app-info/app-info.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { DataTablesModule } from 'angular-datatables';
import * as _ from "lodash";
import { DashBoardComponent } from './dashboard/dashboard.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { IndexComponent } from './index/index.component';
import {ModalModule} from "ng2-modal";
import { NavbarComponent }    from './multi-wizard/navbar/navbar.component';

/* Feature Components */
import { PersonalComponent }  from './multi-wizard/personal/personal.component';
import { WorkComponent }      from './multi-wizard/work/work.component';
import { AddressComponent }   from './multi-wizard/address/address.component';
import { ResultComponent }    from './multi-wizard/result/result.component';
import { FormDataService }    from './multi-wizard/data/formData.service';
import { WorkflowService }    from './multi-wizard/workflow/workflow.service';
import { WorkflowGuard }    from './multi-wizard/workflow/workflow-guard.service';
@NgModule({
  declarations: [
    AppComponent ,
    DataManagementComponent,
    LoginComponent,
    DashBoardComponent ,
    ResidentComponent ,
    PropertyComponent ,
    ServiceProviderComponent ,
    SidebarComponent ,
    RightSidebarComponent,
    IndexComponent,
    RequestSlaComponent ,
    CustomerExperienceComponent ,
    PrivacyPolicyComponent ,
    TermsConditionsComponent ,
    AppInfoComponent ,
    FooterComponent ,
    LogoutComponent,
    EnquiryComponent,
    RegisterComponent,
    HeaderComponent,NavbarComponent, PersonalComponent, WorkComponent, AddressComponent, ResultComponent ],
  imports: [
    BrowserModule,
    HttpModule, FormsModule, ReactiveFormsModule, AuthModule, AppRoutingModule, DataTablesModule, Ng4LoadingSpinnerModule.forRoot(), ModalModule,
   /* RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      },
      { path: '', component: LoginComponent },
      {path: 'admin' , component: AdminComponent},
      {path: 'dashboard', component: DashBoardComponent},
      {path: 'resident' , component: ResidentComponent},
      {path: 'property' , component: PropertyComponent},
      {path: 'service-provider' , component: ServiceProviderComponent},
      {path: 'services' , component: RequestSlaComponent},
      {path: 'sidebar' , component: SidebarComponent},
      ] )*/
  ],
  providers: [DataService, AuthService, AuthGuard, Ng4LoadingSpinnerService,
    { provide: FormDataService, useClass: FormDataService },
    { provide: WorkflowService, useClass: WorkflowService }], // <-Add DataService
  bootstrap: [AppComponent]
})
export class AppModule { }
