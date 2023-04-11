import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './AppliedData.css'
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineDollarCircle } from 'react-icons/ai';

const AppliedData = ({ data }) => {
     const { logo, id, jobTitle, name, btn1, btn2, location, salary } = data
     return (
          <div className='container'>
               <div className="card mb-3">
                    <div className='row'>
                         <div className='col-lg-8 p-3'>
                              <div className="row g-0">
                                   <div className="col-md-4">
                                        <img src={logo} className="img-fluid rounded rounded-start mx-lg-2 imgStyle" alt="..." />
                                   </div>
                                   <div className="col-md-8 ps-lg-3">
                                        <div className="card-body">
                                             <h5 className="card-title">{jobTitle}</h5>
                                             <p className="card-text"><b className="text-muted">{name}</b></p>
                                             <Button variant="outline-info" className='my-1'>{btn1}</Button>
                                             <Button variant="outline-info" className='my-1 ms-2'>{btn2}</Button>
                                             <Card.Subtitle className=" text-muted my-2">
                                                  <span className='me-3'>
                                                       <HiOutlineLocationMarker className="icon fs-5 mb-1" />
                                                       {location}</span>
                                                  <AiOutlineDollarCircle className='icon fs-5 mb-1' />
                                                  <span> Salary :  {salary}</span>
                                             </Card.Subtitle>
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