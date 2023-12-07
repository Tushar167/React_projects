import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsApp = (props) => {
  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const [value, setvalue] = useState("");

  useEffect(()=>{
    setvalue(props.searchValue)
  },[props.searchValue])

  const myElement = () => {
    return <div>Hello</div>;
  };
  const fetchInitialData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=89454839caef43dda207fd0c0d31bc6e&page=${page}&pageSize=${props.pageSize}`;
    let d = await fetch(url);
    let d1 = await d.json();
    setpage(page + 1);
    setarticles(d1.articles);
    settotalResults(d1.totalResults);
  };

  useEffect(() => {
    fetchInitialData();
    console.log("Rendered again");
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=89454839caef43dda207fd0c0d31bc6e&page=${page}&pageSize=${props.pageSize}`;
    let d = await fetch(url);
    let d1 = await d.json();
    setarticles(articles.concat(d1.articles));
    setpage(page + 1);
    settotalResults(d1.totalResults);
  };

  const getFilteredData = () => {
    if (props?.searchValue) {
      return articles.filter((element) => {
        return element?.description?.includes(props?.searchValue);
      });
    }
    return articles;
  };

  const filteredData = getFilteredData(props.searchValue);

  console.log("props", props.searchValue);
  return (
    <>
      <h2 className="text-center" style={{ margin: "50px 0px" }}>
        News App for everyone
      </h2>
      <InfiniteScroll
        dataLength={filteredData.length}
        next={fetchMoreData}
        hasMore={filteredData.length !== totalResults}
        loader={<h4>Loading....</h4>}
      >
        <div className="container">
          <div className="row">
            {filteredData.map((val) => {
              return (
                <div className="col-md-4" key={val.url}>
                  <NewsItem
                    title={val.title}
                    description={val.description}
                    imageUrl={val.urlToImage}
                    newsUrl={val.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

NewsApp.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 5,
  searchValue: "",
};
NewsApp.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
  searchValue: PropTypes.string,
};

export default NewsApp;
