import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BusinessLoginComponent } from './business-login/business-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from "src/environments/environment";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserLoginComponent,
    BusinessLoginComponent
  ],
  imports: [
     BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule,
     FireModule.initializeApp(environment.firebaseConfig),
    FirestoreModule
    ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
