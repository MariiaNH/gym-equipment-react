import { Routes, Route, Navigate } from "react-router-dom";
import NotFound  from "../../COMPONENTS/NotFound/NotFound";
import useAuth from "../../ASSETS/hooks/useAuth";

import {
    CircularProgress,
    Container,
    Grid,
} from "@material-ui/core";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import Home from "../../pages/Home/Home";

function AppRoutes() {
    const auth = useAuth();

    return auth.isLoaded ? (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/not-found-404" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<Navigate to="/not-found-404" />} />
        </Routes>
    ) : (
        <Container maxWidth="md">
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item>
                    <CircularProgress color="inherit" />
                </Grid>
            </Grid>
        </Container>
    );
}

export default AppRoutes;
