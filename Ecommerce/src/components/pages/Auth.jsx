import { useEffect, useState } from "react";
import "./auth.css"
import { AuthForm } from "../form/AuthForm";
import { AUTH_URI } from "../../api/Api";
import { Navigate, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { use } from "react";

export const Auth = () => {
    
    const [page, setPage] = useState(false);
    const {data, loading, error, refetch} = useFetch(
        {   
            url: `${AUTH_URI}${page?"register":"login"}`,
            autoFetch: false,
            method: "POST",
            authorization: false
        }
    )

    const onHandleSubmit = (e, formData) => {
        e.preventDefault()
        
        refetch(formData)
    }
    const navigate = useNavigate()
    useEffect(()=> {
        if(data !== null){
            localStorage.setItem("user-token", data.token)
            navigate("/", {replace:true});
            window.location.reload()
        }
        if(error) {
            console.error(error)
        }
    }, [data])
    const formEntitys = [
        {username:"", password:""},
        {username:"", password:"", firstname:"", lastname:"", role:"ROLE_USER"} // Por defecto se crean usuarios normales
    ]
    const fields = {
        login:[
            {name:"username", type:"text", placeholder:"Name"},
            {name:"password", type:"password", placeholder:"Password"}
        ],
        register:[
            {name:"username", type:"text", placeholder:"Name"},
            {name:"password", type:"password", placeholder:"Password"},
            {name:"firstname", type:"text", placeholder:"Firstname"},
            {name:"lastname", type:"text", placeholder:"Lastname"}
        ]
    }

    return(
        
        <div className="wrap-auth">

            <div className="auth">

                <div className="auth_layout-column auth_layout-column-form">
                    {
                        page? 
                        <AuthForm
                            onSubmit={onHandleSubmit}
                            title={"Register"}
                            fields={fields.register}
                            userState={formEntitys[1]}
                            buttonName={"Register"}
                        ></AuthForm>
                        :
                        <AuthForm
                            onSubmit={onHandleSubmit}
                            title={"Log in"}
                            fields={fields.login}
                            userState={formEntitys[0]}
                            buttonName={"Log in"}
                        ></AuthForm>
                    }
                    <span>
                        {page?"You have a account ":
                        "You dont have a account "}
                        <a href="#" onClick={() => setPage(!page)}>
                            {page?"Login":"register"}
                        </a>
                    </span>
                </div>
                <div className="auth_layout-column">
                    <img className="auth_layout-column_img" src="https://img.freepik.com/vector-gratis/ilustracion-intranet-diseno-plano_23-2149363702.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                </div>

            </div>

        </div>
    )
}