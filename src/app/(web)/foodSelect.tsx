"use client";

import { Card } from "@/components/ui/card";
import React, { use, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const FoodSelect = ({ food }: any) => {
  console.log(food, "food");

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
                <Plus className="size-4 pl-1 text-red-600" />
              </button>
            </DialogTrigger>
          </DialogTitle>
          <DialogContent className="flex flex-col gap-6 p-6">
            <DialogHeader className="pb-4 grid gap-4">
              <DialogTitle>{food.image}</DialogTitle>
            </DialogHeader>
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
{
  /* <div className="flex">
              <Label htmlFor="foodName">Food name</Label>
              <Input
                onChange={(e) =>
                  setEditFood({ ...editFood, name: e.target.value })
                }
                defaultValue={editFood?.foodName}
                id="foodName"
                name="name"
                type="text"
                placeholder="Type food name..."
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="foodPrice">Food price</Label>
              <Input
                onChange={(e) =>
                  setEditFood({ ...editFood, price: e.target.value })
                }
                id="foodPrice"
                name="price"
                defaultValue={editFood?.price}
                type="number"
                placeholder="Enter price..."
              />
            </div>
            <div className="flex flex-col w-full  gap-1.5">
              <label htmlFor="ingredients">Ingredients</label>
              <textarea
                onChange={(e) =>
                  setEditFood({ ...editFood, ingredients: e.target.value })
                }
                id="ingredients"
                name="ingredients"
                defaultValue={editFood?.ingredients}
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
                  style={{ backgroundImage: `url(${editFood.image})` }}
                >
                  <Button
                    variant="outline"
                    className="rounded-full px-3 py-5"
                    onClick={() => {}}
                  ></Button>
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
            </div> */
}
