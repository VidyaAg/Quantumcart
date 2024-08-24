import { FC } from "react";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface CartItemProps {
  title: string;
  author: string;
  price: string;
  discount: string;
  deliveryDate: string;
  outOfStock?: boolean;
}

const CartItem: FC<CartItemProps> = ({ title, author, price, discount, deliveryDate, outOfStock }) => (
  <div className="flex justify-between items-center p-4 border-b">
    <div className="flex items-start space-x-4">
      <img src="/path-to-image.jpg" alt={title} className="w-20 h-20 object-cover" />
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{author}</p>
        {outOfStock ? (
          <p className="text-red-500">Out Of Stock</p>
        ) : (
          <>
            <p className="text-sm text-gray-500">Price: {price}</p>
            <p className="text-sm text-green-500">{discount}</p>
            <p className="text-sm text-gray-500">Delivery by: {deliveryDate}</p>
          </>
        )}
      </div>
    </div>
    <IconButton color="primary">
      <DeleteIcon />
    </IconButton>
  </div>
);

export default CartItem;
