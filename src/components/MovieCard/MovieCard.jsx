import "./MovieCard.css";

function MovieCard({
    item,
    variant = "portrait",
    onClick,
}) {

    const poster =
        variant === "portrait"
            ? item.portrait
            : item.landscape;

    const handleClick = (e) => {

        const rect = e.currentTarget.getBoundingClientRect();

        onClick(item, rect)
    };

    return (

        <div
            className={`movie-card movie-card--${variant}`}
            onClick={handleClick}
        >

            <img
                src={poster}
                alt={item.title}
                className="movie-card__poster"
            />

        </div>

    );

}

export default MovieCard;