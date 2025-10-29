import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { Box, Typography, Button } from "@mui/material";
import SectionHeader from "../../../shared/SectionHeader";
import ProductCarousel from "./ProductCarousel";
import { fetchProducts } from "../../../utils/fetchProducts";

interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  thumbnail: string;
}

const FlashSales: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const endDate = Date.now() + 3 * 24 * 60 * 60 * 1000;

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  // ✅ Countdown Renderer - أفقي فعلاً
  const renderer = ({ days, hours, minutes, seconds }: any) => (
    <div className="flex items-center justify-center space-x-4 md:space-x-6">
      {[
        { label: "Days", value: days },
        { label: "Hours", value: hours },
        { label: "Minutes", value: minutes },
        { label: "Seconds", value: seconds },
      ].map((item, index) => (
        <React.Fragment key={item.label}>
          <div className="flex flex-col items-center justify-center bg-white shadow px-3 py-2 rounded-md w-16">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-none">
              {String(item.value).padStart(2, "0")}
            </p>
            <p className="text-[10px] text-gray-600 font-medium uppercase">
              {item.label}
            </p>
          </div>
          {index < 3 && (
            <span className="text-red-500 text-2xl md:text-3xl font-bold">:</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <Box className="py-12 bg-gray-50">
      {/* Header */}
      <Box className="flex justify-between items-center mb-6 px-4 flex-wrap gap-4">
        <div>
          <SectionHeader title="Today’s" />
          <Typography variant="h5" className="font-bold">
            Flash Sales
          </Typography>
        </div>
        <Countdown date={endDate} renderer={renderer} />
      </Box>

      {/* Products Carousel */}
      <div className="px-4">
        <ProductCarousel products={products} />
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <Button
          variant="contained"
          color="error"
          className="px-6 py-2 rounded-lg normal-case"
        >
          View All Products
        </Button>
      </div>
    </Box>
  );
};

export default FlashSales;
