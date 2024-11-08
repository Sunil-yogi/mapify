import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";

import { QueryProvider, PolarisProvider, NavigationBar } from "./components";
import StoreRegistration from './pages/StoreRegistration';
import './App.css';  




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