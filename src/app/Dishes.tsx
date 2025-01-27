"use client";
import { useEffect, useState } from "react";
import { FilteredFood } from "./admin/_components/foodFilter";
import { CategoryType } from "./type";
import { useParams } from "next/navigation";

export const Dishes = () => {
  const [foodCategory, setFoodCategory] = useState<CategoryType[]>();
  const params = useParams();
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch("http://localhost:8000/food-category/");
      const data = await response.json();
      setFoodCategory(data);
    };

    fetchCategory();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      {!params.id
        ? foodCategory?.map((category) => (
            <div key={category._id}>
              <FilteredFood
                _id={category._id}
                categoryName={category.categoryName}
              />
            </div>
          ))
        : foodCategory
            ?.filter((category) => category._id === params.id)
            .map((category) => (
              <div key={category._id}>
                <FilteredFood
                  _id={category._id}
                  categoryName={category.categoryName}
                />
              </div>
            ))}
    </div>
  );
};
