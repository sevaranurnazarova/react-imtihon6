import { CircularProgress, Grid } from "@mui/material";
import CardProduct from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData () {
            let res = await axios.get('https://ecommerce-backend-fawn-eight.vercel.app/api/products');
            console.log(res);
            if(res && res.data){
                console.log(res.data);
                setProducts(res.data);
            } else {
                setProducts([]);
            }
        }
        try {
            setLoading(true);
            fetchData();
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <Grid container spacing={2}>
            {
             loading ? 
             <CircularProgress color="success" /> : 
             Array.isArray(products) ? products.map(item => (
                <CardProduct item={item} />
             )): ''
            }
        </Grid>
    )
}

export default Products;