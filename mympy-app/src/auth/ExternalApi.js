// src/components/ExternalApi.js

import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-wrapper";
import axios from 'axios';

const ExternalApi = () => {
    const BASE_URL = process.env.REACT_APP_BE_URL || 'http://localhost:5000';
    const [showResult, setShowResult] = useState(false);
    const [apiMessage, setApiMessage] = useState("");
    const { getTokenSilently } = useAuth0();

    const callApi = async () => {
        try {
            // console.log(getTokenSilently())
            const token = await getTokenSilently();
            console.log('token', token)

            const response = await axios.get(`${BASE_URL}/auth/config`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const responseData = await response.data;

            setShowResult(true);
            setApiMessage(responseData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <button onClick={callApi}>Ping API</button>
            {showResult && console.log('API', JSON.stringify(apiMessage, null, 2))}
        </>
    );
};

export default ExternalApi; 
