import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChildrenComponent } from './components/children/children.component';
import { DepartmentComponent } from './components/department/department.component';
import { VaccineComponent } from './components/vaccine/vaccine.component';
import { StartComponent } from './components/start/start.component';
import { QueriesComponent } from './components/queries/queries.component';
import { AgeMunicpipalityComponent } from './components/queries/age-municpipality/age-municpipality.component';
import { ChildrenMunicipalityComponent } from './components/queries/children-municipality/children-municipality.component';
import { VaccinatedChildrenComponent } from './components/queries/vaccinated-children/vaccinated-children.component';
import { ChildrenWvComponent } from './components/queries/children-wv/children-wv.component';

const routes: Routes = [
  {path:'home', component: HomeComponent, children:[
    {path: 'home/children', component: ChildrenComponent},
    {path: 'home/department', component: DepartmentComponent},
    {path: 'home/vaccine', component: VaccineComponent},
    {path: 'home/queries', component: QueriesComponent ,children:[
      {path: 'queries', component: AgeMunicpipalityComponent},
      {path: 'children-municpipality', component: ChildrenMunicipalityComponent},
      {path: 'children-vaccined', component: VaccinatedChildrenComponent},
      {path: 'children-wv', component: ChildrenWvComponent}


    ]}
  ]},
  {path: '', component: StartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
