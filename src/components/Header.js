import React from "react";
import {
    Link
  } from "react-router-dom";

function Header() {
    return (
        <nav className="uk-navbar-container uk-margin" uk-navbar="mode: click">
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <div className="uk-navbar-right beRight">
                <ul className="uk-navbar-nav">
                    <li>John Blume</li>
                </ul>
            </div>
          </div>
        </nav>
    )
}

export default Header