import React from 'react';
import { useParams } from 'react-router-dom';
import { IBookInfoProps, IBookInfoItemProps, IBookKey } from '../interfaces/BookInterfaces';
import {array2String, convert2String} from '../utilities';

const BookInfoItem = (props: IBookInfoItemProps) => {
  return (
    <div className="infoLine">
      <div className="listLineItem boldTitle">{props.label}:</div>
      <div className={props.className || 'listLineItem'}>{(props.value) || ''}</div>
    </div>
  )
}

const isValidHttpUrl = (testURL: string) => {
  let url;
  try {
    url = new URL(testURL);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

const BookInfo = ({ books, pageTitle, ...props }: IBookInfoProps) => {
  const { id } = useParams();
  const book = books.find((book) => { // find book
    if (id) {
      if (book.title) {
        return (book.isbn
          ? (id.includes(book.isbn) && id.includes(book.title.substring(0, 9).trim())) // handle duplicate isbns
          : (id.includes(book.title.substring(0, 9).trim()))
        );
      } else if (book.isbn) {
        return (id.includes(book.isbn));
      }
    }
    return (''); // no book found
  });

  const getBookInfo = (bookKey: IBookKey) => {
    if (book && bookKey.toString() === 'publishedDate') {
      const dateProcessed = book.publishedDate && book.publishedDate['$date']; // object element '$date'
      return(dateProcessed ? (new Date(dateProcessed)).toLocaleDateString() : '');
    }
    return (book ? convert2String(book[bookKey]) : '');
  }
  const thumbnailUrl = getBookInfo('thumbnailUrl') || '';
  return (
    <div className="section">
      {pageTitle
        ? (<div className="pageTitle">{pageTitle} </div>)
        : (<></>)
      }
      <div className="infoLine">
        {isValidHttpUrl(thumbnailUrl)
          ? <img src={thumbnailUrl} alt="Book Cover" width="90" height="113" ></img>
          : <div style={{ width: '90px' }}></div>
        }
        <div>
          <BookInfoItem label='Title' value={getBookInfo('title')} />
          <BookInfoItem label='Authors' value={getBookInfo('authors')} />
          <BookInfoItem label='ISBN' value={getBookInfo('isbn')} />
          <BookInfoItem label='Categories' value={getBookInfo('categories')} />
          <BookInfoItem label='Short Description' value={getBookInfo('shortDescription')} className="listParagraphItem" />
          <BookInfoItem label='Long Description' value={getBookInfo('longDescription')} className="listParagraphItem" />
          <BookInfoItem label='Published Date' value={getBookInfo('publishedDate')} />
          <BookInfoItem label='Status' value={getBookInfo('status')} />
          <BookInfoItem label='Page Count' value={getBookInfo('pageCount')} />
        </div>
      </div>
    </div>
  );
}

export default BookInfo;