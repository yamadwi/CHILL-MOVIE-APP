import { useState } from "react";

import "./Home.css"

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../features/home/Hero/Hero";
import MovieSection from "../../features/home/MovieSection/MovieSection";
import MoviePreview from "../../components/MoviePreview/MoviePreview";
import MoviePopup from "../../components/MoviePopup/MoviePopup";

import {
    continueWatching,
    chillOriginal,
    topRating,
    trending,
    newRelease,
} from "../../data/homeSections";

function Home(){

    const [preview, setPreview] = useState(null);
    const [popupMovie, setPopupMovie] = useState(null);

    const handlePreview = (movie, rect) => {

        if (preview?.movie.id === movie.id) {
            setPreview(null);
            return;
        }

        setPreview({
            movie,
            rect,
        });

    };

    const handleOpenPoup = () => {

        if (!preview) return;

        setPopupMovie(preview.Hero);
        setPreview(null);

    };

    return(

        <>

            <Navbar />

            <Hero />

            <main className="home">

                <MovieSection
                    title="Melanjutkan Tonton Film"
                    items={continueWatching}
                    variant="landscape"
                    onPreview={handlePreview}
                />

                <MovieSection
                    title="Film Persembahan Chill"
                    items={chillOriginal}
                    variant="portrait"
                    onPreview={handlePreview}
                />

                <MovieSection
                    title="Top Rating Film Hari Ini"
                    items={topRating}
                    variant="portrait"
                    onPreview={handlePreview}
                />

                <MovieSection
                    title="Film Trending"
                    items={trending}
                    variant="portrait"
                    onPreview={handlePreview}
                />

                <MovieSection
                    title="Rilis Terbaru"
                    items={newRelease}
                    variant="portrait"
                    onPreview={handlePreview}
                />

            </main>

            {preview && (

                <MoviePreview
                    movie={preview.movie}
                    rect={preview.rect}
                    onClose={() => setPreview(null)}
                    onOpen={handleOpenPoup}
                />

            )}

            <MoviePopup
                movie={popupMovie}
                onClose={() => setPopupMovie(null)}
            />

        </>

    );

}

export default Home;