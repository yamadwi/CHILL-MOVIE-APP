import "./MoviePopup.css";

import PlusIcon from "../../assets/icons/plus-icon.svg";
import CheckIcon from "../../assets/icons/check-icon.svg";
import CloseIcon from "../../assets/icons/close.svg";

function PopupHeader({ 
    movie, 
    onClose,
    favorites,
    toggleFavorite, 
}) {

    const isFavorite = favorites.some(
        (item) => item.id === movie.id
    );

    return (

        <div className="movie-popup__header">

            <img
                src={movie.backdrop}
                alt={movie.title}
                className="movie-popup__backdrop"
            />

            <div className="movie-popup__overlay" />

            <button
                className="movie-popup__close"
                onClick={onClose}
            >
                <img
                    src={CloseIcon}
                    alt="Close"
                />
            </button>

            <div className="movie-popup__hero">

                <h2 className="movie-popup__title">

                    {movie.title}

                </h2>

                <div className="movie-popup__actions">

                    <button className="movie-popup__play">
                        Mulai
                    </button>

                    <button 
                        className="movie-popup__check"
                        onClick={() => toggleFavorite(movie)}
                    >

                        <img
                            src={isFavorite ? CheckIcon :  PlusIcon}
                            alt={isFavorite ? "Hapus Dari Daftar Saya" : "Tambah Ke Daftar Saya"}
                        />

                    </button>

                </div>

            </div>

        </div>

    );

}

export default PopupHeader;