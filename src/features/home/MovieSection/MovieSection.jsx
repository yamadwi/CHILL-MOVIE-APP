import "./MovieSection.css";

import { useState } from "react";

import MovieCard from "../../../components/MovieCard/MovieCard";

function MovieSection ({
    title,
    items,
    variant,
}) {
    const [activeMovie, setActiveMovie] = useState(null);

    return(
        <section className="movie-section">

            <h2 className="movie-section__title">
                {title}
            </h2>

            <div className="movie-section__list">

                {items.map((item) => (

                    <MovieCard
                        key={item.id}
                        item={item}
                        variant={variant}
                        active={activeMovie === item.id}
                        onClick={() => 
                            setActiveMovie(
                                activeMovie === item.id

                                    ? null
                                    : item.id
                                    
                            )

                        }

                    />

                ))}

            </div>

        </section>

    );

}

export default MovieSection;