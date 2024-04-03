import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren
} from "@angular/core";
import {COURSES} from "../db-data";
import {CourseCardComponent} from "./course-card/course-card.component";
import {HighlightToggled} from "./directives/highlighted.directive";
import {Course} from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent
  implements AfterViewInit {

  courses = COURSES;

  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cards: QueryList<ElementRef>;

  constructor() {

  }

  ngAfterViewInit() {

  }

  onSelectCourse(course: Course) {

  }

  onHighlightToggle(event: HighlightToggled) {
    console.log(event);
  }
}
