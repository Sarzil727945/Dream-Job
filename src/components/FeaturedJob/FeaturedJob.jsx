import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import './FeaturedJob.css'

const FeaturedJob = ({ jobData }) => {
     const { logo, jobTitle, location, salary, id, name, btn1, btn2 } = jobData;
     return (
          <div className='col-lg-6 mb-3'>
               <div>
                    <Card className=''>
                         <Card.Body>
                              <img className='CartImgStyle2' src={logo} alt="" />
                              <Card.Title className='mt-4'>{jobTitle}</Card.Title>
                              <Card.Subtitle className=" text-muted mb-2">
                                   {name}
                              </Card.Subtitle>
                              <Button variant="outline-info" className='m-2'>{btn1}</Button>
                              <Button variant="outline-info" className='m-2'>{btn2}</Button>
                              <Card.Subtitle className=" text-muted my-2">
                                   <span className='me-3'>{location}</span>
                                   <span> Salary :  {salary}</span>
                              </Card.Subtitle>
                              <Button  variant="info">
                                   <Link className='text-decoration-none' to={`/viewDetails/${id}`}>View Details</Link>
                              </Button>
                         </Card.Body>
                    </Card>
               </div>
          </div>
     );
};

export default FeaturedJob;