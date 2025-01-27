export type Food = {
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
};
export type Category = {
  id: number;
  name: string;
};
export type CategoryType = {
  categoryName: string;
  _id: string;
};

export type FoodCategoryType = {
  foodCategoryName: string;
  _id: string;
};
export type FoodType = {
  _id: string;
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  category: string;
};
