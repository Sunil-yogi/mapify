import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import '../StoreLocatorSettings.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const StoreLocatorSettings = () => {
  const [zoomLevel, setZoomLevel] = useState(10);
  const [radius, setRadius] = useState('');
  const [unit, setUnit] = useState('km');
  const [mapColor, setMapColor] = useState('#3498db'); // Define mapColor state here
  const center = [35.6895, 139.6917]; // Example location (Tokyo)

  return (
    <div className="store-locator-settings">
      <h2 className="store-ls-top">Store Locator Settings</h2>
      
      <div className="store-locator-section store-general-info">
        <h3>General Information</h3>
        <div className="store-inp-flex">
          <input type="text" placeholder="Company" />
          <input type="email" placeholder="Contact Email" />
        </div>
      </div>

      <div className="store-locator-section location-settings store-general-info">
        <h3>Store Location Settings</h3>
        <div className="store-locator-map-flex">
          <div className="store-locator-map-left">
            <div className="store-locator-field">
              <label>Default Radius for Search (KM)</label>
              <select value={radius} onChange={(e) => setRadius(e.target.value)}>
                <option value="">Select Radius</option>
                <option value="5">5 KM</option>
                <option value="10">10 KM</option>
                <option value="20">20 KM</option>
              </select>
            </div>

            <div className="store-locator-field">
              <label>
                <input type="checkbox" /> Enable Geolocation
              </label>
            </div>

            <div className="store-locator-field">
              <label>Distance Unit</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="unit"
                    value="km"
                    checked={unit === 'km'}
                    onChange={() => setUnit('km')}
                  />
                  Kilometers (KM)
                </label>
                <label>
                  <input
                    type="radio"
                    name="unit"
                    value="miles"
                    checked={unit === 'miles'}
                    onChange={() => setUnit('miles')}
                  />
                  Miles
                </label>
              </div>
            </div>
          </div>

          <div className="store-locator-map-container">
            <MapContainer
              center={center}
              zoom={zoomLevel}
              style={{ height: '300px', width: '100%', backgroundColor: mapColor }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={center}>
                <Popup>Default Location</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      <div className="store-locator-section store-locator-field store-general-info store-map-appearance">
        <h3>Map Appearance</h3>
        <label>Map Zoom Level</label>
        <input
          type="range"
          min="1"
          max="20"
          value={zoomLevel}
          onChange={(e) => setZoomLevel(parseInt(e.target.value))}
        />

        <div className="color-picker">
          <label>Map Color</label>
          <HexColorPicker color={mapColor} onChange={setMapColor} />
        </div>
      </div>
    </div>
  );
};

export default StoreLocatorSettings;
