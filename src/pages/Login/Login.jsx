import "./Login.css";

import { Link } from "react-router-dom";

import Logo from "../../assets/icons/logo-full.svg";
import GoogleLogo from "../../assets/icons/logo-google.png";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function Login(){

    return(
        <main className="login">

            <div className="login__overlay">

                <div className="login__card">

                    <img 
                        src={Logo}
                        alt="Chill Logo"
                        className="login__logo" 
                    />

                    <h1 className="login__title">
                        Masuk
                    </h1>

                    <p className="login__subtitle">
                        Selamat datang kembali!
                    </p>

                    <form className="login__form">

                        <Input
                            label="Username"
                            placeholder="Masukkan username"
                        />

                        <Input
                            label="Kata Sandi"
                            type="password"
                            placeholder="Masukkan kata sandi"
                        />

                    </form>

                    <div className="login__helper">

                        <p>
                            Belum punya akun?{" "}
                            <Link to="/Register">
                                Daftar
                            </Link>
                        </p>

                        <Link to="#" >
                            Lupa kata sandi?
                        </Link>

                    </div>

                    <div className="login__action">
                        
                        <Button>
                            Masuk
                        </Button>

                        <p className="login__divider">
                            Atau
                        </p>

                        <Button variant="google">

                            <img 
                                src={GoogleLogo} 
                                alt="Google"
                            />

                            Masuk dengan Google

                        </Button>

                    </div>

                </div>

            </div>
            
        </main>

    );

}

export default Login;