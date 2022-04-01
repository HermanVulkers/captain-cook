import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { RecipesModule } from "./recipes/recipes.module";
import { PlannerModule } from "./planner/planner.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    SharedModule,
    RecipesModule,
    PlannerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
