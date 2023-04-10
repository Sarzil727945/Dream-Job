import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
     const { id } = useParams();

     // const [idData, setIdData] = useState([])
     const [jobJsonData, setJobJsonData] = useState([]);
     // useEffect(() => {
     //      fetch('/FeaturedJob.json')
     //           .then(res => res.json())
     //           .then(data => setJobJsonData(data))

     //      if (id) {
     //           const foundProduct = jobJsonData.find(pd => pd.id === +id)
     //           setIdData(foundProduct);
     //      }

     // }, [jobJsonData])

     const productsAndCartData = async () => {
          const productsData = await fetch('/FeaturedJob.json')
          const products = await productsData.json()

          if (id) {
               const foundProduct = products.find(product => product.id === +id)
               setJobJsonData(foundProduct)
          }

     }
     productsAndCartData()
     const { jDescription, jResponsibility, eRequirements, Experiences, salary, jobTitle, Phone, Email, Address, name } = jobJsonData


     return (
          <div className='my-5 pt-5 container'>
               <h1 className='my-5 py-5 text-center'>Job Details</h1>
               <div className=' row my-2'>
                    <div className='col-lg-8'>
                         <p><b>Job Description: </b>{jDescription}</p>
                         <p><b>Job Responsibility: </b>{jResponsibility}</p>
                         <p><b>Educational Requirements:</b></p>
                         <p>{eRequirements}</p>
                         <p><b>Experiences:</b></p>
                         <p>{Experiences}</p>

                    </div>
                    <div className='col-lg-4'>
                         <div className="card text-bg-info mb-3">
                              <div className="card-header"><b>Job Details {id}
                              </b>
                              </div>
                              <div className="card-body">
                                   <p className="card-text"><b>Salary: </b>
                                        {salary} (Per Month)
                                   </p>
                                   <p><b>Job Title: </b> {jobTitle}</p>
                              </div>
                              <div className="card-header"><b>Contact Information
                              </b>
                              </div>
                              <div className="card-body">
                                   <p className="card-text"><b>Phone: </b>
                                        {Phone}
                                   </p>
                                   <p><b>Email: </b> {Email}</p>
                                   <p><b>Address: </b> {Address}</p>
                              </div>
                         </div>
                         <div class="d-grid mx-auto">
                              <button class="btn btn-primary" type="button">Apply Now</button>
                         </div>
                    </div>

               </div>
          </div>
     );
};

export default ViewDetails;