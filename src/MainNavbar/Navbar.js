import React, { useState } from 'react';
import './MainNavbar.css';
import {Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchMovies from '../SearchMovies/SerachMovies';
import { Link } from 'react-router-dom';
import LoginModalForm from '../LoginModal/LoginModalForm';
// const img = "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ajay-devgn-24051-12-09-2017-04-41-13.jpg"

function Navbar({ user, setUser, nav}) {

    const [searchMovie, setSearchMovie] = useState("");
    // const [user, setUser] = useState("")
    const HideSearch = () => {
        setSearchMovie("");
    }

    let show = <div className='SearchFileterfixed'>
        <CloseOutlinedIcon onClick={HideSearch}
            className='closeSearch' />
        <SearchMovies />
    </div>

    const SignOut = ()=>{
        //////////////////////////////////axios
        setUser("")
        window.localStorage.removeItem("isLoggedIn")
    }

    const ShowList = () => {
        setSearchMovie(show)
    }
    return (<>
        <div className='returndivcloseSearch'>
            {searchMovie}
        </div>


        <div className="navbar">
            <div className="navbarTop">
                <div className="navbarTopLeft">
<Link to="/">
                    <a href="" className="logo">BookmyMovie</a>
</Link>
                    <Link to="/movie-details-By- search movie-name">
                    <input type="text" className="searchMovies"
                        placeholder='search for movies, plays, events, sports ....'
                        onClick={() => { ShowList() }} />
                       </Link>
                </div>
                <div className="navbarTopRight">
                    <MenuIcon className="menu"></MenuIcon>
                    {
                        user && user.length ? (
                            <div>
                                <a style = {{color:'white', margin:'10px'}}>Hi {user}</a>
                                <Avatar size={32} icon={<UserOutlined />} />
                                <button onClick={SignOut} className="signIn">Sign-out</button>
                            </div>
                        ): 
                        // (<button onClick={() => setShowModal(true)} className="signIn">Sign-in</button>)
                        <LoginModalForm setUser = {setUser} nav = {nav}/>
                    }
                    {/* {
                        showModal && (<LoginModalForm setUser = {setUser} nav = {nav} setShowModal = {setShowModal}/>)
                    } */}
                    <div className="currentLocation">
                        <select className="currentLocationOptions">
                            <option  value="Delhi-NCR" className="currentLocationCity">Delhi-NCR</option>
                            <option value="NOIDA" selected className="currentLocationCity">NOIDA</option>
                            <option value="GAJIYABAD" className="currentLocationCity">GAJIYABAD</option>
                            <option value="GURUGRAM" className="currentLocationCity">GURUGRAM</option>
                            <option value="PUNJAB" className="currentLocationCity">PUNJAB</option>
                            <option value="BIHAR" className="currentLocationCity">BIHAR</option>

                        </select>
                    </div>
                </div>
            </div>
            <div className="navbarBottom">
                <div className="navbarBottomAllOptionsLeft">
                    <a href="_blank" className="navbarBottomOptionsLeft">Movies</a>
                    <a href="_blank" className="navbarBottomOptionsLeft">Stream</a>
                    <a href="_blank" className="navbarBottomOptionsLeft">Events</a>
                    <a href="_blank" className="navbarBottomOptionsLeft">Plays</a>
                    <a href="_blank" className="navbarBottomOptionsLeft">Sports</a>
                    <a href="_blank" className="navbarBottomOptionsLeft">Acitvies</a>
                    <a href="_blank" className="navbarBottomOptionsLeft">Buzz</a>
                </div>
                <div className="navbarBottomAllOptionsRight">
                    <a href="_blank" className="navbarBottomOptionsRight">Gift Card</a>
                    <a href="_blank" className="navbarBottomOptionsRight">Offers</a>
                    <a href="_blank" className="navbarBottomOptionsRight">Corporates</a>
                    <a href="_blank" className="navbarBottomOptionsRight">ListYourMovies</a>

                </div>
            </div>
        </div>
    </>);
}

export default Navbar;