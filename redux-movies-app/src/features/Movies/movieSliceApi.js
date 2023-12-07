import { createAsyncThunk } from "@reduxjs/toolkit"
import url from "../../common/apis/movieApi"
import ApiKey from "../../common/apis/ApiKey"



export const fetchAsyncMovies = createAsyncThunk('/movies/fetchAsyncMovies',
async (search)=>{
    const response = await url.get(`?apikey=${ApiKey}&s=${search}&type=movie`)

    // console.log(response.data)
    return response.data
     
})

export const fetchAsyncShows = createAsyncThunk('/movies/fetchAsyncShows',
async (search)=>{
    const response = await url.get(`?apikey=${ApiKey}&s=${search}&type=series`)

    // console.log(response.data)
    return response.data
     
})

export const fetchAsyncShoworMovieDetail = createAsyncThunk('/movies/fetchAsyncShoworMovieDetail',
async (id)=>{
    const response = await url.get(`?apikey=${ApiKey}&i=${id}&plot=full`)

    // console.log(response.data)
    return response.data
     
})
