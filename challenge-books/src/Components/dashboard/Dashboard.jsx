import React from 'react';
import SectionLeft from './SectionLeft';
import SectionRight from './SectionRight';

const Dashboard = () => {
    return (  
       <div className='flex-container' >
             <SectionLeft/>
            <SectionRight/>
          
         </div>
   );
}
 export default Dashboard;