import { AfterViewInit, Component, ElementRef, EventEmitter, ViewChild, viewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses = [...COURSES];

  @ViewChild('cardRef1', {read:ElementRef})
  card1:ElementRef

  @ViewChild('courseImage')
  courseImage:ElementRef

  constructor() {
  }
  ngAfterViewInit() {
    console.log('courseImage ', this.courseImage);
  }

  onCourseSelected(course:Course) {
  }

}
