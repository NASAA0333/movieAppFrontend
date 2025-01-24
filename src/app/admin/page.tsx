"use client";

import AddFoods from "./_components/AddFood";
import Categories from "./_components/Categories";

export default function Home() {
  return (
    <div>
      <Categories />
      <AddFoods />
    </div>
  );
}
