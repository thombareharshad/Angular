import { Course } from './../model/course';
import { Component, Input, EventEmitter, Output, ViewChild, OnInit, AfterViewInit, ContentChild, ElementRef } from '@angular/core';
import { NgIf, NgClass, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [NgIf, NgClass, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})

export class CourseCardComponent implements OnInit, AfterViewInit {
  
  @Input()
  course:Course;

  @ContentChild(CourseImageComponent, {read: ElementRef})
  image:ElementRef;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  ngAfterViewInit(): void {
    console.log(this.image);
  }

  ngOnInit(): void {
    
  }

  onCourseViewed() {
    // console.log("Card Component - button clicked ...");

    this.courseEmitter.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if(this.course.category == 'BEGINNER') {
      return ['beginner'];
    }
  }

  cardStyles() {
    return {'background-image':'url('+this.course.iconUrl+')'};
  }

}
