import { useState } from "react";
import "./Footer.css";

import Logo from "../../assets/icons/logo-full.svg";
import ChevronDown from "../../assets/icons/chevron-down.svg";

function Footer() {
    const [genreOpen, setGenreOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);

    const genres = [
        "Aksi",
        "Anak-anak",
        "Anime",
        "Britania",
        "Drama",
        "Fantasi Ilmiah & Fantasi",
        "Kejahatan",
        "KDrama",
        "Komedi",
        "Petualangan",
        "Perang",
        "Romantis",
        "Sains & Alam",
        "Thriller",
    ];

    const helps = [
        "FAQ",
        "Kontak Kami",
        "Privasi",
        "Syarat & Ketentuan",
    ];

    return (

        <footer className="footer">

            <div className="footer__container">

                {/* LEFT */}

                <div className="footer__brand">

                    <img
                        src={Logo}
                        alt="CHILL"
                        className="footer__logo"
                    />

                    <p className="footer__copyright">

                        @2023 Chill All Rights Reserved.

                    </p>

                </div>

                {/* CENTER */}

                <div className="footer__genre">

                    <button
                        className="footer__accordion"
                        onClick={() => setGenreOpen(!genreOpen)}
                    >

                        <span className="footer__accordion-title">
                            Genre
                        </span>

                        <img
                            src={ChevronDown}
                            alt=""
                            className={`footer__arrow ${
                                genreOpen ? "footer__arrow--open" : ""
                            }`}
                        />

                    </button>

                    <div
                        className={`footer__genre-list ${
                            genreOpen ? "footer__genre-list--open" : ""
                        }`}
                    >

                        {

                            genres.map((genre) => (

                                <a
                                    key={genre}
                                    href="#"
                                    className="footer__link"
                                >

                                    {genre}

                                </a>

                            ))

                        }

                    </div>

                </div>

                {/* RIGHT */}

                <div className="footer__help">

                    <button
                        className="footer__accordion"
                        onClick={() => setHelpOpen(!helpOpen)}
                    >

                        <span className="footer__accordion-title">
                            Bantuan
                        </span>

                        <img
                            src={ChevronDown}
                            alt=""
                            className={`footer__arrow ${
                                helpOpen ? "footer__arrow--open" : ""
                            }`}
                        />

                    </button>

                    <div
                        className={`footer__help-list ${
                            helpOpen ? "footer__help-list--open" : ""
                        }`}
                    >

                        {

                            helps.map((item) => (

                                <a
                                    key={item}
                                    href="#"
                                    className="footer__link"
                                >

                                    {item}

                                </a>

                            ))

                        }

                    </div>

                </div>

            </div>

        </footer>

    );

}

export default Footer;