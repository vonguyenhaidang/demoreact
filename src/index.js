import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import IndexPage from './pages/MainPage';
import MenList from './pages/MenWatches';
import WomenList from './pages/WomenWatches';
import PageSlide from './pages/Slideshow';
import PageNotFound from './pages/PageNotFound';
import ProductSingle from './pages/ProductSingle';
import CartPage from './pages/Cart';
export default function HomePage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/index.html" element={<Layout />}>
          <Route index element={<IndexPage />}></Route>
        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />}></Route>
          <Route path="single" element={<ProductSingle />}></Route>
          <Route path='cart' element={<CartPage />}></Route>
        </Route>
        <Route path="/products" element={<Layout />}>
          <Route path="men" element={<MenList />}></Route>
          <Route path="women" element={<WomenList />}></Route>
          <Route path="slide" element={<PageSlide />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter >
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomePage />);


