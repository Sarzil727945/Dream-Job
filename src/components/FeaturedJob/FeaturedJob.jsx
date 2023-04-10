import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link} from 'react-router-dom';

const FeaturedJob = ({ jobData }) => {
     const { logo, name, location, salary, id } = jobData;
     return (
          <div className='col-lg-6 mb-3'>
               <div>
                    <Card className=''>
                         <Card.Body>
                              <img className='CartImgStyle' src={logo} alt="" />
                              <Card.Title className=''>{name}</Card.Title>
                              <Button variant="outline-info" className='m-2'>Remote</Button>
                              <Button variant="outline-info" className='m-2'>Full Time</Button>
                              <Card.Subtitle className=" text-muted my-2">
                                   <span className='me-3'>{location}</span>
                                   <span> {salary}</span>
                              </Card.Subtitle>
                              <Button variant="info">
                                   <Link to={`/viewDetails/${id}`}>View Details</Link>
                              </Button>
                         </Card.Body>
                    </Card>
               </div>
          </div>
     );
};

export default FeaturedJob;