import React from 'react';
import './JobList.css'
import { Card } from 'react-bootstrap';

const JobList = ({ data }) => {
     console.log(data)
     const {img, name, job} = data;
     return (
          <div className='col-lg-3 mb-3'>
               <div>
                    <Card className='p-3'>
                         <Card.Body>
                              <img className='CartImgStyle mb-4' src={img} alt="" />
                              <Card.Title className='mt-4'>{name}</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">{job}</Card.Subtitle>
                         </Card.Body>
                    </Card>
               </div>
          </div>
     );
};

export default JobList;