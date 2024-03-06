import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

function Book({ book }) {
  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      setTimeout(() => {
        setImg(image);
      }, 100);
    };
  });

  return (
    <div className="book">
      {img ? (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img src={img.src} alt="" className="book__img" />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <Rating rating={book.rating} />
          <Price
            originalPrice={book.originalPrice}
            salePrice={book.salePrice}
          />
        </>
      ) : (
        <>
          <div className="skeleton book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}
    </div>
  );
}

export default Book;
