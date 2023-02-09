import { useForm, Controller } from "react-hook-form";

import {
    TextField,
    Grid,
    makeStyles,
    Container,
    Button,
    Typography,
} from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import api from '../../../ASSETS/api/index';
import useAuth from "../../../ASSETS/hooks/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";


function RegistrationForm() {
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
            await api.auth.registration(data);
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
        <div className='registration-form'>
            <Link className='close' to='/'>
                <img className='close-image' src={'IMAGES/whiteCross.svg'}/>
            </Link>
            <div className="registration-form__title">
                <p className="registration-form__title-text registration-form__title-text--accent">log into&nbsp;</p>
                <p className="registration-form__title-text registration-form__title-text--regular">your account</p>
            </div>
            <form className='registration-form__form' onSubmit={handleSubmit(onSubmit)}>
                <p className="registration-form__form-label">Full Name</p>
                <Controller
                    name="fullName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            error={Boolean(errors.firstName?.message)}
                            fullWidth={true}
                            label="ENTER FULL NAME"
                            variant="filled"
                            helperText={errors.fullName?.message}
                        />
                    )}
                />

                <p className="registration-form__form-label">Email</p>

                <Controller
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

                <p className="registration-form__form-label">Password</p>

                <Controller
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
                    id='registration-form__submit-button'
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isLoading}
                >
                    Create an account
                </Button>
                <div className="redirection">
                    <p className="redirection--text">Already have an account?&nbsp;</p>
                    <Link className="redirection--link" to='/login'>
                        <p className="redirection--text">Login</p>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;




// import React, { useState } from "react";
//
// export const Register = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [name, setName] = useState('');
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }
//
//     return (
//         <div className="auth-form-container">
//             <h2>Register</h2>
//             <form className="register-form" onSubmit={handleSubmit}>
//                 <label htmlFor="name">Full name</label>
//                 <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
//                 <label htmlFor="email">email</label>
//                 <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//                 <label htmlFor="password">password</label>
//                 <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//                 <button type="submit">Log In</button>
//             </form>
//             <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? LoginForm here.</button>
//         </div>
//     )
// }
