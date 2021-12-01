import React from "react";
import { NavLink } from "react-router-dom";
//import App2 from 'gamers-fb-clone/react-app2/src'
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ReactDOM from "react-dom";
import "./index.css";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import ForumIcon from "@mui/icons-material/Forum";
import { useStateValue } from "./StateProvider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

//export function launchChat() {
//  ReactDOM.render(<AppChat />, document.getElementById("root"));
//ReactDOM.render(<AppChat />, document.createElement('root'));
//Element.attachShadow(AppChat);
//}

//export function ShadowContent({ root, newChat})

//nav bar structure
function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn.discordapp.com/attachments/885634202593296385/902490745825558568/4550_-_Logo_Design.png"
          alts=""
        />
        <div className="header_input">
          <SearchIcon />

          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>

      <div className="header_center">
        <div className="header_option header_option--active">
          <Link to="/">
            <HomeIcon fontSize="large" />
          </Link>
        </div>

        <div className="header_option">
          <a target="blank" href="https://www.youtube.com/">
            <SubscriptionsIcon fontSize="large" />
          </a>
        </div>

        <div className="header_option">
          <a target="blank" href="">
            <SupervisedUserCircleIcon fontSize="large" />
          </a>
        </div>
      </div>

      <div className="header_right"></div>
      <div className="header_info">
        <a target="blank" href="">
          <AccountCircleIcon src={user.photoURL} />
        </a>
        <h4>{user.displayName}</h4>
      </div>
      <div className="SignOut">
        <a target="_self" href="">
          Logout
        </a>
      </div>

      <a target="_blank" href="https://amazing-mclean-9eabed.netlify.app">
        <ForumIcon />
      </a>
    </div>
  );
}

export default Header;
