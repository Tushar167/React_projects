import React,{useState} from "react";
import user from "../../images/user.png";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies,fetchAsyncShows } from "../../features/Movies/movieSliceApi";

const Header = () => {
  const [Search, setSearch] = useState("")
  const dispatch  = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(fetchAsyncMovies(Search))
    dispatch(fetchAsyncShows(Search))
    setSearch("")
  }


  return (
    <div className="header">
      <Link to="/">
      <div className="logo">
        Movie App
      </div>
      </Link>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search" value={Search} onChange={(e)=>{setSearch(e.target.value)}}/>
          <button type="submit"><i className="fa fa-search"> </i></button>
        </form>
      </div>
      <div className="user_image">
        <img src={user} alt="" />
      </div>
    </div>
  );
};

export default Header;
