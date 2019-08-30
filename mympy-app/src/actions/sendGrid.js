import axios from 'axios';

export const SEND_EMAIL_START = 'SEND_EMAIL_START';
export const SEND_EMAIL_SUCCESS = 'SEND_EMAIL_SUCCESS';
export const SEND_EMAIL_FAILURE = 'SEND_EMAIL_FAILURE';

//Switches base_url based on environment variable
const BASE_URL = process.env.REACT_APP_BE_URL || 'http://localhost:5000';

// `mailing` contains and object holding all the information required for the email

export const sendMail = (mailing) => dispatch => {
    dispatch({ type: SEND_EMAIL_START });

    axios.post(`${BASE_URL}/mail/`, mailing)
        .then(res => {
            dispatch({ type: SEND_EMAIL_SUCCESS, payload: res.data });
            console.log(res)
        })
        .catch(err => {
            dispatch({ type: SEND_EMAIL_FAILURE, payload: err });
            console.log(err);
        });
}