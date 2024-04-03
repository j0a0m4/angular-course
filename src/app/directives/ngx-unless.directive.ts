import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";

type Visibility = "visible" | "hidden";

@Directive({
  selector: "[ngxUnless]",
  standalone: true
})
export class NgxUnlessDirective {
  visibility: Visibility = "hidden";

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
  }

  @Input()
  set ngxUnless(condition: boolean) {
    if(condition) {
      this.clearView();
    }
    else {
      this.createView();
    }
  }

  private clearView() {
    if(this.visibility === "visible") {
      this.viewContainerRef.clear();
      this.visibility = "hidden";
    }
  }

  private createView() {
    if(this.visibility === "hidden") {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.visibility = "visible";
    }
  }

}
