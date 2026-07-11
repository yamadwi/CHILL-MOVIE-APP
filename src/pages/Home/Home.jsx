import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../features/home/Hero/Hero";
import MovieSection from "../../features/home/MovieSection/MovieSection";

import {
    continueWatching,
    chillOriginal,
    topRating,
    trending,
    newRelease,
} from "../../data/homeSections";

function Home(){

    return(

        <>

            <Navbar />

            <Hero />

            <MovieSection
                title="Melanjutkan Tonton Film"
                items={continueWatching}
                variant="landscape"
            />

            <MovieSection
                title="Film Persembahan Chill"
                items={chillOriginal}
                variant="portrait"
            />

            <MovieSection
                title="Top Rating Film Hari Ini"
                items={topRating}
                variant="portrait"
            />

            <MovieSection
                title="Film Trending"
                items={trending}
                variant="portrait"
            />

            <MovieSection
                title="Rilis Terbaru"
                items={newRelease}
                variant="portrait"
            />

        </>

    );

}

export default Home;