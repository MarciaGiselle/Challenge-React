import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Book from './Book';

const SectionRightTwo= () => {
    const [books, setBooks] = useState([]);

  
    useEffect(() => {
        const getBooks = async ()=>{
            const url = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor`
            const result = await axios(url)
            setBooks(result.data.items)
        }
    
        getBooks()
    }, [])
     
    return (    
        <div className='card-light height-220 mb-1'>
            <h4>Listado de libros</h4>
            <div className='container-list'>
                {books.map(book=>(
                    <Book
                        key={book.id}
                        book={book}
                    ></Book>
                ))}
            </div>

            
        </div>
     );
}
 
export default SectionRightTwo;