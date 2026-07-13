function MoviePopup({ movie, onClose }) {

    if (!movie) return null;

    return (
        <div className="movie-popup">

            <button onClick={onClose}>
                Close
            </button>

            <h1>{movie.title}</h1>

        </div>
    );
}

export default MoviePopup;