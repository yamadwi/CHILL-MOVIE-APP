import "./MoviePopup.css";
import MovieCard from "../MovieCard/MovieCard";
import movies from "../../data/movies";

function Recommendation({ recommendations = [] }) {

    const recommendationMovies = movies.filter((movie) =>
        recommendations.includes(movie.id)
    );

    return (

        <div className="movie-popup__recommendation">

            <h3 className="movie-popup__section-title">

                Rekomendasi Serupa

            </h3>

            <div className="movie-popup__recommendation-list">

                {

                    recommendationMovies.map((movie) => (

                        <MovieCard
                            key={movie.id}
                            item={movie}
                            variant="portrait"
                        />

                    ))

                }

            </div>

        </div>

    );

}

export default Recommendation;