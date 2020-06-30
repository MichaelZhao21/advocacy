import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

import { ScrollToTop, ChangeIcon } from '../Util';
import icon from './files/favicon.ico';
import Home from './pages/Home';
import Help from './pages/Help';
import BlackRights from './pages/BlackRights';
import PoliceBrutality from './pages/PoliceBrutality';
import OnlineProtests from './pages/OnlineProtests';
import WhitePrivilege from './pages/WhitePrivilege';
import Media from './pages/Media';
import Pride from './pages/Pride';
import External from './pages/External';
import CurrentEvents from './pages/CurrentEvents';
import GeorgeProtests from './pages/GeorgeProtests';

const AdvocacyApp = ({ match }) => {
  var inner = <Home />;
  if (match.path.includes(":")) {
    switch (match.url.replace(match.path.substring(0, match.path.indexOf(":")), "")) {
      case "help":
        inner = <Help />;
        break;
      case "current-events":
        inner = <CurrentEvents />;
        break;
      case "george-floyd-protests":
        inner = <GeorgeProtests />;
        break;
      case "black-rights":
        inner = <BlackRights />;
        break;
      case "police-brutality":
        inner = <PoliceBrutality />;
        break;
      case "online-protests":
        inner = <OnlineProtests />;
        break;
      case "white-privilege":
        inner = <WhitePrivilege />;
        break;
      case "media":
        inner = <Media />;
        break;
      case "pride":
        inner = <Pride />;
        break;
      case "external-resources":
        inner = <External />;
        break;
      default:
        inner = <p>ERROR: INVALID PAGE</p>;
    }
  }

  return (
    <div className="advocacy-app">
      <ChangeIcon props={icon}></ChangeIcon>
      <ScrollToTop />
      <Link className="home-button" to="/advocacy">Back to Home</Link>
      <div className="app">
        {inner}
      </div>
    </div>
  );
}

export default AdvocacyApp;