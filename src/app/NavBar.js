import React from 'react';
import {AppContext} from './AppProvider';
import styled, {css} from 'styled-components';

const ControlButtonElem = styled.div`
    cursor: pointer;
    padding-right: 10px;
    ${props => props.active && css`
    color: #F8F8FF;
    text-decoration: underline;`}
`

function ControlButton({name, active}) {
    return (
        <AppContext.Consumer>
            {({page, setPage}) => (
            <ControlButtonElem 
                active={page === name}
                onClick={() => {setPage(name)}}
            >
            {name}
            </ControlButtonElem>
            )}
        </AppContext.Consumer>
    )
}

export default function() {
    return (
        <nav className="navbar navbar-expand-md">
            <div className="navbar-brand" >Crypto Dash</div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <ControlButton className="nav-link"  name={"dashboard"} />
                </li>
                <li className="nav-item">
                    <ControlButton className="nav-link" name={"settings"}/>
                </li>
            </ul>
            </nav>

    )
}