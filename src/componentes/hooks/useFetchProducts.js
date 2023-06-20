import { useEffect, useState } from 'react';
import { GetProducts } from '../helpers/getProducts';

export const useFetchGifs = ( product ) => {
 
    const [prod, setProd] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getProducts = async() => {
        const newProduct = await GetProducts(product);
        setProd(newProduct);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getProducts();
    }, []);



    return {
        prod,
        isLoading
    }

}