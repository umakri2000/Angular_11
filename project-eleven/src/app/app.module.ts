import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpformComponent } from './empform/empform.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
const routes:Routes=[                       
  {path:'home',component:HomeComponent},
  {path :'about',component:AboutComponent},
  {path:'content',component:ContentComponent},
  {path :'form',component:FormComponent},
  {path :'empform',component:EmpformComponent}]


@NgModule({
  declarations: [
    AppComponent,
    EmpformComponent,
    HomeComponent,
    FormComponent,EmpformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
