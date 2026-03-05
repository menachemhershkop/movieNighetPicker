import React from 'react'
import { useParams } from 'react-router'
import { useMovieStore } from '../store/movieStore';

function Seats() {
  const {id} =useParams();
  const {seatSelections, selectSeat} = useMovieStore();
  const selectedSeat = seatSelections[id]
  const seats = Array.from({length:30}, (_,i)=>i+1)
  return (
    <div>
      <h2>Choose a seat</h2>
      <div className='seat-grid'>
        {seats.map((seat)=>(
          <button key={seat} className={`seat ${selectedSeat === seat ? "selected" : "available"}`} onClick={()=> selectSeat(id, seat)}>{seat}</button>
        ))}
      </div>
      <p>Your seat for this movie: {selectedSeat}</p>
    </div>
  )
}

export default Seats
