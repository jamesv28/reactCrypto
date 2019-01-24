import React from 'react';
import styled, {css} from 'styled-components';
import {SelectableTile} from '../shared/Tile';
import {fontSize3} from '../shared/Styles';
import {CoinHeaderGridStyled} from '../settings/CoinHeaderGrid';

const numberFormatter = number => {
    return +(number + '').slice(0,7);
}
const PriceItemStyled = styled(SelectableTile)`
    ${props => props.compact && css `
        ${fontSize3}
    `}
`

function PriceTile({sym, data}) {
    return (
        <PriceItemStyled>
            <CoinHeaderGridStyled>
                <div>{sym}</div>
                <div>{numberFormatter(data.CHANGEPCT24HOUR)}</div>
            </CoinHeaderGridStyled>
        </PriceItemStyled>
    )
}
export default function({price, index}) {

    let sym = Object.keys(price)[0];
    let data = price[sym]['USD'];

    return (
        <PriceTile sym={sym} data={data}>
            {sym} {data.PRICE}
        </PriceTile>
    )
}