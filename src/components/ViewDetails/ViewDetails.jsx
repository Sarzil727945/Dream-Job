import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
     const jsonId = useParams();
     console.log(jsonId);

     const [jobJsonData, setJobJsonData] = useState([]);
     useEffect(()=> {
          fetch('/FeaturedJob.json')
          .then(res => res.json())
          .then(data => setJobJsonData(data))
     },[])
     console.log(jobJsonData)

     return (
          <div className='mt-5 pt-5'>
               <h1>/viewDetails</h1>
          </div>
     );
};

export default ViewDetails;