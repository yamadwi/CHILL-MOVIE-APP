import { useParams } from "react-router-dom";

import "./Watch.css";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

import movies from "../../data/movies";
import series from "../../data/series";

function Watch() {

    const { type, id } = useParams();

    const selectedContent =
        type === "movie"
            ? movies.find(
                (movie) => movie.id === Number(id)
            )
            : series.find(
                (item) => item.id === Number(id)
            );

    return (
        <main className="watch">

            <VideoPlayer 
                variant={type}
                data={selectedContent}
            />

        </main>
    );
    
}

export default Watch;