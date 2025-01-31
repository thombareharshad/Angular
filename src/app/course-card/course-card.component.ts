import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnInit,
    Output,
    QueryList,
    Self,
    SkipSelf,
    ViewEncapsulation
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import { CoursesService } from '../services/courses.service';
// import { COURSES_SERVICE } from '../app.component';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    standalone: false
    ,providers: [
      CoursesService
    ]
})
export class CourseCardComponent implements OnInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    // constructor(@Inject(COURSES_SERVICE) private coursesService: CoursesService) {
    constructor( private coursesService: CoursesService) {

    }

    ngOnInit() {
        // console.log("CoursesService course card", this.coursesService.id);
    }


    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});

    }




}
