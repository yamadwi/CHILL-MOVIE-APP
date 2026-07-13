import { useRef } from "react";

import "./MovieSection.css";

import MovieCard from "../../../components/MovieCard/MovieCard";

import ArrowLeft from "../../../assets/icons/arrow-left.svg"
import ArrowRight from "../../../assets/icons/arrow-right.svg"

function MovieSection ({
    title,
    items,
    variant,
    onPreview,
}) {
    const movieListRef = useRef(null);

    const scroll = (direction) => {

        movieListRef.current.scrollBy({
            left: direction * 500,
            behavior: "smooth",
        });

    };

    return(

        <section className="movie-section">

            <h2 className="movie-section__title">
                {title}
            </h2>

            <button
                className="movie-section__arrow movie-section__arrow--left"
                onClick={() => scroll(-1)}
            >
                <img
                    src={ArrowLeft}
                    alt="Arrow Left"
                />

            </button>

            <div 
                className="movie-section__list"
                ref={movieListRef}
            >

                {items.map((item) => (
                        
                    <MovieCard
                        key={item.id}
                        item={item}
                        variant={variant}
                        onClick={onPreview}
                    />
                        
                ))}

            </div>

            <button
                className="movie-section__arrow movie-section__arrow--right"
                onClick={() => scroll(1)}
            >

                <img
                    src={ArrowRight}
                    alt="Arrow Right"
                />

            </button>

        </section>

    );

}

export default MovieSection;