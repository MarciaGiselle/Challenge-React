import React, {useState, useEffect} from 'react'
import axios from 'axios';

const SectionRightOne = () => {

  
  const [bookOne, setBookOne] = useState({});
  const [bookTwo, setBookTwo] = useState({});
  const [bookThree, setBookThree] = useState({});
  const [bookFour, setBookFour] = useState({});
  
  useEffect(() => {
      const getBooks = async ()=>{
          const url = `https://www.googleapis.com/books/v1/volumes/VWg0EAAAQBAJ`
          const url2 = `https://www.googleapis.com/books/v1/volumes/6r6PDwAAQBAJ`;
          const url3 = `https://www.googleapis.com/books/v1/volumes/tqt0QHyMSJQC`;
          const url4 = `https://www.googleapis.com/books/v1/volumes/pphSEAAAQBAJ`;

          const [bookOne, bookTwo, bookThree,bookFour] = await Promise.all([
              axios(url),
              axios(url2),
              axios(url3),
              axios(url4)
          ])
          setBookOne(bookOne.data)
          setBookTwo(bookTwo.data)
          setBookThree(bookThree.data)
          setBookFour(bookFour.data)
      }
  
      getBooks()
  }, [])

  const image= (Object.keys(bookOne).length !==0) ?
    <img className='card-image-top' src={bookOne.volumeInfo.imageLinks.smallThumbnail} alt={bookOne.volumeInfo.title}/>
  : null;

  const imageTwo= (Object.keys(bookTwo).length !==0) ?
  <img className='card-image-top' src={bookTwo.volumeInfo.imageLinks.smallThumbnail} alt={bookTwo.volumeInfo.title}/>
: null;

const imageThree= (Object.keys(bookThree).length !==0) ?
<img className='card-image-top' src={bookThree.volumeInfo.imageLinks.smallThumbnail} alt={bookThree.volumeInfo.title}/>
: null;

const imageFour = (Object.keys(bookFour).length !==0) ?
<img className='card-image-top' src={bookFour.volumeInfo.imageLinks.smallThumbnail} alt={bookFour.volumeInfo.title}/>
: null;

    return ( 
        <div className='height-110 mb-1'>
                <div className='flex-container'>
                  <div className="section-item card-light mr-1 text-center">
                    <div className='cover'>
                    {image}
                    </div>
                  </div>
                  <div className="section-item card-light mr-1 text-center">
                    <div className='cover'>
                      {imageTwo}
                    </div>
                  </div>
                  <div className="section-item card-light mr-1 text-center">
                    <div className='cover'>
                      {imageThree}
                    </div>
                  </div>
                  <div className="section-item card-light text-center">
                    <div className='cover'>
                      {imageFour}
                    </div>
                  </div>
                </div>
              </div>

     );
}
 
export default SectionRightOne;