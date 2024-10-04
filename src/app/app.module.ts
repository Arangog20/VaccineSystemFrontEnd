import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VaccineComponent } from './components/vaccine/vaccine.component';
import { HomeComponent } from './components/home/home.component';
import { DepartmentComponent } from './components/department/department.component';
import { ChildrenComponent } from './components/children/children.component';
import { StartComponent } from './components/start/start.component';
import { QueriesComponent } from './components/queries/queries.component';
import { AgeMunicpipalityComponent } from './components/queries/age-municpipality/age-municpipality.component';
import { ChildrenMunicipalityComponent } from './components/queries/children-municipality/children-municipality.component';
import { VaccinatedChildrenComponent } from './components/queries/vaccinated-children/vaccinated-children.component';
import { ChildrenWvComponent } from './components/queries/children-wv/children-wv.component';
import { ModalComponent } from './modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModlaChildrenComponent } from './modal/modla-children/modla-children.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildrenComponent,
    DepartmentComponent,
    VaccineComponent,
    HomeComponent,
    StartComponent,
    QueriesComponent,
    AgeMunicpipalityComponent,
    ChildrenMunicipalityComponent,
    VaccinatedChildrenComponent,
    ChildrenWvComponent,
    ModalComponent,
    ModlaChildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
