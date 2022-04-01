import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PlannerComponent } from "./planner/planner.component";
import { RecipesComponent } from "./recipes/components/recipes/recipes.component";

const routes: Routes = [
  { path: "", component: PlannerComponent },
  { path: "planner", component: PlannerComponent },
  { path: "recipes", component: RecipesComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
