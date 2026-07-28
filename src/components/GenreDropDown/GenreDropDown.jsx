import { useState } from "react";

import "./GenreDropDown.css";
import ChevronDown from "../../assets/icons/chevron-down.svg";

function GenreDropDown() {
    const [isOpen, setIsOpen] = useState(false);

    const genres = [
        "Aksi",
        "Anak-anak",
        "Anime",
        "Britania",
        "Drama",
        "Fantasi",
        "Kejahatan",
        "KDrama",
        "Komedi",
        "Petualangan",
        "Perang",
        "Romantis",
        "Sains & Alam",
        "Thriller",
    ];

    const handleToggle = () => {
        setIsOpen((prev) => ! prev);
    };

    const handleSelectGenre = () => {
        setIsOpen(false);
    };

    return(

        <div className="genre-dropdown">

            <button 
                type="button"
                className="genre-dropdown__button"
                onClick={handleToggle}
            >
                <span>
                    Genre
                </span>

                <img
                src={ChevronDown}
                alt="chevron down"
                className="genre-dropdown__menu"
                />
            </button>

            {isOpen && (

                <div className="genre-dropdown__menu">

                    {genres.map((genre) => (
                        <button
                            key={genre}
                            type="button"
                            className="genre-dropdown__item"
                            onClick={handleSelectGenre}
                        >
                            {genre}
                        </button>
                    ))}

                </div>

            )}

        </div>

    );

}

export default GenreDropDown;