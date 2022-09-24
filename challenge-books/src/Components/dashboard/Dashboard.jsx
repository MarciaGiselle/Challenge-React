import React from 'react';

const Dashboard = () => {
    return ( 
            <>
              <div className='height-110 mb-1'>
                <div className='flex-container'>
                  <div className="section-item card-light mr-1">1</div>
                  <div className="section-item card-light mr-1">2</div>
                  <div className="section-item card-light mr-1">3</div>
                  <div className="section-item card-light"> 4</div>
                </div>
              </div>

                <div className='card-light height-220 mb-1'>            
                  <h1>List books</h1>
                </div>


              <div className="card-light height-130">
                <div className='flex-container'>
                   <div className="section-item mr-1">1</div>
                   <div className="section-item ">2</div>
                  </div>
              </div>
              </>

     );
}
 
export default Dashboard;