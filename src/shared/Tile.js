import styled from 'styled-components';

import {subtleBoxShadow, lightBlueBackground, myBlue, redBoxShadow} from './Styles';

export const Tile = styled.div`
    padding: 10px;
    ${subtleBoxShadow}
    background-color: ${myBlue}
`;

export const SelectableTile = styled(Tile)`
    &:hover {
        cursor: pointer;
        ${lightBlueBackground}
    }
`;

export const DeletableTile = styled(SelectableTile)`
    &:hover {
        cursor: pointer;
        ${redBoxShadow}
    }
`;

export const DisabledTile = styled(Tile)`
    pointer-events: none;
    cursor: disabled;
    opacity: 0.4;
`;
export const NotAllowedTile = styled(Tile)`
    cursor: help;
    pointer-events: none;
`;

