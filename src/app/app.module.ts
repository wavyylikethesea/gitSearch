import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyprofileComponent } from './my-profile/my-profile.component';
import { UserComponent } from './user/user.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { RoutingModule} from './routing/routing.module';
import { FormsModule} from '@angular/forms';
import { RepositoryComponent } from './repository/repository.component';
import { BoldDirective } from './bold.directive';
import { DateOfCreationPipe } from './date-of-creation.pipe';
//Defining Routes

@NgModule({
  declarations: [
    AppComponent,
    MyprofileComponent,
    UserComponent,
    RepositoryComponent,
    BoldDirective,
    DateOfCreationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
