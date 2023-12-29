"use client";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { technologies } from "@/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
const Test = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[20vh] sm:max-w-xl sm:w-full"
    >
      <CarouselContent>
        {technologies.map(({ name, img, color }, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 cursor-pointer"
          >
            <div className="p-1">
              <Card className="rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border-black duration-300 hover:scale-105 hover:brightness-95">
                <CardContent className="flex flex-col aspect-square items-center justify-center gap-3 p-6">
                  <img
                    src={`./technologies/${img}.svg`}
                    alt={name}
                    height={name == "Mongo" ? 30 : name == "Tailwind" ? 60 : 50}
                    width={name == "Mongo" ? 30 : name == "Tailwind" ? 60 : 50}
                  />
                  <h3 className={`text-sm text-${color}`}>{name}</h3>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Test;
