import "./MovieCard.css";

function MovieCard({ movie }) {
    return (
        <div className="movie-card">

            <img
                src={movie.image}
                alt={movie.title}
                className="movie-card__image"
            />

        </div>
    );
}

export default MovieCard;