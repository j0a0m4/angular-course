import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output
} from "@angular/core";

export type HighlightToggled = {
  highlight: Highlight;
  event: MouseEvent;
}

export type Highlight = "highlighted" | "blank"

const toggleHighlight = (highlight: Highlight) =>
  highlight == "blank"
    ? "highlighted"
    : "blank";

@Directive({
  selector: "[highlighted]",
  exportAs: "hl",
  standalone: true
})
export class HighlightedDirective {
  @Output()
  highlightToggled = new EventEmitter<HighlightToggled>();

  private highlight: Highlight = "blank";

  constructor() {
  }

  @HostBinding("class.highlighted")
  get cssClasses() {
    return this.highlight == "highlighted";
  }

  toggle(event: MouseEvent) {
    this.highlight = toggleHighlight(this.highlight);
    this.emitHighlightToggled(event);
  }

  @HostListener("mouseover", ["$event"])
  private onMouseOver(event: MouseEvent) {
    this.highlight = "highlighted";
    this.emitHighlightToggled(event);
  }

  @HostListener("mouseleave", ["$event"])
  private onMouseLeave(event: MouseEvent) {
    this.highlight = "blank";
    this.emitHighlightToggled(event);
  }

  private emitHighlightToggled(event: MouseEvent) {
    this.highlightToggled.emit({
      highlight: this.highlight,
      event,
    });
  }
}

