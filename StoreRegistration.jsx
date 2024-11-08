import React, { useState } from 'react';
import '../App.css'; 

const StoreRegistration = () => {
 
  const [workingDays, setWorkingDays] = useState([
    { day: 'Monday', isOpen: true, start: '09:00', end: '21:00' },
    { day: 'Tuesday', isOpen: false },
    { day: 'Wednesday', isOpen: false },
    { day: 'Thursday', isOpen: false },
    { day: 'Friday', isOpen: false },
    { day: 'Saturday', isOpen: false },
    { day: 'Sunday', isOpen: false },
  ]);

  
  const toggleDay = (index) => {
    const newDays = [...workingDays];
    newDays[index].isOpen = !newDays[index].isOpen;
    setWorkingDays(newDays);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted');
  };

  return (
    <div className="store-registration-wrap">
      <div className="container">
        <div className="main-content cd-store-locator">
          <div className="form-container">
            <h2>Add New Store</h2>
            <form onSubmit={handleSubmit}>
              <section>
                <h3>Store Information</h3>
                <div className="form-group">
                  <input type="text" placeholder="Company" name="company" />
                  <input type="text" placeholder="Name" name="name" />
                  <input type="url" placeholder="Website URL" name="website" />
                  <input type="text" placeholder="Phone number" name="phone" />
                  <input type="text" placeholder="Fax" name="fax" />
                  <input type="email" placeholder="Email" name="email" />
                  <select name="category">
                    <option value="">Select Category</option>
                    <option value="Retail">Retail</option>
                    <option value="Wholesale">Wholesale</option>
                  </select>
                </div>
              </section>

              <section>
                <h3>Address Location</h3>
                <div className="cd-address-main">
                  <div className="cd-address-left">
                    <div className="form-group">
                      <input type="text" placeholder="Street" name="street" />
                      <input type="text" placeholder="City" name="city" />
                      <input type="text" placeholder="State" name="state" />
                      <input type="text" placeholder="Postal Code" name="postalCode" />
                      <select name="country">
                        <option value="">Select Country</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                      </select>
                    </div>
                  </div>
                  <div className="cd-address-right">
                    <div className="map-placeholder">Map Placeholder</div>
                  </div>
                </div>
              </section>

              <section>
                <h3>Store Opening Hours</h3>
                <div className="hours-container">
                  {workingDays.map((day, index) => (
                    <div key={index} className="day-row">
                      <label>{day.day}</label>
                      <input
                        type="checkbox"
                        className="toggle-switch"
                        checked={day.isOpen}
                        onChange={() => toggleDay(index)}
                      />
                      {day.isOpen ? (
                        <>
                          <input
                            type="time"
                            className="time-input"
                            value={day.start}
                            onChange={(e) => {
                              const newDays = [...workingDays];
                              newDays[index].start = e.target.value;
                              setWorkingDays(newDays);
                            }}
                          />
                          <span>To</span>
                          <input
                            type="time"
                            className="time-input"
                            value={day.end}
                            onChange={(e) => {
                              const newDays = [...workingDays];
                              newDays[index].end = e.target.value;
                              setWorkingDays(newDays);
                            }}
                          />
                        </>
                      ) : (
                        <span className="closed">Closed</span>
                      )}
                    </div>
                  ))}
                  <button type="button" className="add-day-button">
                    + Add Working Day
                  </button>
                </div>
              </section>

              <section>
                <h3>Additional Information</h3>
                <textarea placeholder="Please enter..." name="additionalInfo"></textarea>
              </section>

              <div className="agreement">
                <input className="agreement-inp" type="checkbox" id="agree" />
                <label htmlFor="agree">
                  I agree to terms and conditions, and all the provided information is correct
                </label>
              </div>

              <div className="form-buttons">
                <button type="submit" className="save">
                  Save
                </button>
                <button type="button" className="cancel">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreRegistration;
