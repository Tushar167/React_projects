import { createSlice} from "@reduxjs/toolkit";

import {fetchAsyncMovies, fetchAsyncShoworMovieDetail,fetchAsyncShows} from '../Movies/movieSliceApi'

const initialState = {
    movies : {},
    shows : {},
    showOrMovie : {},
}

const movieSlice = createSlice({
    name : 'entertainment',
    initialState : initialState,
    reducers : {
        removeSelectedMovieorShow : (state) =>{
            state.showOrMovie = {}
        }
    },
    extraReducers : {
        [fetchAsyncMovies.pending] :()=>{
            console.log('pending')
        },
        [fetchAsyncMovies.fulfilled] :(state,{payload})=>{
            console.log("Fetched Successfully")
            return {...state,movies:payload}

        },
        [fetchAsyncMovies.rejected] :()=>{
            console.log("Rejected")
        },
        [fetchAsyncShows.pending] :()=>{
            console.log('pending')
        },
        [fetchAsyncShows.fulfilled] :(state,{payload})=>{
            console.log("Fetched Successfully")
            return {...state,shows:payload}
        },
        [fetchAsyncShoworMovieDetail.fulfilled] :(state,{payload})=>{
            console.log("Fetched Successfully")
            return {...state,showOrMovie:payload}
        },
    }
})

export const {removeSelectedMovieorShow} = movieSlice.actions
export default movieSlice.reducer