import { useContext} from "react";
import { AuthContext } from "../context/AuthContext/authContext";

function useAuth () {
    return useContext(AuthContext)
};

export default useAuth;
