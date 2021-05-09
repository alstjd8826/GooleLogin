// GoogleButton.js

import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId = "575057810581-pl45r704p8h8co0a7hldbgeote7bd3nr.apps.googleusercontent.com";

export default function GoogleButton(){
    const onSuccess = (response) => {
    	console.log(response);
    
        const { googleId, profileObj : { email, name } } = response;
        
        // await onSocial({
        //     socialId : googleId,
        //     socialType : 'google',
        //     email,
        //     nickname : name
        // });
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}/>
        </div>
    )
}