
import React from 'react';


export function NavigationBar() {
    return (
      <header className="cd-header-nav">
        <h1>Shop Name</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/StoreRegistration" className="active">Store Registration</a>
          <a href="/StoreLocatorSettings">Settings</a>
          <a href="/Pricings">Pricings</a>
          <a href="/StoreList">Store List</a>
          <a href="/Categories">Categories</a>
        </nav>
      </header>
    );
  }
