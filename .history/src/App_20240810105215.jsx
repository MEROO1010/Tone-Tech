import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail'; // Create this component

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;