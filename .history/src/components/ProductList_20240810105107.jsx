import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/products/'); // Replace with your Django API URL
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Our Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <a href={`/product/${product.id}`}>
                            {product.name} - ${product.price}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;