import React, {useEffect, useState} from "react";
import axios from "axios";
import UserList from "../Components/UserList";

const HomePages = ()=>{
    const [user,setUser]=useState([])

    useEffect(() => {
        axios('https://jsonplaceholder.org/users')
            .then(({data})=>setUser(data.user))

    }, []);

    return(
        <div>
            <h1>Все пользователи</h1>
            <UserList user={user}/>
        </div>
    )
}

export default HomePages