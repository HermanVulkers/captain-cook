import { Component, OnInit } from "@angular/core";
import { PlannedService } from "../shared/services/planned.service";

@Component({
  selector: "app-planner",
  templateUrl: "./planner.component.html",
  styleUrls: ["./planner.component.scss"],
})
export class PlannerComponent implements OnInit {
  recipes: {
    name: string;
    imageUrl: string;
    portionSize: string;
    id: number;
    ingredients: { name: string; amount: number; unit: string }[];
  }[] = [];

  constructor(private plannedService: PlannedService) {}

  ngOnInit() {
    this.recipes = this.plannedService.data;
    this.plannedService.recipesChange.subscribe((data) => (this.recipes = data));
  }

  removeRecipe(id: number) {
    this.plannedService.removeRecipe(id);
  }

  addRecipe() {
    this.plannedService.addRecipe();
  }
}
