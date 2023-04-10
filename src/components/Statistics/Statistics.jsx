import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utils/fakeDB';

const Statistics = () => {
     const { id } = useParams();
     addToDb(id);
     

     const [lcData, setLcData] = useState([]);
     const productsAndCartData = async () => {
          const productsData = await fetch('/FeaturedJob.json')
          const products = await productsData.json()
          const savedCart = getStoredCart()
          const initialCart = []
          for (const id in savedCart) {
               const foundProduct = products.find(product => product.id === +id)
               if (foundProduct) {
                 const quantity = savedCart[id]
                 foundProduct.quantity = quantity
                 initialCart.push(foundProduct)
               }
             }
             setLcData(initialCart)
     }
     productsAndCartData()

     console.log(lcData);

     return (
          <div className='mt-5 pt-5'>
              <h1>Statistics</h1> 
          </div>
     );
};

export default Statistics;