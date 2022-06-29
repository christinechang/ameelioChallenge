import React from 'react';
import { useParams } from 'react-router-dom';

const BookInfoItem = (props) => {
  return (
    <div className="infoLine">
      <div className="listLineItem boldTitle">{props.label}:</div>
      <div className= {props.className || 'listLineItem'}>{(props.value) || ''}</div>
    </div>
  )
}

const BookInfo = (props) => {
  const { books, pageTitle } = props;
  const { id } = useParams();
  const book = books[id - 1];

  const getBookInfo = (key) => {
    const info = book ? book[key] : '';
    return (Array.isArray(info) ? info.join(', ') : info);
  }

  return (
    <div className="section">
      {pageTitle
        ? (<div className="pageTitle">{pageTitle} </div>)
        : (<></>)
      }
      <div className="infoLine">
        <img src={getBookInfo('thumbnailUrl')} alt="Book Cover" width="90" height="113" ></img>
        <div>
          <BookInfoItem label='Title' value={getBookInfo('title')} />
          <BookInfoItem label='Authors' value={getBookInfo('authors')} />
          <BookInfoItem label='ISBN' value={getBookInfo('isbn')} />
          <BookInfoItem label='Categories' value={getBookInfo('categories')} />
          <BookInfoItem label='Short Description' value={getBookInfo('shortDescription')} className="listParagraphItem"/>
          <BookInfoItem label='Long Description' value={getBookInfo('longDescription')}  className="listParagraphItem"/>
          <BookInfoItem label='Publish Date' value={getBookInfo('publishDate')} />
          <BookInfoItem label='Status' value={getBookInfo('status')} />
          <BookInfoItem label='Page Count' value={getBookInfo('pageCount')} />
        </div>
      </div>
    </div>
  );
}

export default BookInfo;