import { useForm, Controller } from "react-hook-form";
import {
    TextField,
    Container,
    Button
} from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import api from '../../../ASSETS/api';
import useAuth from "../../../ASSETS/hooks/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";


function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const auth = useAuth();

    const {
        control,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            const { data: loginData } = await api.auth.login(data);

            auth.setToken(loginData.token);
            auth.setUser(loginData.user);
        } catch (e) {
            if (e.response.status === 422) {
                Object.keys(e.response.data.errors).forEach((key) => {
                    setError(key, {
                        type: "manual",
                        message: e.response.data.errors[key],
                    });
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='login-form'>
            <Link className='close' to='/'>
                <img className='close-image' src={'IMAGES/whiteCross.svg'}/>
            </Link>

            <div className="login-form__title">
                <p className="login-form__title-text login-form__title-text--accent">log into&nbsp;</p>
                <p className="login-form__title-text login-form__title-text--regular">your account</p>
            </div>
            <div className="login-form__container">
                <form className='login-form__form' onSubmit={handleSubmit(onSubmit)}>
                    <p className="login-form__form-label">Email</p>
                    <Controller
                        className="login-form__form-controler"
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                error={Boolean(errors.email?.message)}
                                fullWidth={true}
                                type="email"
                                label="ENTER EMAIL"
                                variant="filled"
                                helperText={errors.email?.message}
                            />
                        )}
                    />

                    <p className="login-form__form-label">Password</p>

                    <Controller
                        className="login-form__form-controler"
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                error={Boolean(errors.password?.message)}
                                type="password"
                                fullWidth={true}
                                label="ENTER PASSWORD"
                                variant="filled"
                                helperText={errors.password?.message}
                            />
                        )}
                    />

                    <Button
                        id='login-form__submit-button'
                        className='button button-primary'
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={isLoading}
                    >
                        Login
                    </Button>
                    <div className="redirection">
                        <p className="redirection--text">Don't have an account?&nbsp;</p>
                        <Link className="redirection--link" to='/registration'>
                            <p className="redirection--text">Sign up for free.</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;



// import React, { useState } from "react";
//
// export const LoginForm = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }
//
//     return (
//         <div className="login">
//             <div className="login-title">
//                 <h2 className="login-title-text login-title-text--accent">log into&nbsp;</h2>
//                 <h2 className="login-title-text">your account</h2>
//             </div>
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <label className="login-label" htmlFor="email">Email</label>
//                 <input className="login-input" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="ENTER EMAIL" id="email" name="email" />
//                 <label className="login-label"htmlFor="password">Password</label>
//                 <input className="login-input" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="ENTER PASSWORD" id="password" name="password" />
//                 <button type="submit">Log In</button>
//             </form>
//             <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
//         </div>
//     )
// }
