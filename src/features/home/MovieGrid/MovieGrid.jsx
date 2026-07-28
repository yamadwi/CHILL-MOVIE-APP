import "./MovieGrid.css";

import MovieCard from "../../../components/MovieCard/MovieCard";

function MovieGrid({
    items,
    variant,
    onPreview,
}) {

    return(
        <div className="movie-grid">

            {items.map((item) => (

                <MovieCard
                    key={item.id}
                    item={item}
                    variant={variant}
                    onClick={onPreview}
                />

            ))}

        </div>

    );

}

export default MovieGrid;