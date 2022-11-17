import React from 'react';
import './index.css';

import Navbar from './MainNavbar/Navbar';
import MoviesSlider from './PosterSlider/MoviesSlider';

// import MovieDetail from './MoviePoster/MovieDetail';
// import HallShowMovies from './AllHallAllTime/HallShowMovie';
// import SeatMatrix from './HallSeatMatrix/SeatMatrixx';
// import BookingSummary from './BookingTicket/BookingSummary';
// import Ticket from './BookingTicket/Ticket';



function AllComponent({user, setUser, nav}) {
    return (<div>
        <Navbar user = {user} setUser = {setUser}  nav = {nav}></Navbar>
        <MoviesSlider></MoviesSlider>

{/* <MovieDetail></MovieDetail> */}
{/* <HallShowMovies></HallShowMovies> */}
{/* <SeatMatrix></SeatMatrix> */}
{/* <BookingSummary></BookingSummary> */}
{/* <Ticket></Ticket> */}

 
        </div>
    );
}







export default AllComponent;