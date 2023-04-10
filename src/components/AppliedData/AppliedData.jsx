import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppliedData = ({ data }) => {
     console.log(data)
     const { logo, id } = data
     return (
          <div className='container'>
               <div className="card mb-3">
                    <div className='row'>
                         <div className='col-lg-8'>
                              <div className="row g-0">
                                   <div className="col-md-4">
                                        <img src={logo} className="img-fluid rounded-start" alt="..." />
                                   </div>
                                   <div className="col-md-8">
                                        <div className="card-body">
                                             <h5 className="card-title">Card title</h5>
                                             <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                             <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className='col-lg-4 d-flex justify-content-center'>
                              <div className='py-5'>
                                   <Button variant="info my-lg-5">
                                        <Link className='text-decoration-none' to={`/viewDetails/${id}`}>View Details</Link>
                                   </Button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AppliedData;