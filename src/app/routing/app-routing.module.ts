import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { DataManagementComponent } from '../data-management/data-management.component';
import { LoginComponent } from '../login/login.component';
import { EnquiryComponent } from '../enquiry/enquiry.component';
import { RegisterComponent } from '../register/register.component';
import { IndexComponent } from '../index/index.component';
import { DashBoardComponent } from '../dashboard/dashboard.component';
import { ResidentComponent } from '../resident/resident.component';
import { ServiceProviderComponent } from '../service-provider/service-provider.component';
import { PropertyComponent } from '../property/property.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RequestSlaComponent } from '../requests-sla/request-sla.component';
import { FooterComponent } from '../footer/footer.component';
import { LogoutComponent } from '../logout/logout.component';
import { AuthGuard } from '../auth-guard.service';
import { CustomerExperienceComponent } from '../customer-experience/customer-experience.component';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';
import { AppInfoComponent } from '../app-info/app-info.component';
import { NavbarComponent }    from '../multi-wizard/navbar/navbar.component';

/* Feature Components */
import { PersonalComponent }  from '../multi-wizard/personal/personal.component';
import { WorkComponent }      from '../multi-wizard/work/work.component';
import { AddressComponent }   from '../multi-wizard/address/address.component';
import { ResultComponent }    from '../multi-wizard/result/result.component';
import { FormDataService }    from '../multi-wizard/data/formData.service';
import { WorkflowGuard }        from '../multi-wizard/workflow/workflow-guard.service';
import { WorkflowService }      from '../multi-wizard/workflow/workflow.service';
const routes: Routes = [
  {path: 'data-management', component: DataManagementComponent, data: {name: 'data-management'}},
  {path: 'dashboard', component: DashBoardComponent, data: {name: 'dashboard'}, canActivate: [AuthGuard] },
  {path: 'resident', component: ResidentComponent, data: {name: 'resident'}, canActivate: [AuthGuard]},
  {path: 'property', component: PropertyComponent, data: {name: 'property'} , canActivate: [AuthGuard]},
  {path: 'service-provider', component: ServiceProviderComponent, data: {name: 'service-provider'} , canActivate: [AuthGuard]},
  {path: 'services', component: RequestSlaComponent, data: {name: 'services'} , canActivate: [AuthGuard]},
  {path: 'appexperience', component: CustomerExperienceComponent, data: {name: 'appexperience'} , canActivate: [AuthGuard]},
  {path: 'apppolicy', component: PrivacyPolicyComponent, data: {name: 'apppolicy'} , canActivate: [AuthGuard]},
  {path: 'appterms', component: TermsConditionsComponent, data: {name: 'appterms'} , canActivate: [AuthGuard]},
  {path: 'appinfo', component: AppInfoComponent, data: {name: 'appinfo'} , canActivate: [AuthGuard]},
  {path: 'sidebar', component: SidebarComponent, data: {name: 'sidebar'}},
  {path: 'logout', component: LogoutComponent, data: {name: 'logout'}},
  {path: 'footer', component: FooterComponent, data: {name: 'footer'}},
  { path: 'login', component : LoginComponent, data: {name: 'login'}},
  { path: 'home', component : EnquiryComponent, data: {name: 'home'}},
  { path: 'register', component : RegisterComponent, data: {name: 'register'}},
  { path: '', component : IndexComponent, data: {name: 'index'}},
  // 1st Route
  { path: 'personal',  component: PersonalComponent },
  // 2nd Route
  { path: 'work',  component: WorkComponent,canActivate: [WorkflowGuard] },
  // 3rd Route
  { path: 'address',  component: AddressComponent, canActivate: [WorkflowGuard] },
  // 4th Route
  { path: 'result',  component: ResultComponent,canActivate: [WorkflowGuard] },
  // 5th Route
 /* {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  }*/
]

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true })],
    exports: [ RouterModule ],
    providers: [WorkflowGuard]

})

export class AppRoutingModule {}
