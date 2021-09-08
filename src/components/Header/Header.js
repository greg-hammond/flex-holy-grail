import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="header general">
            <p>
                <Link to="/one" className="link">
                    Body One
                </Link>
            </p>
            <p>
                <Link to="/two" className="link">
                    Body Two
                </Link>
            </p>
        </div>
    );
};

export default Header;