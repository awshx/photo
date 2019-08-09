import React from "react"
import { NavLink } from "react-router-dom";

class Menu extends React.Component {
    render() {
        return(
        //    <Router>
            <nav>
                <ul>
                    <li><a href="http://www.google.fr" target="_blank">Qui suis-je?</a></li>
                    <li><a href="http://www.google.fr" target="_blank">Contact</a></li>
                    <li><a href="http://www.google.fr" target="_blank">Thèmes</a></li>
                    <li><NavLink to="/home">Home</NavLink></li>
                </ul>
            </nav>
        //    </Router>
        );
    }
}

export default Menu;