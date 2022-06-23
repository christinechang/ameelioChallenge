import React from "react";

const BookInfoItem = (props) => {
  return (
    <div className="listLine">
      <div className="listLineLabel listLineItem">{props.label}:</div>
      <div className="listLineItem">{(props.value) || ''}</div>
    </div>
  )
}

const BookInfoDisplay = (props) => {
  const getBookInfo = (key) => {
    const info = (props && props.bookInfo && props.bookInfo[key]) || '';

    return (Array.isArray(info) ? info.join(', ') : info);
  }

  const listing = (
    <div className="aSection">
      <BookInfoItem label='Title' value={getBookInfo('title')} />
      <BookInfoItem label='Authors' value={getBookInfo('authors')} />
      <BookInfoItem label='ISBN' value={getBookInfo('isbn')} />
      <BookInfoItem label='Category' value={getBookInfo('category')} />
      <BookInfoItem label='Short Description' value={getBookInfo('shortDescription')} />
      <BookInfoItem label='Long Description' value={getBookInfo('longDescription')} />
      <BookInfoItem label='Publish Date' value={getBookInfo('publishDate')} />
      <BookInfoItem label='Status' value={getBookInfo('status')} />
      <BookInfoItem label='Page Count' value={getBookInfo('pageCount')} />
      <BookInfoItem label='Thumbnail URL' value={getBookInfo('thumbnail_URL')} />

    </div>
  );
  return listing
}

export default BookInfoDisplay;