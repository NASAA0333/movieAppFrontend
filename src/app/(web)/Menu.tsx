"use client";

import { useEffect, useState } from "react";
import { CategoryType } from "../type";
import { Key } from "lucide-react";

export default function Menu() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const lalalalall = async () => {
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
    <div>
      {categories?.map((category) => (
        <div key={category._id} className="">
          {category.categoryName}
        </div>
      ))}
    </div>
  );
}
