import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./museumReview.css"
import Navbar from "../../components/Navbar"
import { FaStar, FaSearch } from 'react-icons/fa'
import Grid from "../../assets/grid.svg"
import LoadingBar from "../../components/loading/LoadingBar.jsx";

const MuseumListPage = () => {
  
  const [data, setData] = useState([])
  const [averageRatings, setAverageRatings] = useState([]);
  const [input, setInput] = useState("")
  const [result, setResult] = useState([])

  useEffect(() => {
    const fetchData = async() => {

        try {
            let response = await axios.get(
              'https://museumreview.onrender.com/museum'
                )
            setData(response.data)
        } 
        catch (error) {
          alert('server tidak merespon')
        }
    }
  fetchData();

}, []);


  useEffect(() => {
    if (data && data.length > 0) {
      
      const avgRatings = data.map((museum) => {
        const totalRating = museum.rate.reduce((acc, curr) => acc + curr, 0);
        return totalRating / museum.rate.length;
      });

      setAverageRatings(avgRatings);
    }
  }, [data]);

  const displaySearch = (value) => {
    
    const results = data.filter((museum) => {
      return (
        value && museum && museum.name && museum.name.toLowerCase().includes(value))
     
    }) 

    setResult(results)
  }

  const handleChange = (value) => {
      setInput(value)
      displaySearch(value)
  }

  return (
    <div>
      <Navbar/>
      <div className="museum-main" style={{backgroundImage: `url(${Grid})`, backgroundRepeat: "repeat", backgroundSize: "100px auto", minHeight: "100vh"}} onClick={() => setResult([])}>
        <div className="search-wrapper">
          <div className="search-bar-container">
            <FaSearch color="#696969"/>
            <input className='museum-search-input' placeholder='search museum' type="text" value={input.toLowerCase()} onChange={(e) => handleChange(e.target.value)} />
          </div>
          <div className="search-result">{result?.map((v, i) => {
            return (
              <Link to={`review-museum/${v.id}`}><div style={{padding: "5px"}} key={v.id}>{v.name}</div></Link>
            )
          })}</div>
        </div>
        <div className="card-container">
          {data.length === 0 ? (
           <div><LoadingBar/></div>) : (
            data.map((museum, index) => (
              <Link to={`review-museum/${museum.id}`}>
                <div className="card-museum" key={museum.id}>
                  <div className="card-image" style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src={museum.logo} style={{height: "95%", width: "auto"}}/>
                  </div>
                  <div className="card-content" style={{padding: "2%"}}>
                    <h1 className='title-museum' style={{color: "#101626"}}>{museum.name}</h1>
                    <h2 className='location-museum'>Jakarta, Indonesia</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                      <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                        {[1, 2, 3, 4, 5].map((ratingValue, i) => (
                        <label key={ratingValue}>
                          <input type="radio" name="rating" value={ratingValue} defaultChecked={averageRatings[index] === ratingValue} />
                          <FaStar className="stars-user" color={ratingValue <= Math.round(averageRatings[index]) ? '#ffc107' : '#e4e5e9'} />
                        </label>
                        ))}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <p className="info-rating">
                          <b>
                            {averageRatings[index] > 0
                            ? `${averageRatings[index].toFixed(1)}`
                            : '0'}
                          </b>
                        </p>
                        <p className="info-rating" style={{ padding: '0' }}>
                            {museum.rate?.length >= 2
                            ? `${museum.rate?.length} ratings`
                            : `${museum.rate?.length} rating`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
                  ))
                )}
            </div>
        </div>
    </div>
  );
};

export default MuseumListPage;

