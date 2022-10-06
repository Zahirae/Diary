import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../component/diary/list/list.component';
import { FormComponent } from '../component/diary/form/form.component';
import { EditComponent } from '../component/diary/edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../component/index/index.component';
import { AboutComponent } from '../component/about/about.component';
import { NewComponent } from '../component/diary/new/new.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full",
  },
  {
    path: "",
    component: IndexComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "diaries",
    component: ListComponent,
  },
  {
    path: "diaries/new",
    component: NewComponent,
  },
  {
    path: "diaries/:id",
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
