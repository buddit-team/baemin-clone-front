import styled, { css } from "styled-components";

export const Header = styled.header<{
    type: 'main' | 'sub';
}>`
    display: grid;
    overflow: hidden;

    ${props => props.type === 'main' && css`
        background-color: ${props.theme.colors.main};
    `}
`;

export const Utils = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 48px;
    padding: 16px;
`;

export const Address = styled.div`
    position: relative;
    max-width: calc(100% - 100px);
    height: 34px;
    line-height: 34px;
    padding-right: 16px;
    color: #FFF;
    cursor: pointer;

    &::after {
        position: absolute;
        top: 0px;
        right: 0;
        font-family: FontAwesome;
        content: '\f0d7';
        font-size: 13px;
        color: #FFF;
    }
`;

export const Menus = styled.nav`

    ul {
        display: flex;
        align-items: center;
        gap: 8px;

        li {
            text-align: center;
            width: 24px;
            height : 24px;
            line-height: 24px;
            font-size: 18px;
        }
    }
`;

export const Back = styled.button`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    text-align: center;
    line-height: 24px;
`;

export const Category = styled.span`
    font-family: Hanna11;
    font-size: ${props => props.theme.fontSizes.l};
    border: 0;
    letter-spacing: 1px;
    line-height: 24px;
`;

export const RandomBox = styled.div<{
    height: number;
}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${props => props.height + 'px'};
`;

