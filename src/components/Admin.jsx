import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

export const ClientsList = () => {
    const [client, setClients] = useState([]);


    useEffect{() =>{
        getData();
    },[]}

    async function getData(){

        const data = await fetch('http://localhost:8080/users').then(d => d.json());
        setClients(data);
        console.log(data)

    }


    return (
        <div>{client.map((e) =>(
            <div>{e.employee.name}</div>
        ))}</div>
    )
}