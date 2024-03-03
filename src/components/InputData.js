import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
// import Pincode from "./Pincode";

// import axios from "axios";



const InputData = () => {

    const navigate = useNavigate();

    const [text, setText] = useState("")

    // const [res, setRes] = useState([]);

    // const API_URL = 'https://api.postalpincode.in/pincode/'


    
    //     const displayData = async (pincode) => {
    //         try {
    //         const response = await axios.get(`${API_URL}${pincode}`)
    //         setRes(response.data);

    //         console.log(res)
    //         } catch (error) {
    //         console.log(error.message);
    //         }
    //         };

            

    

    function getData(){
        console.log(text)
        navigate(`/detail/${text}`)

        // navigate(`/pincode?pincode=${text}`)
        
    }

    return (

        <div className="inputData">
            <h1>Enter Pincode</h1>

            <input type="number" placeholder="Enter Pincode" value={text} onChange={(e)=>setText(e.target.value)} />

            <button onClick={getData}>Lookup</button>
            

        </div>
    )
}

export default InputData;