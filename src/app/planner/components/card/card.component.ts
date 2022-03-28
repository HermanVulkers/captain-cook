import { Component, Input, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() id!: number;
  @Input() imageUrl!: string;
  @Input() name!: string;
  @Input() portionSize!: string;

  @Output() remove = new EventEmitter();
  removeRecipe(id: number) {
    this.remove.emit(id);
  }

  constructor() {}

  ngOnInit(): void {}
}
