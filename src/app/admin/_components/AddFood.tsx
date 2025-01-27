"use client";

import { FoodType } from "@/app/type";
import { useState, useEffect } from "react";

interface AddDishProps {
  categoryName: string;
  setFood: React.Dispatch<React.SetStateAction<any>>;
  food: any;
  handleUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function AddFoods() {
  const [addFoodCard, setAddFoodCard] = useState<FoodType[]>([]);
  const [imageDrop, setImageDrop] = useState(null);

  const addFood = async () => {
    const foodName = prompt("Enter new foodCard name");
    const response = await fetch("http://localhost:7000/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ foodName }),
    });
    const data = await response.json();
    setAddFoodCard([...addFoodCard, data.newItem]);
  };
  async function fetchAll() {
    const res = await fetch(`http://localhost:7000/food`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setAddFoodCard(data);
  }

  return (
    <div className="bg-white text-black w-full h-auto py-6 px-8 rounded-xl shadow-md flex flex-col">
      <div className="flex flex-col items-center justify-center w-[270px] h-[241px]">
        <div className="flex flex-wrap items-center gap-4 text-center flex-col">
          <button
            className="flex items-center justify-center w-9 h-9 bg-red-500 text-white rounded-full text-lg font-bold"
            onClick={addFood}
          >
            +
          </button>
          <h1 className="w-[154px] font-semibold text-[14px]">
            Add new Dish to Salads
          </h1>
        </div>
      </div>
      {addFoodCard?.map((foodCard) => (
        <div
          key={foodCard._id}
          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full text-gray-700 text-sm font-medium"
        >
          {foodCard.foodName}
        </div>
      ))}
      <input className=" w-full h-full" type="file" id="proFileImage" />{" "}
      {/* {imageDrop ? (
        <img src={imageDrop} className="w-full h-full rounded-[8px]" />
      ) : (
        <input className="hidden w-full h-full" type="file" id="proFileImage" />
      )} */}
    </div>
  );
}
