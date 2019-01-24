import React from 'react';
import styled, {css} from 'styled-components';
import {SelectableTile} from '../shared/Tile';
import {fontSize3,fontSizeBig} from '../shared/Styles';
import {CoinHeaderGridStyled} from '../settings/CoinHeaderGrid';
import { numberFormat } from 'highcharts';

const numberFormatter = number => {
    return +(number + '').slice(0,7);
}
const TickerPrice = styled.div`
    ${fontSizeBig}
`
const JustifyRight = styled.div`
    justify-self: right;
`
const JustifyLeft = styled.div`
    justify-self: left;
`

const PercentChange = styled.div`
    color: #76EEC6;
    ${props => props.red && css`
        color: #FF3030;    
    `}
`
function ChangePercent({data}) {
    return (
        <JustifyRight>
            <PercentChange red={data.CHANGEPCT24HOUR < 0}>
                {numberFormatter(data.CHANGEPCT24HOUR)}
            </PercentChange>
        </JustifyRight>
    )
}
const PriceItemStyled = styled(SelectableTile)`
    ${props => props.compact && css `
        display: grid;
        grid-gap: 5px;
        ${fontSize3}
        grid-template-columns: repeat(3, 1fr);
    `}
`

function PriceTile({sym, data}) {
    return (
        <PriceItemStyled>
            <CoinHeaderGridStyled>
                <div>{sym}</div>
                <ChangePercent data={data}/>
            </CoinHeaderGridStyled>
            <TickerPrice>
                ${numberFormat(data.PRICE)}
            </TickerPrice>
        </PriceItemStyled>
    )
}

function PriceTileCompact({sym, data}) {
    return (
        <PriceItemStyled compact>
            <JustifyLeft>
                {sym}
            </JustifyLeft>
            <ChangePercent data={data}/>
            <div>
                ${numberFormat(data.PRICE)}
            </div>
        </PriceItemStyled>
    )
}

export default function({price, index}) {

    let sym = Object.keys(price)[0];
    let data = price[sym]['USD'];
    let TileClass = index < 5 ? PriceTile : PriceTileCompact;

    return (
        <TileClass sym={sym} data={data}>
            
        </TileClass>
    )
}