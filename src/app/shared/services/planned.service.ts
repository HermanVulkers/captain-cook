import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PlannedService {
  data = [
    {
      id: 1,
      name: "Salmon pasta with spinach en cherrytomatoes",
      portionSize: "2p",
      imageUrl: "../../assets/images/zalm.jpg",
      ingredients: [
        {
          name: "Salmon",
          unit: "gram",
          amount: 400,
        },
        {
          name: "Pasta",
          unit: "gram",
          amount: 200,
        },
        {
          name: "Spinach",
          unit: "gram",
          amount: 200,
        },
        {
          name: "Cherrytomatoes",
          unit: "gram",
          amount: 200,
        },
      ],
    },
    {
      id: 2,
      name: "Curry with cauliflower",
      portionSize: "3p",
      imageUrl: "../../assets/images/curry.jpg",
      ingredients: [
        {
          name: "Curry",
          unit: "gram",
          amount: 300,
        },
        {
          name: "Cauliflower",
          unit: "gram",
          amount: 100,
        },
      ],
    },
    {
      id: 3,
      name: "Ovendish with potatoes and broccoli",
      portionSize: "2p",
      imageUrl: "../../assets/images/aardappelschotel.jpg",
      ingredients: [
        {
          name: "Potatoes",
          unit: "gram",
          amount: 500,
        },
        {
          name: "Broccoli",
          unit: "gram",
          amount: 300,
        },
      ],
    },
  ];

  recipesChange = new Subject<
    {
      name: string;
      imageUrl: string;
      portionSize: string;
      id: number;
      ingredients: { name: string; amount: number; unit: string }[];
    }[]
  >();

  constructor() {}

  addRecipe() {
    this.data = [
      ...this.data,
      {
        id: 4,
        name: "Fries with chicken and applesauce",
        portionSize: "4p",
        imageUrl: "../../assets/images/patatmetkip.jpg",
        ingredients: [
          {
            name: "Fries",
            unit: "gram",
            amount: 400,
          },
          {
            name: "Chicken",
            unit: "gram",
            amount: 300,
          },
          {
            name: "Broccoli",
            unit: "gram",
            amount: 100,
          },
        ],
      },
    ];
    this.recipesChange.next(this.data);
    this.updateGroceryList();
  }

  removeRecipe(id: number) {
    this.data = this.data.filter((recipe) => recipe.id !== id);
    this.recipesChange.next(this.data);
    this.updateGroceryList();
  }

  ingredients: { name: string; unit: string; amount: number }[] = [];
  ingredientsChange = new Subject<{ name: string; unit: string; amount: number }[]>();

  updateGroceryList = () => {
    this.ingredients = this.data
      .map((recipe) => recipe.ingredients)
      .reduce(
        (accumulator, data) => (accumulator = [...accumulator, ...data]),
        [] as { name: string; unit: string; amount: number }[],
      );

    this.ingredientsChange.next(this.ingredients);
  };

  // ngOnInit() {
  //   this.updateGroceryList();
  // }
}
