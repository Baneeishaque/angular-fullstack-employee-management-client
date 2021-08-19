import { InsertEmployeeComponent } from './insert-employee/insert-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListEmployeeComponent },
  { path: 'insert', component: InsertEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
