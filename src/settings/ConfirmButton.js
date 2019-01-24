import React from 'react';
import styled from 'styled-components';
import {AppContext} from '..//app/AppProvider';

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: green;
    cursor: pointer;
    color: #F8F8FF;
    border: 1px solid #F8F8F8;
    padding: 5px;
    border-radius: 2px;
    &:hover {
        background: #f8f8f8;
        color: #3A5FCD;
    }
`

export const CenteredDiv = styled.div`
    display: grid;
    justify-content: center;
`

export default function() {
    return (
        <AppContext.Consumer>
            {({confirmFavorites}) => 
                <CenteredDiv>
                    <ConfirmButtonStyled onClick={confirmFavorites}>
                        Confirm Favorites
                    </ConfirmButtonStyled>
                </CenteredDiv>
            }
        </AppContext.Consumer>
    )
}