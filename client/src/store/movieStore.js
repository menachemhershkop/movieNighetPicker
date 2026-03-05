import {create} from 'zustand';

export const useMovieStore = create((set)=>({
    movie:[],
    isLoading: false,
    error:null,
    searchQuery:"",
    seatSelections:{},
    setMovies:(movies)=>set({movies}),
    setSearchQuery:(value)=>set({searchQuery:value}),
    setLoading: (boolean)=>set({setLoading:boolean}), 
    setError:(message)=>set({Error:message}),
    selectSeat:(movieId, seatNumber)=> set((state)=>{
            const update ={...state.seatSelections, [movieId]:seatNumber}
            localStorage.setItem('seats', JSON.stringify(update))
            return {seatSelections:update}
    }),
    loadSeatSelectionsFromStorage:()=>{
        const stored = localStorage.getItem('seats')
        if (stored){
            set({seatSelections:JSON.parse(stored)})
        }
    }

}))