import { useContext } from "react";
import AuthContext from "../context/Auth";


export default function useAuth() {
    return useContext(AuthContext);
}
