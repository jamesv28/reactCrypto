import React from 'react';
import styled from 'styled-components';
import {AppContext} from '../app/AppProvider';
import _ from 'lodash';
import fuzzy from 'fuzzy';

const SearchGrid = styled.div`
    display: grid;
    grid-template-columns: 200px 300px;
    justify-content: center; 
`
const SearchInput = styled.input`
    align-self: center;
`
const handleFilter = _.debounce((inputValue,coinList, setFilteredCoins ) => {
    let coinSymbols = Object.keys(coinList);
    let coinNames = coinSymbols.map(sym => coinList[sym].CoinName);
    let searchTerm = coinSymbols.concat(coinNames);

    let filterFuzzy = fuzzy
    .filter(inputValue, searchTerm, {})
    .map(result => result.string);

    let filteredCoins = _.pickBy(coinList, (result,symKey) => {
        let coinName = result.CoinName;
        return (
            _.includes(filterFuzzy, symKey) || _.includes(filterFuzzy, coinName)
        )
    });
    setFilteredCoins(filteredCoins); 
}, 500);

function filterCoins(e, setFilteredCoins, coinList) {
    let inputValue = e.target.value;
    if(!inputValue) {
        setFilteredCoins(null);
        return;
    }
    handleFilter(inputValue, coinList, setFilteredCoins);
}

export default function() {
    return (
        <AppContext.Consumer>  
            { ({setFilteredCoins, coinList}) =>      
            <SearchGrid>
                <p>Search all coins</p>
                <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}/>
            </SearchGrid>
            }
        </AppContext.Consumer>
    )
}