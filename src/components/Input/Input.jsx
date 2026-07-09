import { useState } from "react";
import "./Input.css";

import EyeOpen from "../../assets/icons/eye-open.svg";
import EyeClose from "../../assets/icons/eye-off.svg";

function Input ({
    label,
    type =  "text",
    placeholder,
}) {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    return(
        <div className="input-group">
            <label className="input-label">
                {label}
            </label>

            <div className="input-wrapper">
                <input 
                    type={
                        isPassword
                            ? showPassword
                                ? "text"
                                : "password"
                        : type
                    }
                    placeholder={placeholder}
                    className="input-field" 
                />

                {isPassword && (
                    <button
                        type="button"
                        className="input-toggle"
                        onClick={() =>
                            setShowPassword((prevState) => !prevState)
                        }
                    >
                        <img
                            src={
                                showPassword
                                    ? EyeOpen
                                    : EyeClose
                            }
                            alt="toggle password"
                        />
                    </button>
                )}
            </div>
        </div>
    )
}

export default Input;