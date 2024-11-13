import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";

import { QueryProvider, PolarisProvider, NavigationBar } from "./components";
import StoreRegistration from './pages/StoreRegistration';
import StoreList from './pages/StoreList';
import Categories from './pages/Categories';
import StoreLocatorSettings from './pages/StoreLocatorSettings';
import Pricings from './pages/Pricings';
import './App.css';  
import './Categories.css'; 
import './SettingsPage.css';
import './SettingsDrawer.css';
import './StoreLocatorSettings.css';
import './Pricing.css';





export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.glob("./pages/**/!(*.test.[jt]sx)*.([jt]sx)", {
    eager: true,
  });
  const { t } = useTranslation();

  return (
    <PolarisProvider>
      <BrowserRouter>
        <QueryProvider>
          
          <div className="main-section">
            <div className="menusection">
              <NavigationBar/>
            </div>
            <div className="content-section">
              <Routes pages={pages} />
            </div>
          </div>
          
        </QueryProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
