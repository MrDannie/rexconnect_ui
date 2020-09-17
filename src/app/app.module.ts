import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './core/alert/alert/alert.component';
import { ApiDocumentationComponent } from './pages/user/user-layout/api-documentation/api-documentation.component';
import { CreateBusinessComponent } from './pages/user/user-layout/create-business/create-business.component';
import { UserLayoutComponent } from './pages/user/user-layout/user-layout.component';
import { AllPackagesComponent } from './pages/user/user-layout/packages/all-packages/all-packages.component';
import { AuditLogComponent } from './pages/user/user-layout/settings/audit-log/audit-log.component';
import { IdToCommentPipe } from './pages/user/user-layout/shared/id-to-comment.pipe';
import { UnfinishedUsersComponent } from './pages/user/user-layout/unfinished-users/unfinished-users.component';
import { UserManagementComponent } from './pages/user/user-layout/user-management/user-management.component';
import { AllServicesComponent } from './pages/landing-page/all-services/all-services.component';
import { CompleteRegistrationComponent } from './pages/landing-page/authentication/complete-registration/complete-registration.component';
import { CreateAccountComponent } from './pages/landing-page/authentication/create-account/create-account.component';
import { RecoverPasswordComponent } from './pages/landing-page/authentication/recover-password/recover-password.component';
import { SetNewPasswordComponent } from './pages/landing-page/authentication/set-new-password/set-new-password.component';
import { SignInComponent } from './pages/landing-page/authentication/sign-in/sign-in.component';
import { FaqsComponent } from './pages/landing-page/faqs/faqs.component';
import { FooterComponent } from './pages/landing-page/footer/footer.component';
import { HomeComponent } from './pages/landing-page/home/home.component';
import { LandingNavComponent } from './pages/landing-page/landing-nav/landing-nav.component';
import { PrivacyPolicyComponent } from './pages/landing-page/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './pages/landing-page/terms-of-use/terms-of-use.component';
import { AdminSideNavComponent } from './pages/shared/components/admin-side-nav/admin-side-nav.component';
import { AdminTopNavComponent } from './pages/shared/components/admin-top-nav/admin-top-nav.component';
import { SideNavigationComponent } from './pages/shared/components/side-navigation/side-navigation.component';
import { TopNavigationComponent } from './pages/shared/components/top-navigation/top-navigation.component';
import { SanitizePermissionsPipe } from './pages/shared/pipes/sanitize-permissions.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ApiDocumentationComponent,
    CreateBusinessComponent,
    UserLayoutComponent,
    AllPackagesComponent,
    AuditLogComponent,
    IdToCommentPipe,
    UnfinishedUsersComponent,
    UserManagementComponent,
    AllServicesComponent,
    CompleteRegistrationComponent,
    CreateAccountComponent,
    RecoverPasswordComponent,
    SetNewPasswordComponent,
    SignInComponent,
    FaqsComponent,
    FooterComponent,
    HomeComponent,
    LandingNavComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    AdminSideNavComponent,
    AdminTopNavComponent,
    SideNavigationComponent,
    TopNavigationComponent,
    SanitizePermissionsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
