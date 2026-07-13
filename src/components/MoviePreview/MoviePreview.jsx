import "./MoviePreview.css"

import PlayIcon from"../../assets/icons/play-circle.svg"
import CheckIcon from"../../assets/icons/check-icon.svg"
import ChevronDownIcon from"../../assets/icons/chevron-down.svg"

function MoviePreview({
    movie,
    rect,
    onClose,
    onOpen,
}) {

    if (!movie || !rect) return null;

    const PREVIEW_WIDTH = 250;
    const PREVIEW_HEIGHT = 250;

    const previewStyle = {
        left: 
            rect.left + 
            window.scrollX -
            ((PREVIEW_WIDTH - rect.width) / 2),

        top: 
            rect.top + 
            window.scrollY -
            (PREVIEW_HEIGHT - rect.height),
    };

    return(
        <div
            className="movie-preview"
            onClick={onClose}
        >

            <div 
                className="movie-preview__card"
                style={previewStyle}
                onClick={(e) => e.stopPropagation()}
            >

                <img
                    src={movie.landscape}
                    alt={movie.title}
                    className="movie-preview__image"
                />

                <div className="movie-preview__content">

                    <div className="movie-preview__actions">

                        <div className="movie-preview__actions-left">

                            <button className="movie-preview__button movie-preview__button--play">

                                <img
                                    src={PlayIcon}
                                    alt="Play Icon"
                                />

                            </button>

                            <button className="movie-preview__button">

                                <img
                                    src={CheckIcon}
                                    alt="Check Icon"
                                />

                            </button>

                        </div>

                        <button 
                            className="movie-preview__button"
                            onClick={onOpen}
                        >

                            <img
                                src={ChevronDownIcon}
                                alt="Chevron Down Icon"
                            />

                        </button>

                    </div>

                    <div className="movie-preview__info">

                        <span className="movie-preview__age">

                            {movie.age}

                        </span>

                        <span className="movie-preview__duration">

                            {movie.duration || movie.episode}

                        </span>

                    </div>

                    <div className="movie-preview__genre">

                        {movie.genre.map((genre, index) => (

                            <span
                                key={genre}
                                className="movie-preview__genre-item"    
                            >

                                {genre}

                                {index !== movie.genre.length - 1 && (
                                
                                    <span className="movie-preview__dot">

                                        •

                                    </span>
                                
                                )}

                            </span>

                        ))}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default MoviePreview;