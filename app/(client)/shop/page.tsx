import Shop from "@/components/Shop";
import { getAllBrands, getCategories } from "@/sanity/queries";
import React from "react";

const ShopPage = async () => {
  const categories = await getCategories() as React.ComponentProps<typeof Shop>["categories"];
  const brands = await getAllBrands();
  return (
    <div className="bg-white">
      <Shop categories={categories} brands={brands} />
    </div>
  );
};

export default ShopPage;