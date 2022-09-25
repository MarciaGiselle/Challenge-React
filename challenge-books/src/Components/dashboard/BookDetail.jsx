import React from 'react'

const BookDetail = () => {
    return ( 
        <div className='flex-container'>
            <div className="section-item mr-1 text-center">
                <img className='card-image-rounded' src="https://www.energygreenmap.org/logo_greenmap.svg" alt="LOGO GREENMAP"/>
                <p><b>Twitter</b></p>
            </div>
            <div className="section-item-two mr-1 ">
                <h4 className='text-cut'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate consequuntur perferendis odio itaque! Cupiditate, quas. </h4>
                <p className='text-cut '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate consequuntur perferendis odio itaque! Cupiditate, quas. </p>

                <div className='flex-container-small '>
                    <div className="section-item mr-1">
                       <span> <i className='far fa-comment'></i>
                        200</span>
                    </div>
                    <div className="section-item mr-1">
                        <span> <i className="material-icons"></i>
                        9:00 PM</span>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default BookDetail;