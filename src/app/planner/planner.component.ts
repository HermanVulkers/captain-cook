import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-planner",
  templateUrl: "./planner.component.html",
  styleUrls: ["./planner.component.scss"],
})
export class PlannerComponent implements OnInit {
  recipes = [
    {
      id: 1,
      name: "Pasta zalm met spinazie en cherrytomaten",
      portionSize: "2p",
      imageUrl: "../../assets/images/zalm.jpg",
    },
    {
      id: 2,
      name: "Curry met bloemkool",
      portionSize: "3p",
      imageUrl: "../../assets/images/curry.jpg",
    },
    {
      id: 3,
      name: "Ovenschaal met aardappels en broccoli",
      portionSize: "2p",
      imageUrl: "../../assets/images/aardappelschotel.jpg",
    },
  ];

  addRecipe = () => {
    this.recipes = [
      ...this.recipes,
      {
        id: 4,
        name: "Patat met kip",
        portionSize: "4p",
        imageUrl: "../../assets/images/patatmetkip.jpg",
      },
    ];
  };

  removeRecipe = (id: number) => {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
  };

  constructor() {}

  ngOnInit(): void {}
}
