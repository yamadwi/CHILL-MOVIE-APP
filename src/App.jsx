import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Film from "./pages/Film/Film";
import Series from "./pages/Series/Series";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MyList from "./pages/MyList/MyList";
import Watch from "./pages/Watch/Watch";

function App() {

    const[favorites, setFavorites] = useState([]);

    const [continueWatching, setContinueWatching] = useState([]);

    const toggleFavorite = (movie) => {

        const isFavorite = favorites.some(
            (item) => item.id === movie.id
        );

        if (isFavorite){
            setFavorites(
                favorites.filter(
                    (item) => item.id !== movie.id
                )
            );

        } else{
            setFavorites([
                ...favorites,
                movie,
            ]);
        }
        
    };

    const addContinueWatching = (movie) => {

        const isAlreadyInContinueWatching = continueWatching.some(
            (item) => item.id === movie.id
        );

        if (isAlreadyInContinueWatching){
            return;
        };

        setContinueWatching([
            ...continueWatching,
            movie,
        ]);

    };

    const removeContinueWatching = (movieId) => {

        setContinueWatching(
            continueWatching.filter(
                (item) => item.id !== movieId
            )
        );

    };

    return (
        
        <Routes>
            <Route
                path="/"
                element={
                    <Home 
                        favorites={favorites}
                        toggleFavorite={toggleFavorite}
                        continueWatching={continueWatching}
                        removeContinueWatching={removeContinueWatching}
                    />
                }
            />

            <Route
                path="/film"
                element={
                    <Film 
                        favorites={favorites}
                        toggleFavorite={toggleFavorite}
                        continueWatching={continueWatching}
                        removeContinueWatching={removeContinueWatching}    
                    />
                }
            />

            <Route
                path="/series"
                element={
                    <Series 
                        favorites={favorites}
                        toggleFavorite={toggleFavorite} 
                        continueWatching={continueWatching}
                        removeContinueWatching={removeContinueWatching}   
                    />
                }
            />
        
            <Route
                path="/my-list"
                element={
                    <MyList
                        favorites={favorites}
                        toggleFavorite={toggleFavorite}
                    />
                }
            />

            <Route
                path="/watch/:type/:id"
                element={
                    <Watch 
                        addContinueWatching={addContinueWatching}
                    />
                }
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />
        </Routes>

    );
    
}

export default App;