import React from 'react';
import { Card } from 'react-bootstrap';

const FeaturedJob = ({jobData}) => {
     const {logo, name, location, salary}=jobData
     console.log(jobData)
     return (
          <div className='col-lg-6 mb-3'>
               <div>
                    <Card className=''>
                         <Card.Body>
                              <img className='CartImgStyle' src={logo} alt="" />
                              <Card.Title className=''>{name}</Card.Title>
                              <Card.Subtitle className=" text-muted">
                                   <span className='me-3'>{location}</span>
                                   <span> {salary}</span>
                                   </Card.Subtitle>
                         </Card.Body>
                    </Card>
               </div>
          </div>
     );
};

export default FeaturedJob;