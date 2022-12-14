import {Button,  Select, Input } from 'antd';
import React, {useState, useEffect} from 'react';
// import Theaters from './Theaters'
import axios from 'axios' 

const timings = [
    {
        label:"12:00",
        value:"12:00"
    },
    {
        label:"03:00",
        value:"03:00"
    },
    {
        label:"06:00",
        value:"06:00"
    },
    {
        label:"09:00",
        value:"09:00"
    }
]




const ShowForm = () => {
    // const [showDate, setShowDate] = useState("")
    const [city, setCity] = useState(0)
    // const [movieId, setMovieId] = useState(0)
    // const [theaterId, setTheaterId] = useState(0)
    const [fields, setFields] = useState({
        date:"",
        movieId:0,
        theaterId:0,
        timing: ""
    })
    const [cityList, setCityList] = useState(
        [{
            value:1,
            label:"Mumbai"
        },
        {
            value:2,
            label:"Delhi"
        }]
        
    )
    const [lists, setLists] =useState({
        movieList :[{
            value:1,
            label:"Iron Man"
        },
        {
            value:2,
            label:"Infinity war"
        }]
        ,
        theaterList :[{
            value:1,
            label:"Inox, Sector-18"
        },
        {
            value:2,
            label:"Cineplex, Sector-20"

        }]
    })

    useEffect(() => {
        const fetchData = async()=>{
            try{
                const response = await axios.get("http://localhost:8080/movie")
                const data = response.data;
                console.log("movies Data " ,data);
                // .then(response => response.json())
                const newMovies = data.map((movie)=>{return {value:movie.movieId, label:movie.title}})
                setLists({ ...lists, movieList: newMovies } )
            }
            catch(err){
            alert("Failed to fetch movies")
            }
            try{
                const response = await axios.get("http://localhost:8080/city")
                const data = response.data;
                console.log("Cities Data " ,data);
                // .then(response => response.json())
                const newCities = data.map((city)=>{return {value:city.cityId, label:city.name}})
                // setLists({ ...lists, cityList: newCities } )
                setCityList(newCities)
              }
              catch(err){
                alert("Failed to fetch cities")
              }
        }
        fetchData();
    }, []);

    useEffect(()=> {if(city){
        const fetchData = async()=>{
            try{
            const response = await axios.get(`http://localhost:8080/theater/city/${city}`)
            const data = response.data;
            console.log("Theater Data " ,data);
            // .then(response => response.json())
            const newCities = data.map((theater)=>{return {value:theater.theaterId, label:theater.name}})
            setLists({ ...lists, theaterList: newCities } )
            }
            catch(err){
            alert(err.message)
            }
        }
        fetchData();
    }}, [city])
    

    const Submit = () => {
        const fetchData = async()=>{
            try{
              const response = await axios.post("http://localhost:8080/show", fields)
              const data = response.data;
              console.log("Show Data " ,data);
              // .then(response => response.json())
            }
            catch(err){
              alert("Failed")
            }
          }
          fetchData();
    };
    return (
    <div style = {{marginLeft: '50px'}}>
        <div style = {{margin:'20px'}}>
            <Input style = {{width:'200px'}} value={fields.date} placeholder="DD/MM/YYYY"  onChange={(e)=>{setFields({...fields, date:e.target.value} ) } }/>
            {/* <Button style={{ margin:'30px'}} type="primary" onClick={handleDate}>Choose Date</Button> */}
        </div>
        <div style = {{margin:'20px'}}>
            <Select
                allowClear style={{ width: '450px' }}
                placeholder="Select Movie" 
                onChange={(e)=>{setFields({...fields, movieId:e})}} options={lists.movieList}
            />
            {/* <Button type="primary" onClick={handleDate}>Choose Date</Button> */}
        </div>
        <div style = {{margin:'20px'}}>
            <Select
                allowClear style={{ width: '450px' }} 
                placeholder="Select City" 
                onChange={(e)=>{setCity(e)}} options={cityList}
            />
        </div>
        <div style = {{margin:'20px'}}>
            <Select
                allowClear style={{ width: '450px' }} 
                placeholder="Select Theater" 
                onChange={(e)=>{setFields({...fields, theaterId:e})}} options={lists.theaterList}
            />
            {/* <Button type="primary" onClick={handleDate}>Choose Date</Button> */}
        </div>
        <div style = {{margin:'20px'}}>
            <Select
                allowClear style={{ width: '450px' }} 
                placeholder="Select Timing" 
                onChange={(e)=>{setFields({...fields, timing:e})}} options={timings}
            />
            {/* <Button type="primary" onClick={handleDate}>Choose Date</Button> */}
        </div>
        {/* {
            Theaters.map((theater)=>{
                return 
                (<div>
                    <div style = {{margin:'20px'}}>
                        <p>{theater.name}</p>
                    </div>
                    <div style = {{margin: '10px'}}>
                        <Select
                            mode="multiple"
                            allowClear
                            style={{
                                width: '400px',
                            }}
                            placeholder="Please select"
                            onChange={(value)=>{handleChange(value, theater)} }
                            options={options.filter((slot)=>{
                                for(let i = 0; i < theater.shows.length; i++){
                                    const arr = theater.shows[i].split(" ");
                                    if(slot.value === arr[3])return false;
                                }
                                return true
                            })}
                        />
                    </div>
                </div>)
            })
        } */}

        <Button type="primary" onClick={Submit}>Post Show</Button>
    </div>
);}
export default ShowForm;