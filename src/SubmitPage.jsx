import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function SubmitPage({ data }) {
    const { firstName, lastName } = data;
    const [welcomeMSG, setWelcomeMSG] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        setWelcomeMSG(`Thank You ${firstName} ${lastName} ❤️`)
        const timer = setTimeout((e) => {
            navigate("/HomePage")
        }, 2000);
        return () => clearTimeout(timer);
        
    },[firstName,lastName,navigate])
    
    
    return (
        <div>
            <p style={{textAlign:"center"}}>{welcomeMSG}</p>
        </div>
    )
}