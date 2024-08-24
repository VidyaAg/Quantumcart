// app/about/page.tsx
import { Grid } from '@mui/material';
import { FC } from 'react';
import ProductCard from './productCard';
const products = [
    {
        name: "ADDIDAS GAZE ZX",
        price: 99.00,
        image: "/images/images (3).jpeg",
        rating: 4,
        colors: ['#3b82f6', '#ec4899', '#eab308'],
    },
    {
        name: "ADDIDAS GAZE ZX",
        price: 99.00,
        image: "/images/images (3).jpeg",
        rating: 4,
        colors: ['#3b82f6', '#ec4899', '#eab308'],
    },
    {
        name: "ADDIDAS GAZE ZX",
        price: 99.00,
        image: "/images/images (3).jpeg",
        rating: 4,
        colors: ['#3b82f6', '#ec4899', '#eab308'],
    },
    {
        name: "ADDIDAS GAZE ZX",
        price: 99.00,
        image: "/images/images (3).jpeg",
        rating: 4,
        colors: ['#3b82f6', '#ec4899', '#eab308'],
    },
];
const ProdcutList: FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <Grid container spacing={4}>
                {products.map((product, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <ProductCard {...product} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ProdcutList;
