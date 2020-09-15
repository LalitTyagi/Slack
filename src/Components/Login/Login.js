import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import {auth, provider} from "../firebase";
import {useStateValue} from "../StateProvider";
import { actionTypes } from '../reducer';



function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () =>{
        auth
        .signInWithPopup(provider)
        .then((result)=>{
            // console.log(result);
            dispatch({
                type:actionTypes.SET_USER, 
                user:result.user
            })
        })
        .catch((error)=>{
            alert(error.message)
        });
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://www.solarwinds.com/-/media/solarwinds/swdcv2/licensed-products/service-desk/integrations/sd-integrations-logo-slack.ashx?la=en&rev=ab8d740802074459a11137467a57378b&hash=0AA3197629F198745E6FBA8917EA87A5E8FD95B5" alt="" />
                <h1>Sign in to Clone of Slack</h1>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
