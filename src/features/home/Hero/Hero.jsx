import "./Hero.css";

import InformationOutline from "../../../assets/icons/information-outline.svg";
import VolumeOff from "../../../assets/icons/volume-off.svg"

import Button from "../../../components/Button/Button";

function Hero(){
    return(
        <section className="hero">

            <div className="hero__overlay">

                <div className="hero__content">

                    <h1 className="hero__title">
                        Duty After School
                    </h1>

                    <p className="hero__description">
                        Sebuah benda tak dikenal mengambil alih dunia.
                        Dalam keputusasaan, Departemen Pertahanan mulai
                        merekrut lebih banyak tentara, termasuk siswa SMA.
                    </p>

                    <div className="hero__action">
                        <Button className="hero__play">
                            Mulai
                        </Button>

                        <Button 
                            variant="secondary"
                            className="hero__info"
                        >
                            <img 
                                src={InformationOutline} 
                                alt="Information Outline"
                            />
                            Selengkapnya
                        </Button>

                        <span className="hero__age">
                            18+
                        </span>

                    </div>

                </div>

                <button className="hero__volume">

                    <img 
                        src={VolumeOff}
                        alt="Volume Off"
                    />

                </button>

            </div>

        </section>

    );
}

export default Hero;