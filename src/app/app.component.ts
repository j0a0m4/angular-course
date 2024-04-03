import {Component} from "@angular/core";
import {COURSES} from "../db-data";
import {Course} from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  courses: readonly Course[] = [...COURSES];

  title = this.courses[0].title;
  startDate = new Date(2000, 0, 1);
  price = 9.123124;
  rate = 0.67;

  onCourseSelection(course: Course) {
    console.log(course);
  }
}
