import { useEffect } from "react";
import { useUsersContext } from "../context/userContext";
import { getUser } from "../services/endPoints";

const Inicializador = ({children}) => {

    const {setUsers} = useUsersContext(); 

    useEffect(() => {
        getUser()
            .then( res => {
                setUsers(res.data)
            })
    }, [setUsers])

    return children;
}

export default Inicializador;