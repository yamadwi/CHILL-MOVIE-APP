import "./MoviePopup.css";

import PopupHeader from "./PopupHeader";
import PopupInfo from "./PopupInfo";
import Recommendation from "./Recommendation";
import EpisodeList from "./EpisodeList";

function MoviePopup({ 
    movie, 
    onClose,
    favorites,
    toggleFavorite, 
}) {

    if (!movie) return null;

    return (

        <div
            className="movie-popup"
            onClick={onClose}
        >

            <div
                className="movie-popup__container"
                onClick={(e) => e.stopPropagation()}
            >

                <PopupHeader
                    movie={movie}
                    onClose={onClose}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                />

                <PopupInfo
                    movie={movie}
                />

                {

                    movie.type === "movie"

                        ? (

                            <Recommendation
                                recommendations={movie.recommendation}
                            />

                        )

                        : (

                            <EpisodeList
                                episodes={movie.episodes}
                            />

                        )

                }

            </div>

        </div>

    );

}

export default MoviePopup;