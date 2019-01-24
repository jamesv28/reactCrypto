import React from 'react';
import styled from 'styled-components';

import {AppContext} from '../app/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-gap: 15px;
    margin-top: 40px;
    margin-bottom: 40px;
`
function getSearchResults(coinList, filteredCoins) {
    return (filteredCoins && Object.keys(filteredCoins)) ||
    Object.keys(coinList).slice(0,100)
}

function getCoinsToDisplay(coinList, topSection, favorites, filteredCoins) {
    return topSection ? favorites : getSearchResults(coinList, filteredCoins);
}

export default function({topSection}) {
    return (
        <AppContext.Consumer>
            { ({coinList, favorites, filteredCoins}) => 
            <CoinGridStyled>
                {getCoinsToDisplay(coinList, topSection, favorites, filteredCoins).map(coinKey => 
                    <CoinTile key={coinKey} topSection={topSection} coinKey={coinKey}/> )}
            </CoinGridStyled>
        }
        </AppContext.Consumer>
    )
}