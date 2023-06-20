import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';

import GifApp from './GifApp';
import ProductProvider from './componentes/context/productContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <ProductProvider>

   <GifApp />
 </ProductProvider>

);


