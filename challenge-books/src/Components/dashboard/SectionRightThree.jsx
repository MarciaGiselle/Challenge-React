import React from 'react'
import BookDetail from './BookDetail';

const SectionRightThree = () => {
    return ( 
        <div className="card-light height-130 pt-2">
        <div className='flex-container'>
           <div className="section-item mr-1 pr-2">
                <BookDetail/>
           </div>
           <div className="section-item pr-2">
             <BookDetail/>
           </div>
          </div>
      </div>
     );
}
 
export default SectionRightThree;