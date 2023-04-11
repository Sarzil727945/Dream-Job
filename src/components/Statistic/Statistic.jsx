import React from 'react';
import './Statistic.css'
import {
     ComposedChart,
     Line,
     Area,
     Bar,
     XAxis,
     YAxis,
     CartesianGrid,
     Tooltip,
     Legend,
     ResponsiveContainer,
} from 'recharts';

const Statistic = () => {
     const data = [
          {
               name: 'Assignment-1',
               marks: 55,               
          },
          {
               name: 'Assignment-2',
               marks: 58,
          },
          {
               name: 'Assignment-3',
               marks: 60,
          },
          {
               name: 'Assignment-4',
               marks: 60,
          },
          {
               name: 'Assignment-5',
               marks: 59,
          },
          {
               name: 'Assignment-6',
               marks: 60,
          },
          {
               name: 'Assignment-7',
               marks: 60,
          },
          {
               name: 'Assignment-8',
               marks: 60,
          },
     ];
     return (
          <div className='mt-5 pt-5'>
               <h1 className='py-5 text-center'>Statistics</h1>
               <ComposedChart
                    width={1200}
                    height={400}
                    data={data}
                    margin={{
                         top: 20,
                         right: 20,
                         bottom: 20,
                         left: 20,
                    }}
                    className='statistic d-flex justify-content-center mx-auto'
               >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="marks" barSize={25} fill="#413ea0" />
                    <Line type="monotone" dataKey="marks" stroke="#ff7300" />
               </ComposedChart>
          </div>
     );
};

export default Statistic;