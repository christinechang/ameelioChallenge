import React from "react";

const BookInfoItem = (props) => {
  return (
    <div className="infoLine">
      <div className="listLineItem colLabel">{props.label}:</div>
      <div className="listLineItem">{(props.value) || ''}</div>
    </div>
  )
}

const BookInfoDisplay = (props) => {

  const getBookInfo = (key) => {
    const info = props && props.book && props.book[key] ? props.book[key] : '';
    return (Array.isArray(info) ? info.join(', ') : info);
  }

  return (
    <div className="aSection lineList">
      { props.title
        ? (<div className="pageTitle">{props.title } </div>)
        : (<></>)
      }

      <BookInfoItem label='Title' value={getBookInfo('title')} />
      <BookInfoItem label='Authors' value={getBookInfo('authors')} />
      <BookInfoItem label='ISBN' value={getBookInfo('isbn')} />
      <BookInfoItem label='Categories' value={getBookInfo('categories')} />
      <BookInfoItem label='Short Description' value={getBookInfo('shortDescription')} />
      <BookInfoItem label='Long Description' value={getBookInfo('longDescription')} />
      <BookInfoItem label='Publish Date' value={getBookInfo('publishDate')} />
      <BookInfoItem label='Status' value={getBookInfo('status')} />
      <BookInfoItem label='Page Count' value={getBookInfo('pageCount')} />
      <BookInfoItem label='Thumbnail URL' value={getBookInfo('thumbnailUrl')} />
    </div>
  );
}

export default BookInfoDisplay;