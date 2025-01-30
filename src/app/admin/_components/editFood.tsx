import { Card } from "@/components/ui/card";
import React, { use, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, X, Trash } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

export const CardComp = ({ food, id }: any) => {
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState(0);
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState("");

  const [editFood, setEditFood] = useState<any>({
    name: "",
    price: 0,
    ingredients: "",
    image: "",
    category: id,
  });

  const FoodEdited = async (id) => {
    const data = await fetch(`http://localhost:7000/food/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(food),
    });
    const updated: any = await data.json();
    // window.location.reload();
  };
  console.log(food._id);
  return (
    <Card className="border bg-background p-4 w-[270.75px] h-[241px] flex flex-col gap-5 items-center  justify-center">
      <div
        className={`w-[238.75px] h-[129px]  bg-cover bg-center rounded-xl flex justify-end items-end p-5`}
        style={{ backgroundImage: `url(${food.image})` }}
      >
        <Dialog>
          <DialogTitle className=" text-center ">
            <DialogTrigger
              asChild
              className=" w-[44px] h-[44px] bg-white rounded-full p-3"
            >
              <button className="felx items-center justify-center w-[44px] h-[44px]">
                {" "}
                <Pencil color="red" className="size-4 pl-1" />
              </button>
            </DialogTrigger>
          </DialogTitle>
          <DialogContent className="flex flex-col gap-6 p-6">
            <DialogHeader className="pb-4 grid gap-4">
              <DialogTitle>Dishes info</DialogTitle>
            </DialogHeader>
            <div className="flex">
              <Label htmlFor="foodName">Food name</Label>
              <Input
                onChange={(editFood) =>
                  setEditFood({ ...editFood, name: food.name })
                }
                defaultValue={food?.name}
                id="foodName"
                name="name"
                type="text"
                placeholder="Type food name..."
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="foodPrice">Food price</Label>
              <Input
                onChange={(editFood) =>
                  setEditFood({ ...editFood, price: food.price })
                }
                id="foodPrice"
                name="price"
                defaultValue={food?.price}
                type="number"
                placeholder="Enter price..."
              />
            </div>
            <div className="flex flex-col w-full  gap-1.5">
              <label htmlFor="ingredients">Ingredients</label>
              <textarea
                onChange={(editFood) =>
                  setEditFood({ ...editFood, ingredients: food.ingredients })
                }
                id="ingredients"
                name="ingredients"
                defaultValue={food?.ingredients}
                rows={4}
                cols={50}
                className="border rounded-md py-2 px-4  text-sm font-normal "
                placeholder="List ingredients..."
              ></textarea>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <h1 className="text-sm">Food image</h1>

              {food?.image !== "" ? (
                <div
                  className={`bg-cover bg-center rounded-md h-[138px] flex justify-end p-4 `}
                  style={{ backgroundImage: `url(${food.image})` }}
                >
                  <Button
                    variant="outline"
                    className="rounded-full px-3 py-5"
                    onClick={() => {}}
                  >
                    <X />
                  </Button>
                </div>
              ) : (
                <Label
                  htmlFor="image"
                  className={`h-[138px] border border-dashed rounded-md bg-blue-50 flex flex-col items-center justify-center p-4 gap-2`}
                >
                  <div className="rounded-full p-2 bg-background "></div>
                  <h3 className="text-sm">
                    Choose a file or drag & drop it here
                  </h3>
                </Label>
              )}

              <Input
                id="image"
                name="image"
                type="file"
                placeholder="Enter price..."
                className="hidden"
              />
            </div>
            <DialogFooter className="pt-6 flex justify-center">
              <Trash className="text-red-500" />
              <DialogClose asChild>
                <Button
                  onClick={() => {
                    FoodEdited(food._id);
                  }}
                >
                  Save Changes
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid gap-2">
        <div className="flex justify-between">
          <span className="text-red-500 ">{food?.foodName}</span>
          <span>${food.price}</span>
        </div>
        <h4 className="text-xs">{food.ingredients}</h4>
      </div>
    </Card>
  );
};
