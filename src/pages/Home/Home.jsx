import { useState } from "react";

import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../features/home/Hero/Hero";
import MovieSection from "../../features/home/MovieSection/MovieSection";
import MoviePreview from "../../components/MoviePreview/MoviePreview";
import MoviePopup from "../../components/MoviePopup/MoviePopup";
import Footer from "../../components/Footer/Footer";

import useResponsive from "../../hooks/useResponsive";

import {
    continueWatching,
    chillOriginal,
    topRating,
    trending,
    newRelease,
} from "../../data/homeSections";

function Home() {

    const { isMobile } = useResponsive();

    const [preview, setPreview] = useState(null);
    const [popupMovie, setPopupMovie] = useState(null);

    const handlePreview = (movie, rect) => {

        // MOBILE
        if (isMobile) {

            setPopupMovie(movie);
            return;

        }

        // DESKTOP
        setPreview({
            movie,
            rect,
        });

    };

    const handleClosePreview = () => {

        setPreview(null);

    };

    const handleOpenPopup = () => {

        if (!preview) return;

        setPopupMovie(preview.movie);
        setPreview(null);

    };

    const handleClosePopup = () => {

        setPopupMovie(null);

    };

    return (

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

            {!isMobile && preview && (

                <MoviePreview
                    movie={preview.movie}
                    rect={preview.rect}
                    onClose={handleClosePreview}
                    onOpen={handleOpenPopup}
                />

            )}

            <MoviePopup
                movie={popupMovie}
                onClose={handleClosePopup}
            />

            <Footer />

        </>

    );

}

export default Home;