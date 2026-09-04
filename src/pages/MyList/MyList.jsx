import "./MyList.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import MovieGrid from "../../features/home/MovieGrid/MovieGrid";
import MoviePreview from "../../components/MoviePreview/MoviePreview";
import MoviePopup from "../../components/MoviePopup/MoviePopup";

import useResponsive from "../../hooks/useResponsive";
import { useEffect, useState } from "react";

import movies from "../../data/movies";
import series from "../../data/series";

import { getMyList } from "../../services/api";

function MyList({
    favorites,
    toggleFavorite,
}) {

    const { isMobile } = useResponsive();

    const[myList, setMyList] = useState([]);

    const[preview, setPreview] = useState(null);
    const[popupMovie, setPopupMovie] = useState(null);

    useEffect(() => {
        
        const fetchMylist = async () => {
            try{
                const response = await getMyList();

                const allContents = [
                    ...movies,
                    ...series,
                ];

                const mappedMyList = response.data
                    .map((item) => {
                        return allContents.find(
                            (content) =>
                                content.id === Number(item.contentId)
                        );
                    })
                    .filter(Boolean);

                setMyList(mappedMyList);
            }catch(error){
                console.error(
                    "Gagal mengambil My List",
                    error
                );
            }
        };
        fetchMylist();
        
    }, []);

    const handlePreview = (movie, rect) => {

        if(isMobile){

            setPopupMovie(movie);
            return;

        }

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

            <main className="my-list">

                <div className="my-list__container">

                    <h1 className="my-list__title">

                        Daftar Saya

                    </h1>

                    {myList.length > 0 ?(

                        <MovieGrid
                            title=""
                            items={myList}
                            variant="portrait"
                            onPreview={handlePreview}
                        />

                    ) : (

                        <div className="my-list__empty">
                            <h2 className="my-list__empty-title">
                                Daftar Saya masih kosong
                            </h2>

                            <p className="my-list__empty-description">
                                Tambahkan film atau series ke daftar favoritmu.
                            </p>
                        </div>

                    )}

                </div>

            </main>

            {!isMobile && preview && (

                <MoviePreview
                    movie={preview.movie}
                    rect={preview.rect}
                    onClose={handleClosePreview}
                    onOpen={handleOpenPopup}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                />

            )}

            <MoviePopup
                movie={popupMovie}
                onClose={handleClosePopup}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
            />

            <Footer />

        </>

    );

}

export default MyList;