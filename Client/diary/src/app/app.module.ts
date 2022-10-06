import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app/app.component';
import { IndexComponent } from './component/index/index.component';
import { ListComponent } from './component/diary/list/list.component';
import { FormComponent } from './component/diary/form/form.component';
import { EditComponent } from './component/diary/edit/edit.component';
import { AboutComponent } from './component/about/about.component';
import { RoutingModule } from './routing/routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewComponent } from './component/diary/new/new.component';
//import { AppComponent } from './component/app.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ListComponent,
    FormComponent,
    EditComponent,
    AboutComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
