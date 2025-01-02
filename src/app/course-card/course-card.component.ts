import { Course } from './../model/course';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { NgIf, NgClass, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [NgIf, NgClass, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})

export class CourseCardComponent {

  @Input()
  course:Course;

  @Input({required: true})
  index:Number

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("Card Component - button clicked ...");

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
