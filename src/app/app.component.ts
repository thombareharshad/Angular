import {AfterViewInit, Component, ElementRef, Inject, InjectionToken, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoursesService } from './services/courses.service';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from './config';

// function coursesServiceProvider(http: HttpClient): CoursesService {
//   return new CoursesService(http);
// }

// export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');

// export function config() {
//   return APP_CONFIG;
// }

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
    // providers: [
    //   {provide: CONFIG_TOKEN, useValue: APP_CONFIG}
    // ]
    providers: [
      CoursesService
      // {
      //   provide: CoursesService, 
      //   useClass: CoursesService
      //   // useFactory: coursesServiceProvider,
      //   // deps: [HttpClient]
      // }
    ]
})
export class AppComponent implements OnInit {

  courses$ : Observable<Course[]>;

  courses = COURSES;

  // constructor(@Inject(COURSES_SERVICE) private coursesService: CoursesService) {
  constructor(private coursesService: CoursesService, 
    @Inject(CONFIG_TOKEN) private config: AppConfig) {
    // console.log("root component "+this.coursesService.id)
    console.log(config);
  }

  ngOnInit() {
    // console.log(this.coursesService);

  this.courses$ = this.coursesService.loadCourses();
    // this.http.get('/api/courses', {params})
    // .subscribe(
    //   courses => this.courses = courses
    // );
  }

  save(course:Course) {
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course Saved Successfully')
      );
  }



}
