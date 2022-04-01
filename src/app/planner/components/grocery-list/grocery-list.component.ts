import { Component, Input, OnInit } from "@angular/core";
import { PlannedService } from "src/app/shared/services/planned.service";

@Component({
  selector: "app-grocery-list",
  templateUrl: "./grocery-list.component.html",
  styleUrls: ["./grocery-list.component.scss"],
})
export class GroceryListComponent implements OnInit {
  @Input() recipes!: {
    name: string;
    imageUrl: string;
    portionSize: string;
    id: number;
    ingredients: { name: string; unit: string; amount: number }[];
  }[];

  ingredients: { name: string; unit: string; amount: number }[] = [];

  constructor(private plannedService: PlannedService) {}

  ngOnInit() {
    this.plannedService.ingredientsChange.subscribe((data) => (this.ingredients = data));
    this.plannedService.updateGroceryList();
  }
}
