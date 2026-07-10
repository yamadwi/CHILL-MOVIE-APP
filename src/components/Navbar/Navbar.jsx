import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "../../assets/icons/logo-full.svg";
import Avatar from "../../assets/images/avatar.jpg";
import ArrowDown from "../../assets/icons/chevron-down.svg";
import ProfileIcon from "../../assets/icons/icon-person.svg";
import StarIcon from "../../assets/icons/star-icon.svg";
import LogoutIcon from "../../assets/icons/logout-icon.svg"

function Navbar() {
  const[isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="navbar__left">

        <Link to="/">
          <img 
            src={Logo} 
            alt="CHILL"
            className="navbar__logo" 
            />
        </Link>

        <nav>

          <ul className="navbar__menu">
            
            <li>
              <Link to="/series">
                Series
              </Link>
            </li>

            <li>
              <Link to="/movies">
                Film
              </Link>
            </li>

            <li>
              <Link to="/my-list">
                Daftar Saya
              </Link>
            </li>

          </ul>

        </nav>

      </div>

      <div 
        className="navbar__profile"
        onClick={() => setIsOpen((prev) => !prev)}
        >
        
        <img 
          src={Avatar}
          alt="Avatar"
          className="navbar__avatar"
        />

        <img
          src={ArrowDown}
          alt="Dropdown"
          className="navbar__arrow"
        />

        {isOpen &&(
          <div className="navbar__dropdown">
            <Link to="/profile">
              <img src={ProfileIcon} alt="profile icon" />
              Profil Saya
            </Link>

            <Link to="#">
              <img src={StarIcon} alt="star icon" />
              Ubah Premium
            </Link>

            <Link to="/login">
              <img src={LogoutIcon} alt="logout icon" />
              Keluar
            </Link>

          </div>

        )}

      </div>

    </header>
  );
}

export default Navbar;