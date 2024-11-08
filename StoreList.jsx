
import React, { useState } from 'react';
import '../App.css';
import homeTrophy from "../assets/home-trophy.png";




const stores = [
  {
    name: "The Cozy Corner",
    address: "123 Main Street, Anytown, CA 12345",
    phone: "+1 (123) 456-7890",
    email: "nevaeh.simmons@example.com",
    hours: "Mon-Sun 07:00 AM - 07:00 PM",
  },
  {
    name: "The Cozy Corner",
    address: "123 Main Street, Anytown, CA 12345",
    phone: "+1 (123) 456-7890",
    email: "bill.sanders@example.com",
    hours: "Mon-Sun 07:00 AM - 07:00 PM",
  },
  {
    name: "The Cozy Corner",
    address: "123 Main Street, Anytown, CA 12345",
    phone: "+1 (123) 456-7890",
    email: "jackson.graham@example.com",
    hours: "Mon-Sun 07:00 AM - 07:00 PM",
  },
];

const StoreList = () => {
    const [isOpen, setIsOpen] = useState(true);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
  return (
    <div class="store-list-wrap">
        <div class="container">
            <div className="store-list-container cd-store-locator">     
            <div className="store-list-main">
                <div className="sl-store-left">
                    <h2>Store List</h2>
                </div>
                <div className="sl-store-right">
                <button className="st-list-btn-setting">Store locator setting</button>
                </div>
            </div>
            <div className="store-search">
                <div>
                    <label>Search Location</label>
                    <input type="text" placeholder="Enter location" />
                </div>
                <div>
                    <label>Category</label>
                    <select>
                    <option>Select category</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    </select>
                </div>
                <div className="slider-container distnace-flex">
                <div>
                <label>Distance Range</label>
                <input type="range" min="10" max="80" />  
                </div>
                <div>                              
                <span>10km - 80km</span>
                </div>
                </div>
                <div className="store-list-container">
                <div className="status-toggle">
                    <label className={!isOpen ? 'active' : ''}>Close</label>
                    <div className="list-toggle-switch" onClick={handleToggle}>
                    <div className={`list-toggle-circle ${isOpen ? 'open' : 'close'}`}></div>
                    </div>
                    <label className={isOpen ? 'active' : ''}>Open</label>
                </div>
            </div>
            </div>

            <div className="store-list-map">
                <div className="store-list">
                {stores.map((store, index) => (
                    <div key={index} className="store-card">
                    <h2 className="number-shop">Number of Shop 1</h2>
                    <div className="list-store-main">
                    <div className="store-image">
                     <img src={homeTrophy} alt="Store logo" />
                    </div>
                    <div className="store-deatils">
                    <h3>{store.name}</h3>
                    <p>{store.address}</p>
                    <p>{store.phone}</p>
                    <p>{store.email}</p>
                    <p>{store.hours}</p>
                    
                    </div>
                    </div>
                    <div className="deatis-btn-main">
                    <button className="st-list-button st-list-button-active">Print</button>
                    <button className="st-list-button">Direction</button>
                    <button className="st-list-button">Website</button>
                    </div>
                    </div>
                ))}
                </div>
                <div className="store-list-placeholder">Map Placeholder</div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default StoreList;
