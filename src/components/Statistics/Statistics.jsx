import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './Statistics.css'
import JobList from '../JobList/JobList';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
     // const jobListData = useLoaderData();
     const [jobListData, setJobListData] = useState([])
     useEffect(() =>{
          fetch('JobList.json')
          .then(res => res.json())
          .then(data => setJobListData(data))
     },[])
     return (
          <div className='container mt-5 pt-5'>
               <header className=' py-lg-5'>
                    <div className='row'>
                         <div className='col-lg-6 my-4'>
                              <h1 className='display-4 fw-bold'>One Step <br /> Closer To Your <br /> <span className='text-info'>Dream Job</span></h1>
                              <p className='my-3'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                              <Button variant="success" className='py-2 my-3'>Get Started</Button>
                         </div>
                         <div className='col-lg-6 '>
                              <img src="../../../public/img3.png" className=' img-fluid imgStyle' alt="" />
                         </div>
                    </div>
               </header>
               {/* header part end  */}

               <section className='my-5'>
                    <div className='text-center mt-5 mb-4'>
                         <h1>Job Category List</h1>
                         <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                    <div className='row'>
                         {
                              jobListData.map(data => <JobList
                                   key={data.id}
                                   data={data}
                              ></JobList>)
                         }
                    </div>
               </section>
               {/* job list section end  */}

               <section className='my-lg-5 pt-lg-3'>
                    <div className='text-center mt-lg-5 mb-4'>
                         <h1>Featured Jobs</h1>
                         <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>
                    <div className='row'>
                         {/* {
                              jobListData.map(data => <JobList
                                   key={data.id}
                                   data={data}
                              ></JobList>)
                         } */}
                    </div>
               </section>
          </div>
     );
};

export default Statistics;