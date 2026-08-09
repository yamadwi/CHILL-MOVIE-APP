import "./MovieCard.css";
import RemoveIcon from "../../assets/icons/close.svg"

function MovieCard({
    item,
    variant = "portrait",
    onClick,
    showRemove = false,
    onRemove,
}) {

    const poster =
        variant === "portrait"
            ? item.portrait
            : item.landscape;

    const handleClick = (e) => {

        const rect = e.currentTarget.getBoundingClientRect();

        onClick(item, rect)
    };

    const handleRemove = (e) => {

        e.stopPropagation();

        onRemove(item.id);

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

            {showRemove && (

                <button
                    type="button"
                    className="movie-card__remove"
                    onClick={handleRemove}
                >
                    <img 
                        src={RemoveIcon}
                        alt="Remove" />
                </button>
                
            )}

        </div>

    );

}

export default MovieCard;