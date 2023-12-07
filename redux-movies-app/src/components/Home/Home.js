import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch } from 'react-redux'
import {fetchAsyncMovies, fetchAsyncShows} from '../../features/Movies/movieSliceApi'

const Home = () => {
  const dispatch = useDispatch()
  const movie = "Harry"
  const series = "Friends"
  useEffect(()=>{
    dispatch(fetchAsyncMovies(movie))
    dispatch(fetchAsyncShows(series))
  },[dispatch])



  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  )
}

export default Home
