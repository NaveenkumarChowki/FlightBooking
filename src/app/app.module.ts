import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MyMaterialModule } from  './material.module';
import { MatMenuModule} from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { from } from 'rxjs';
import {MatTableModule} from '@angular/material/table';

import { SearchBusComponent } from './search-bus/search-bus.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlightDetailsComponent } from './flight-details/flight-details.component';

import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
   
    RegistrationComponentComponent,
    LoginComponentComponent,
    SearchBusComponent,
    FlightDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    FormsModule,
    MatMenuModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    RouterModule.forRoot([
      
      { path: 'register', component: RegistrationComponentComponent },
      { path: 'login', component: LoginComponentComponent },
       { path:'search',component:SearchBusComponent},
     
       
     
    ]),
    
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
