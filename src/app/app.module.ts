import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent,TasksComponent } from './app.component';

import { otherComponent } from './app.othercomponent';

import { RouterModule }   from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    otherComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'tasks', component: TasksComponent },
      { path: 'other', component: otherComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:     [CUSTOM_ELEMENTS_SCHEMA]  
})
export class AppModule { }
