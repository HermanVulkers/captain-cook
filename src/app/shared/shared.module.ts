import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { ButtonComponent } from "./components/button/button.component";
import { DropdownMenuComponent } from "./components/dropdown-menu/dropdown-menu.component";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { AsideComponent } from "./components/aside/aside.component";

@NgModule({
  declarations: [NavigationComponent, ButtonComponent, DropdownMenuComponent, AsideComponent],
  imports: [CommonModule, RouterModule, AppRoutingModule],
  exports: [NavigationComponent, ButtonComponent, DropdownMenuComponent, AsideComponent],
})
export class SharedModule {}
