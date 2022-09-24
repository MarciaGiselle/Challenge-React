import React from 'react'


const Book = ({book}) => {
    return (  
        <div  className='flex-container-list'>  
            <div className="section-item  mr-1">
             <h4>{book.volumeInfo.title}</h4>
            </div>
            <div className="section-item  mr-1">
             <p>{book.volumeInfo.publishedDate}</p>
            </div>
            <div className="section-item  mr-1">
             <p>{book.volumeInfo.authors}</p>
            </div>
            <div className="section-item  mr-1">
             <p>{book.volumeInfo.language}</p>
            </div>
            <div className="section-item  mr-1">
             <p>{book.volumeInfo.infoLink}</p>
            </div>
        </div>
          
    );
}
 
export default Book;