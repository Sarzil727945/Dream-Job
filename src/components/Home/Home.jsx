import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './Home.css'
import JobList from '../JobList/JobList';
import { Link, useLoaderData } from 'react-router-dom';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const Home = () => {
     const [jobListData, setJobListData] = useState([])
     useEffect(() =>{
          fetch('JobList.json')
          .then(res => res.json())
          .then(data => setJobListData(data))
     },[])
     const featuredJobData = useLoaderData();

     // ShowAll data part start
     const [dataArr, setDataArr] = useState([])
      const showAll =(id) =>{
          if (id === featuredJobData.length) {
               const allData = featuredJobData.filter(data => data.id <= id)
               setDataArr(allData)  
          }
          else{
               const allData = featuredJobData.filter(data => data.id <= id)
               return(allData)  
          }
      }
    const allDataArr =  dataArr.length === 6 ? dataArr : showAll(4);
    // ShowAll data part end


     return (
          <div className='container mt-5 pt-5'>
               <header className=' py-lg-5'>
                    <div className='row'>
                         <div className='col-lg-6 my-4'>
                              <h1 className='display-4 fw-bold'>One Step <br /> Closer To Your <br /> <span className='text-info'>Dream Job</span></h1>
                              <p className='my-3'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                              <Button variant="info" className='py-2 my-3'>Get Started</Button>
                         </div>
                         <div className='col-lg-6 '>
                              <img src="https://img.freepik.com/free-photo/portrait-smiling-handsome-man-eyeglasses_171337-4853.jpg?w=996&t=st=1681271348~exp=1681271948~hmac=0053fa96353ea56f4f6b102af4dd75a2fabc8907c27b5267931ee08f150d857e" className=' img-fluid imgStyle1' alt="" />
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
                         {
                              allDataArr.map(data => <FeaturedJob 
                                   key={data.id}
                                   jobData ={data}
                              ></FeaturedJob>)
                         }
                         <Button onClick={()=> showAll(featuredJobData.length)} variant="info" className='mt-3 mb-5 p-2 seeAllBtn'>See All Jobs</Button>
                    </div>
               </section>
          </div>
     );
};

export default Home;