import React, { useState } from "react";
import "../Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faChartLine, faDatabase, faTrophy, faComments, faFolderOpen, faGlobe, faPeopleGroup, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <div>
      {/* Hamburger Menu Icon for Mobile */}
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Sidebar */}
      <div className={`dashboard-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        {/* Close Icon for Sidebar */}
        <div className="close-menu" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faTimes} />
        </div>

        <h2>Settings</h2>
        <ul>
          <li><FontAwesomeIcon icon={faHome} /> General</li>
          <li><FontAwesomeIcon icon={faGlobe} /> Website</li>
          <li><FontAwesomeIcon icon={faChartLine} /> Website Ads</li>
          <li><FontAwesomeIcon icon={faFacebook} /> Social Links</li>
        </ul>

        <h2>Tools</h2>
        <ul>
          <li><FontAwesomeIcon icon={faUser} /> Manage Users</li>
          <li><FontAwesomeIcon icon={faDatabase} /> Database Backup</li>
          <li><FontAwesomeIcon icon={faPeopleGroup} /> Manage Members</li>
          <li><FontAwesomeIcon icon={faTrophy} /> Manage Awards</li>
        </ul>

        <h2>Forums</h2>
        <ul>
          <li><FontAwesomeIcon icon={faFolderOpen} /> Manage Categories</li>
          <li><FontAwesomeIcon icon={faComments} /> Manage Forums</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
