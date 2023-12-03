import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useFetch } from '../hooks/hooks'
import "./museumReview.css"
import Navbar from "../components/Navbar"
import { FaStar } from 'react-icons/fa'

const MuseumListPage = () => {
  
    const data = useFetch("https://museumreview.onrender.com/museum")

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  return (
    <div>
      <Navbar/>
      <div className="museum-main">
        <div className="card-container">
          {data === undefined? "" : data.map((value, index) => (
              <Link to={`review-museum/${data[index].id}`}>
                <div key={index} className="card-museum">
                  <div className="card-image" style={{width: "100%", backgroundImage: `url(${value.image})`, backgroundPosition: "center center", backgroundSize: "100% auto"}}></div>
                  <div className="card-content" style={{padding: "2%"}}>
                    <h1 className='title-museum' style={{color: "#101626"}}>{value.name}</h1>
                    <h2 className='location-museum'>Jakarta, Indonesia</h2>
                    <div
                        style={{
                          display: "flex",
                          gap: "5px",
                        }}
                      >
                        {[1, 2, 3, 4, 5].map((ratingValue, i) => (
                          <label key={ratingValue}>
                            <input
                              type="radio"
                              name="rating"
                              value={ratingValue}
                              checked={4}
                              style={{ height: "20%" }}
                            />
                            <FaStar className='stars-user' color={4 <= i? "#101626" : "#ffc107" }/>
                          </label>
                        ))}
                      </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MuseumListPage;