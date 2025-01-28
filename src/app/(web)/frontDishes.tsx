"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CategoryType } from "@/app/type";
import { FrontFilter } from "./frontFilter";

export const FrontDishes = () => {
  const [foodCategory, setFoodCategory] = useState<CategoryType[]>();
  const params = useParams();
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch("http://localhost:7000/food-category/");
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
              <FrontFilter
                _id={category._id}
                categoryName={category.categoryName}
              />
            </div>
          ))
        : foodCategory
            ?.filter((category) => category._id === params.id)
            .map((category) => (
              <div key={category._id}>
                <FrontFilter
                  _id={category._id}
                  categoryName={category.categoryName}
                />
              </div>
            ))}
    </div>
  );
};
