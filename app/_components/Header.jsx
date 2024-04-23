"use client";
import { LayoutGrid, Search, ShoppingBag } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GlobalAPI from "../_utils/GlobalAPI";

const Header = () => {
  const [categoryData, setCategoryData] = useState(null);
  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    try {
      const res = await GlobalAPI.getAllCategories();
      // console.log(res);
      setCategoryData(res.data.data);
    } catch (error) {
      console.error("category error", error);
    }
  };
  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8 ">
        <Image src="/capture.jpg" alt="logo Img" width={120} height={40} />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-300 cursor-pointer">
              <LayoutGrid className="h-5 w-5" /> Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {categoryData ? (
              categoryData?.map((category, index) => (
                <DropdownMenuItem
                  className="hover:font-semibold cursor-pointer flex gap-2 items-center"
                  key={category.id}
                >
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                      category.attributes.image.data.attributes?.url
                    }
                    alt="icon"
                    height={20}
                    width={20}
                    unoptimized={true}
                  />
                  {category.attributes.name}
                </DropdownMenuItem>
              ))
            ) : (
              <div>Loading data</div>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="md:flex gap-3 items-center border rounded-full p-2 px-5 hidden">
          <Search />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="flex gap-2 items-center text-lg">
          <ShoppingBag /> 0
        </h2>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
