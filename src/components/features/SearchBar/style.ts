import styled, { css } from "styled-components";
import { SearchBarProps } from ".";

export const SearchBar = styled.div<SearchBarProps>`
    width: 100%;
    padding: 0 16px 16px;

    ${props => props.type == 'main' && css`
        border-radius: props 0 0 20px 20px;
        box-shadow: 0 8px 5px rgba(0,0,0,.15);
        background-color: ${props.theme.colors.main};
    `}

    span {
        display: flex;
        align-items: center;
        width: 100%;
        height: 44px;
        bprder-radius: 2px;
        box-shadow: 3px 3px 4px rgba(0,0,0,.04);
        background-color: #FFF;
        color: ${props => props.theme.colors.gray600};
        cursor: pointer;

        &::before {
            width: 44px;
            height: 44px;
            line-height: 44px;
            font-family: FontAwesome;
            content: '\f002';
            text-align: center;
            color: ${props => props.theme.colors.main};
        }
    }
`;



