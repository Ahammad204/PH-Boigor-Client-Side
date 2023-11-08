import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";



const axiosSecure = axios.create({

    baseURL: 'http://localhost:5000',
    withCredentials: true

})

const useAxiosSecure = () => {

    const { logout } = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {

        axiosSecure.interceptors.response.use(res => {

            return res;

        }, error => {

            console.log(error.response)
            if (error.response.status === 401 || error.response.status === 401) {

                logout()
                .then(() => {

                    navigate('/login')

                })
                .catch(error => console.log(error))

            }

        }
        )

    }, [])

    return axiosSecure

};

export default useAxiosSecure;