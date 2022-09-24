import React from 'react'


const Book = ({book}) => {
    return (  
        <div  className='flex-container-list'>  
            <div className="section-item-two  mr-1">
             <h4>{book.volumeInfo.title}</h4>
            </div>
            <div className="section-item  mr-1">
             <p>{book.volumeInfo.publishedDate}</p>
            </div>
            <div className="section-item-two  mr-1">
             <p>{book.volumeInfo.authors}</p>
            </div>
            
            <div className="section-item  mr-1">
            <a href={book.volumeInfo.infoLink} target="_blank">
                <i className="fas fa-eye"></i>
                 Ver más
                </a>
            </div>
        </div>
          
    );
}
 
export default Book;