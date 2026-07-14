import "./MoviePopup.css";

function PopupInfo({ movie }) {

    return (

        <div className="movie-popup__content">

            <div className="movie-popup__info">

                <span className="movie-popup__age">

                    {movie.age}

                </span>

                <span className="movie-popup__duration">

                    {movie.type === "movie"
                        ? movie.duration
                        : movie.episode}

                </span>

            </div>

            <div className="movie-popup__bottom">

                <div className="movie-popup__left">
                    
                    <p className="movie-popup__description">

                        {movie.description}

                    </p>

                </div>

                <div className="movie-popup__right">

                    <div className="movie-popup__detail-row">

                        <span className="movie-popup__label">

                            Genre

                        </span>

                        <span className="movie-popup__value">

                            {movie.genre.join(", ")}

                        </span>

                    </div>

                    <div className="movie-popup__detail-row">

                        <span className="movie-popup__label">

                            Cast

                        </span>

                        <span className="movie-popup__value">

                            {movie.cast.join(", ")}

                        </span>

                    </div>

                    <div className="movie-popup__detail-row">

                        <span className="movie-popup__label">

                            Director

                        </span>

                        <span className="movie-popup__value">

                            {movie.director.join(", ")}

                        </span>

                    </div>

                </div>
                
            </div>

        </div>

    );

}

export default PopupInfo;