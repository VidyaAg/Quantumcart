import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Rating } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

interface ProductCardProps {
    name: string;
    price: number;
    image: string;
    rating: number;
    colors: string[];
}
const ProductCard = ({ name, price, image, rating, colors }: any) => {
    return (
        <Card className="flex flex-col h-full shadow-lg">
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={name}
                className="h-48 object-contain p-4"
            />
            <CardContent className="flex-grow">
                <Typography gutterBottom variant="h6" component="div" className="font-bold">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <Rating value={rating} readOnly className="mb-2" />
                <div className="flex items-center mb-2">
                    <Typography variant="body2" className="mr-2">
                        Color:
                    </Typography>
                    {colors.map((color: any, index: any) => (
                        <div
                            key={index}
                            className="w-4 h-4 rounded-full mr-1 cursor-pointer"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
                <Typography variant="h6" color="primary" className="mb-2">
                    ${price.toFixed(2)}
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<ShoppingCart />}
                    fullWidth
                    className="bg-gradient-to-r from-blue-400 to-purple-500"
                >
                    Add To Cart
                </Button>
            </CardContent>
        </Card>

    )
}
export default ProductCard