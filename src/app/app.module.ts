// import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { TaskComponent } from './task/task.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { StudioComponent } from './studio/studio.component';
import { AddtaskStudioComponent } from './addtask-studio/addtask-studio.component';
import { GettaskstudioComponent } from './gettaskstudio/gettaskstudio.component';
import { UploadstudioComponent } from './uploadstudio/uploadstudio.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UploaduserComponent } from './uploaduser/uploaduser.component';
import { HighpriorityComponent } from './highpriority/highpriority.component';
import { LowpriorityComponent } from './lowpriority/lowpriority.component';
import { MediumpriorityComponent } from './mediumpriority/mediumpriority.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './footer/footer.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';



// import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TaskComponent,
    AddtaskComponent,
    ViewtaskComponent,
    UpdatetaskComponent,
    StudioComponent,
    AddtaskStudioComponent,
    GettaskstudioComponent,
    UploadstudioComponent,
    UserdetailsComponent,
    UploaduserComponent,
    HighpriorityComponent,
    LowpriorityComponent,
    MediumpriorityComponent,
    NotificationsComponent,
    FooterComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
   HttpClientModule,
   MatSnackBarModule,
   NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
