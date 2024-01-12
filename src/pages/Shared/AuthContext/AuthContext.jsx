import { useContext } from "react"
import { AuthContext } from "../../../router/AuthProvider"

export const useAuth = () => {
    return useContext(AuthContext)
}