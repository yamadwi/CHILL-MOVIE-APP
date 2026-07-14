import "./MoviePopup.css";

function EpisodeList({ episodes = [] }) {

    return (

        <div className="movie-popup__episode">

            <h3 className="movie-popup__section-title">

                Episode

            </h3>

            <div className="movie-popup__episode-list">

                {

                    episodes.map((episode) => (

                        <div
                            key={episode.no}
                            className="movie-popup__episode-item"
                        >

                            <div className="movie-popup__episode-number">

                                {episode.no}

                            </div>

                            <img
                                src={episode.thumbnail}
                                alt={episode.title}
                                className="movie-popup__episode-thumbnail"
                            />

                            <div className="movie-popup__episode-content">

                                <div className="movie-popup__episode-header">

                                    <h4>

                                        {episode.title}

                                    </h4>

                                    <span>

                                        {episode.duration}

                                    </span>

                                </div>

                                <p>

                                    {episode.description}

                                </p>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default EpisodeList;