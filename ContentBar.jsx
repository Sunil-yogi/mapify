
import React from "react";
import "../ContentBar.css";

const Content = () => {
  return (
    <div className="dashnoard-rght-content">
      <h1>Control Panel Homepage</h1>
      <div className="dashnoard-rght-content-sections">
        <div className="dashnoard-rght-section">
          <h2>Website Statistics</h2>
          <p>Last MySQL DB Backup: 4th November, 2014 1:12 PM</p>
          <p>Total Article Topics: 4</p>
          <p>Total Articles/Reviews: 72</p>
          <p>Total Playlists: 1</p>
        </div>
        <div className="dashnoard-rght-section">
          <h2>News & Insights</h2>
          <ul>
            <li>Upcoming Vacation Dates</li>
            <li>10 Reasons You Should Be Using Google’s Search Console</li>
            <li>4 Priorities For Website Owners in 2016</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
