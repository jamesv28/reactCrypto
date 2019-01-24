import React from 'react';
import {AppContext} from '../app/AppProvider';

const WelcomeMessage = ({firstVisit}) => {
    return (
        <AppContext.Consumer>
            {({firstVisit}) =>
            firstVisit ? 
                <div>Welcome to CryptoDash, please select your favorite coins </div> : null
        }
        </AppContext.Consumer>
    )
}

export default WelcomeMessage;