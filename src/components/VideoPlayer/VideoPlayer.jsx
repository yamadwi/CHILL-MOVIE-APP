import { useNavigate } from "react-router-dom";

import "./VideoPlayer.css";

import ArrowBack from "../../assets/icons/arrow-back.svg";
import Rewind10 from "../../assets/icons/rewind-10.svg";
import PlayArrow from "../../assets/icons/play-arrow.svg";
import Forward10 from "../../assets/icons/forward-10.svg";
import VolumeUp from "../../assets/icons/volume-up.svg";

import NextEpisode from "../../assets/icons/skip-next.svg";
import EpisodeList from "../../assets/icons/list-bulleted.svg";

import Subtitle from "../../assets/icons/message-text.svg";
import Speed from "../../assets/icons/speedometer.svg";
import FullScreen from "../../assets/icons/fullscreen.svg";

import SkipIntro from "../../assets/icons/skip-intro.svg";

function VideoPlayer({ variant, data }) {

    const navigate = useNavigate();

    return(

        <section className="video-player">
            
            <button
                className="video-player__back"
                type="button"
                onClick={() => navigate(-1)}
            >
                <img
                    src={ArrowBack}
                    alt="Back"
                />
            </button>

            <section className="video-player__screen">

                <img 
                    className="video-player__image"
                    src={data?.landscape} 
                    alt={data?.title}
                />

                <button
                    className="video-player__skip-intro"
                    type="button"
                >
                    <img
                        src={SkipIntro}
                        alt="Skip Intro"
                    />
                </button>

            </section>

            <section className="video-player__controls">

                <div className="video-player__left">

                    <button type="button">
                        <img
                            src={PlayArrow}
                            alt="Play"
                        />
                    </button>

                    <button type="button">
                        <img
                            src={Rewind10}
                            alt="rewind 10"
                        />
                    </button>
                    
                    <button type="button">
                        <img
                            src={Forward10}
                            alt="forward 10"
                        />
                    </button>

                    <button>
                        <img
                            src={VolumeUp}
                            alt="Volume"
                        />
                    </button>

                </div>

                <div className="video-player__title">
                    {data?.title}
                </div>

                <div className="video-player__right">

                    {variant === "series" && (

                        <>
                        
                            <button type="button">
                                <img
                                    src={NextEpisode}
                                    alt="Next Episode"
                                />
                            </button>

                            <button type="button">
                                <img
                                    src={EpisodeList}
                                    alt="Episode List"
                                />
                            </button>

                        </>

                    )}

                    <button type="button">
                        <img
                            src={Subtitle}
                            alt="Subtitle"
                        />
                    </button>

                    <button type="button">
                        <img
                            src={Speed}
                            alt="Playback Speed"
                        />
                    </button>

                    <button type="button">
                        <img
                            src={FullScreen}
                            alt="Fullscreen"
                        />
                    </button>

                </div>

            </section>

        </section>
        
    );

}

export default VideoPlayer;