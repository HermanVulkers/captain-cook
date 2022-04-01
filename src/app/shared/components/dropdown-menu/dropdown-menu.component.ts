import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dropdown-menu",
  templateUrl: "./dropdown-menu.component.html",
  styleUrls: ["./dropdown-menu.component.scss"],
})
export class DropdownMenuComponent implements OnInit {
  constructor() {}

  items = [
    { routerLink: "/planner", text: "Planner" },
    { routerLink: "/recipes", text: "Recipes" },
  ];

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {}
}
