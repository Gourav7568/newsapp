import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Signup from './Signup';
 
// import Signup from './Signup'

const available = [

    'Andaman and Nicobar Islands',

    'Andhra Pradesh' ,

    'Arunachal Pradesh',

    'Assam',

    'Bihar',

    'Chandigarh',

    'Chhattisgarh',

    'Dadra and Nagar Haveli',

    'Daman and Diu',

    'Delhi',

    'Goa',

    'Gujarat',

    'Haryana',

    'Himachal Pradesh',

    'Jammu and Kashmir',

    'Jharkhand',

    'Karnataka',

    'Kerala',

    'Ladakh' ,

    'Lakshadweep',

    'Madhya Pradesh',

    'Maharashtra',

    'Manipur',

    'Meghalaya',

    'Mizoram',

    'Nagaland',

    'Odisha',

    'Puducherry',

    'Punjab',

    'Rajasthan',

    'Sikkim',

    'Tamil Nadu',

    'Telangana',

    'Tripura',

    'Uttar Pradesh',

    'Uttarakhand',

    'West Bengal',

]

export default function Navbar() {
    const [filteredResults, setFilteredResults] = useState([]);
    const [inputValue, setInputValue] = useState('');
    

    const handleInputChange = (event) => {
        const input = event.target.value;
        const filtered = available.filter((keyword) =>
            keyword.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredResults(filtered);
        setInputValue(input);
    };


    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                {/* <a href="/"><img className="logo1" src="./news.jpg" alt="" /></a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2  fs-5 fw-bold">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tech">Tech</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sport">Sport</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                        </li>
                    </ul>
                </div>

                <div className='search-box'>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" id='input-box' value={inputValue}
                            onChange={handleInputChange} placeholder="Search State" aria-label="Search" />
                    </form>
                        {inputValue && (
                            <div className="result-box">
                                <ul>
                                    {filteredResults.map((state, index) => (
                                        <a href='https://google.com'><li key={index}>{state}</li></a>
                                    ))}
                                </ul>
                            </div>
                        )}
                </div>
                    <Signup/>
            </div>
        </nav>
    )
};




