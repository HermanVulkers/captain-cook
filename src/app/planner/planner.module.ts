import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { PlannerComponent } from "./planner.component";
import { CardComponent } from "./components/card/card.component";
import { GroceryListComponent } from "./components/grocery-list/grocery-list.component";

@NgModule({
  declarations: [PlannerComponent, CardComponent, GroceryListComponent],
  imports: [CommonModule, SharedModule],
  exports: [PlannerComponent],
})
export class PlannerModule {}
