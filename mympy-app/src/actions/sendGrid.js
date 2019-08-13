import axios from 'axios';

export const SEND_EMAIL_START = 'SEND_EMAIL_START';
export const SEND_EMAIL_SUCCESS = 'SEND_EMAIL_SUCCESS';
export const SEND_EMAIL_FAILURE = 'SEND_EMAIL_FAILURE';

// const BASE_URL = process.env.REACT_APP_BE_URL || 'http://localhost:5000';
const BASE_URL = 'https://mympy-dreamers-staging.herokuapp.com';

export const sendMail = (mailing) => dispatch => {
    dispatch({ type: SEND_EMAIL_START });

    axios.post(`${BASE_URL}/mail/`, mailing)
    .then(res => console.log(res))
    .catch(err => console.log(err));
}