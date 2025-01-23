import { Course } from './../model/course';
import { Component, Input, EventEmitter, Output, ViewChild, OnInit, AfterViewInit, ContentChild, ElementRef, ContentChildren, AfterContentInit, QueryList, TemplateRef } from '@angular/core';
import { NgIf, NgClass, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault,NgTemplateOutlet],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})

export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {
  
  @Input()
  course:Course;

  @Input()
  noImgTpl:TemplateRef<any>;

  @ContentChildren(CourseImageComponent, {read:ElementRef})
  images:QueryList<ElementRef>;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  ngAfterViewInit(): void {
    
  }

  ngAfterContentInit(): void {
    console.log(this.images);
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
