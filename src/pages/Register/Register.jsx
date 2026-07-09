import "./Register.css";

import { Link } from "react-router-dom";

import Logo from "../../assets/icons/logo-full.svg";
import GoogleLogo from "../../assets/icons/logo-google.png";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function Register(){

    return(
        <main className="register">

            <div className="register__overlay">

                <div className="register__card">

                    <img 
                        src={Logo}
                        alt="Chill Logo"
                        className="register__logo" 
                    />

                    <h1 className="register__title">
                        Masuk
                    </h1>

                    <p className="register__subtitle">
                        Selamat datang kembali!
                    </p>

                    <form className="register__form">

                        <Input
                            label="Username"
                            placeholder="Masukkan username"
                        />

                        <Input
                            label="Kata Sandi"
                            type="password"
                            placeholder="Masukkan kata sandi"
                        />

                        <Input
                            label="Konfirmasi Kata Sandi"
                            type="password"
                            placeholder="Masukan kata sandi"
                        />

                    </form>

                    <div className="register__helper">

                        <p>
                            Sudah punya akun?{" "}
                            <Link to="/Login">
                                Masuk
                            </Link>
                        </p>

                    </div>

                    <div className="register__action">
                        
                        <Button>
                            Masuk
                        </Button>

                        <p className="register__divider">
                            Atau
                        </p>

                        <Button variant="google">

                            <img 
                                src={GoogleLogo} 
                                alt="Google"
                            />

                            Daftar dengan Google

                        </Button>

                    </div>

                </div>

            </div>
            
        </main>
    )

}

export default Register