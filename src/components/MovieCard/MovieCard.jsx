import "./MovieCard.css";

import PlayIcon from "../../assets/icons/play-circle.svg";
import CheckIcon from "../../assets/icons/check-icon.svg";
import ChevronDownIcon from "../../assets/icons/chevron-down.svg";

function MovieCard({ 
    item, 
    variant = "portrait",
    active = false,
    onClick,
}){

    const image = 
        variant === "portrait"
            ? item.portrait
            : item.landscape;

    return(

        <div 
            className={`
                movie-card 
                movie-card--${variant}
                ${active ? "movie-card--active" : ""}
            `}
            onClick={onClick}
        >

            <img
            src={image}
            alt={item.title}
            className="movie-card__image"
            />
            
            <div className="movie-card__details">

                <div className="movie-card__actions">

                    <div className="movie-card__actions-left">

                        <button className="movie-card__button movie-card__button--play">
                            <img
                                src={PlayIcon}
                                alt="Play Icon"
                            />
                        </button>

                        <button className="movie-card__button movie-card__button--check">
                            <img
                                src={CheckIcon}
                                alt="Check Icon List"
                            />
                        </button>

                    </div>

                    <div className="movie-card__actions-right">

                        <button className="movie-card__button movie-card__button--chevron">
                            <img
                                src={ChevronDownIcon}
                                alt="Chevron Icon"
                            />
                        </button>

                    </div>

                </div>

                <div className="movie-card__info">
                    
                    <span className="movie-card__age">
                        {item.age}
                    </span>

                    <span className="movie-card__duration">
                        {item.duration || item.episode}
                    </span>

                </div>

                <div className="movie-card__genre">

                    {item.genre.map((genre, index) => (
                        <span
                            key={genre}
                            className="movie-card__genre-item"
                        >
                            {genre}
                            {index < item.genre.length - 1 && 

                                <span className="movie-card__dot">
                                    
                                    •

                                </span>

                            }

                        </span>
                    ))}

                </div>

            </div>

        </div>

    );
}

export default MovieCard;