
import React from 'react';


export function NavigationBar() {
    return (
      <header className="cd-header-nav">
        <h1>Shop Name</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/StoreRegistration" className="active">Store Registration</a>
          <a href="#settings">Settings</a>
          <a href="#pricing">Pricings</a>
          <a href="#store-list">Store List</a>
          <a href="#categories">Categories</a>
        </nav>
      </header>
    );
  }
