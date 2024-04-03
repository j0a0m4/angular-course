import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from "./app.component";
import {CourseCardComponent} from "./course-card/course-card.component";
import {CourseImageComponent} from "./course-image/course-image.component";
import {HighlightedDirective} from "./directives/highlighted.directive";

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    CourseImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HighlightedDirective,
    HighlightedDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
