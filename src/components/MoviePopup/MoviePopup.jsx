import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();

    if (!movie) return null;

    const handlePlay = () => {
        onClose();
        navigate(`/watch/${movie.type}/${movie.id}`);
    }

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
                    onPlay={handlePlay}
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