import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utils/fakeDB';
import AppliedData from '../AppliedData/AppliedData';
import { Button } from 'react-bootstrap';

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


     // Onsite and Remote button handel Start 
     const [dataArr, setDataArr] = useState([])
     const remoteRemote = (id) => {
          if (id === 'Onsite') {
               const onsite = lcData.filter(data => data.btn1 === id)
               setDataArr(onsite)
          }
          else if (id) {
               const remote = lcData.filter(data => data.btn1 === id)
               setDataArr(remote)
          }
     }
     const allDataArr = dataArr.length !== 0 ? dataArr : lcData;
     // Onsite and Remote button handel end 

     return (
          <div className='mt-5 pt-5'>
               <h1 className='text-center my-5'>Applied Jobs</h1>
               <div className='d-flex justify-content-end container my-4'>
                    <Button onClick={() => remoteRemote('Onsite')} variant="info" className='my-1'>Onsite</Button>
                    <Button onClick={() => remoteRemote('Remote')} variant="info" className='my-1 ms-3'>Remote</Button>
               </div>
               <div>
                    {
                         allDataArr.map(data => <AppliedData
                              key={data.id}
                              data={data}
                         ></AppliedData>)
                    }
               </div>
          </div>
     );
};

export default AppliedJobs;