import React from 'react';
import { Button } from 'react-bootstrap';
import './Statistics.css'

const Statistics = () => {
     return (
          <div className=' mt-5 pt-5'>
               <header className='container py-lg-5'>
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
               <section>

               </section>
          </div>
     );
};

export default Statistics;