import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utils/fakeDB';
import AppliedData from '../AppliedData/AppliedData';

const AppliedJobs = () => {
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
               <h1 className='text-center my-5'>Applied Jobs</h1>
               <div>
                    {
                         lcData.map(data => <AppliedData
                              key={data.id}
                              data={data}
                         ></AppliedData>)
                    }
               </div>
          </div>
     );
};

export default AppliedJobs;