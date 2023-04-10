import React from 'react';
import { useParams } from 'react-router-dom';

const Statistics = () => {
     const { id } = useParams();
     console.log(id)
     return (
          <div className='mt-5 pt-5'>
              <h1>Statistics</h1> 
          </div>
     );
};

export default Statistics;