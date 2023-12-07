/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import React from "react";

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl } = props;

    return (
      <div>
        <div className="card my-3">
          <img src={imageUrl?imageUrl:"https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg"} className="card-img-top" alt="img did not load"/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}.</p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-dark"
              rel="noreferrer"
            >
              Explore this news
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
