import React from 'react';
import ReactDom from 'react-dom';

// css - full path
import './index.css'

const books = [{
  id: 1,
  author: 'Steve Mann',
  title: 'Easy Peasy Puppy Squeezy: Your simple step-by-step guide to raising and training a happy puppy or dog',
  img: 'https://images-eu.ssl-images-amazon.com/images/I/81X9FfdcX%2BL._AC_UL200_SR200,200_.jpg'
},
{
  id: 2,
  author: 'Anna Dewdney',
  title: 'Llama Llama I Love You',
  img: 'https://images-na.ssl-images-amazon.com/images/I/918sHoEOD8L._AC_UL200_SR200,200_.jpg'
},
{
  id: 3,
  author: 'George Orwell',
  title: '1984 (Signet Classics)',
  img: 'https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL._AC_UL200_SR200,200_.jpg'
}];


function BookList() {
  return (
    <section className='booklist'> 
      {books.map((bookObject) => {
        return <Book key={bookObject.id} {...bookObject}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const {img, title, author} = props;
  return (
    <article className='book'>
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList></BookList>, document.getElementById('root'));