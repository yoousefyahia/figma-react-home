import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  IconButton,
  Rating,
  Badge,
} from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";

interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  thumbnail: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountedPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(0);

  return (
    <Badge
      badgeContent={`-${Math.round(product.discountPercentage)}%`}
      color="error"
      sx={{
        "& .MuiBadge-badge": { top: 20, right: 25, fontSize: "0.75rem" },
      }}
    >
      <Card className="rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 bg-white relative">
        <IconButton
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
          size="small"
        >
          <FavoriteBorder />
        </IconButton>

        <CardMedia
          component="img"
          image={product.thumbnail}
          alt={product.title}
          className="h-40 object-contain p-4"
        />

        <CardContent>
          <Typography
            variant="body1"
            fontWeight={600}
            className="truncate text-center"
          >
            {product.title}
          </Typography>
          <div className="flex justify-center items-center gap-2 mt-2">
            <Typography color="error.main" fontWeight={700}>
              ${product.price}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="line-through"
            >
              ${discountedPrice}
            </Typography>
          </div>
          <div className="flex justify-center items-center mt-1">
            <Rating
              value={product.rating}
              precision={0.5}
              readOnly
              size="small"
            />
            <Typography variant="body2" className="ml-1 text-gray-500">
              ({product.stock})
            </Typography>
          </div>
        </CardContent>

        <CardActions className="p-3">
          <Button
            fullWidth
            variant="contained"
            color="error"
            className="rounded-xl normal-case font-medium"
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Badge>
  );
};

export default ProductCard;
