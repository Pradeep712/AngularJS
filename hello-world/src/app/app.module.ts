import { CoursesService } from 'courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent    
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService //serviceprovider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
