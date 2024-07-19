import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const usenavigate = useNavigate();
    
   
    useEffect(() => {
       

    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
            <h1>Welcome to Home page</h1>
        </div>

    );
}

export default Home;