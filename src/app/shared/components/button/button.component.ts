import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  @Output() remove = new EventEmitter();
  removeRecipe(id: number) {
    this.remove.emit(id);
  }

  ngOnInit(): void {}
}
