"use client";
import { CategoryType } from "@/app/type";
import { useState, useEffect } from "react";

export default function FrontCategories() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const addCategory = async () => {
    const categoryName = prompt("Enter new category name");
    const response = await fetch("http://localhost:7000/food-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName }),
    });
    const data = await response.json();
    setCategories([...categories, data.newItem]);
  };
  async function fetchAll() {
    const res = await fetch(`http://localhost:7000/food-category`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setCategories(data);
  }

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className=" w-full h-auto py-6 px-8 rounded-xl shadow-md flex flex-col">
      <h4 className="text-[30px] font-semibold mb-4">Categories</h4>
      <div className="flex flex-wrap items-center gap-4 ">
        {categories?.map((category) => (
          <div
            key={category._id}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full text-sm font-semibold bg-white text-black"
          >
            {category.categoryName}
          </div>
        ))}
      </div>
    </div>
  );
}
