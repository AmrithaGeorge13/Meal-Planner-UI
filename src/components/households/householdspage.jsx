import {useState, useEffect} from "react";
import {getHouseholds} from "../../api/households.js";
import HomePage from "../../pages/HomePage.jsx";

function Householdspage(){
    const [households, setHouseholds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        getHouseholds().then((data)=>{setHouseholds(data);setError(null)}).catch((err)=> setError(err.message)).finally(()=>setLoading(false));
    }, []);
    if (loading) return <p>LOADING...</p>;
    if(error) return <p>Error : {error}</p>;

    return (<ul>
        {households.map((h)=>(<li key={h.id}>{h.name}</li>))}
    </ul>);
}

export default Householdspage;