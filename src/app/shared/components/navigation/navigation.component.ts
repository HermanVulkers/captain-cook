import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }

  ngOnInit(): void {}
}
