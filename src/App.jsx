import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {

    const[favorites, setFavorites] = useState([]);
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

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Home 
                        favorites={favorites}
                        toggleFavorite={toggleFavorite}    
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