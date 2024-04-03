import {CommonModule} from "@angular/common";
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Course} from "../model/course";
import {css} from "../styles";

@Component({
  selector: "course-card", standalone: true, imports: [CommonModule],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css"
})
export class CourseCardComponent {
  @Input({required: true})
  course: Course;

  @Input({required: true})
  index: number;

  @Output("courseSelected")
  courseEventEmitter = new EventEmitter<Course>();

  cardCssClass = () => css(
    "course-card",
    this.course.category.toLowerCase()
  );

  onCourseView(): void {
    console.log("card component - clicked!");
    this.courseEventEmitter.emit(this.course);
  }
}
