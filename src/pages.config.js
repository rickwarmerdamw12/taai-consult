/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import Contact from './pages/Contact';
import Diensten from './pages/Diensten';
import Home from './pages/Home';
import LandingORTraining from './pages/LandingORTraining';
import Masterclasses from './pages/Masterclasses';
import MedezeggenschapAmbtelijk from './pages/MedezeggenschapAmbtelijk';
import MedezeggenschapHoldings from './pages/MedezeggenschapHoldings';
import ORondersteuning from './pages/ORondersteuning';
import TrainingenVoorCommissies from './pages/TrainingenVoorCommissies';
import TrainingenVoorDeOr from './pages/TrainingenVoorDeOr';
import VaardighedenVoorDeOr from './pages/VaardighedenVoorDeOr';
import VernieuwendMedezeggenschap from './pages/VernieuwendMedezeggenschap';
import Vertrouwenspersoon from './pages/Vertrouwenspersoon';
import Workshops from './pages/Workshops';
import OverOns from './pages/OverOns';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Contact": Contact,
    "Diensten": Diensten,
    "Home": Home,
    "LandingORTraining": LandingORTraining,
    "Masterclasses": Masterclasses,
    "MedezeggenschapAmbtelijk": MedezeggenschapAmbtelijk,
    "MedezeggenschapHoldings": MedezeggenschapHoldings,
    "ORondersteuning": ORondersteuning,
    "TrainingenVoorCommissies": TrainingenVoorCommissies,
    "TrainingenVoorDeOr": TrainingenVoorDeOr,
    "VaardighedenVoorDeOr": VaardighedenVoorDeOr,
    "VernieuwendMedezeggenschap": VernieuwendMedezeggenschap,
    "Vertrouwenspersoon": Vertrouwenspersoon,
    "Workshops": Workshops,
    "OverOns": OverOns,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};