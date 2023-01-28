import styled from "styled-components";

export const Address = styled.div<{
    fontSize?: string;
    fontColor?: string;
    maxWidth?: string;
}>`
    position: relative;
    max-width: calc(100% - 100px);
    height: 34px;
    line-height: 34px;
    padding-right: 16px;
    cursor: pointer;
    color: ${props => props.fontColor && props.theme.colors.hasOwnProperty(props.fontColor) ?
                        props.theme.colors[props.fontColor]
                        : props.theme.colors.gray900
    };
    font-size: ${props => props.fontSize && props.theme.fontSizes.hasOwnProperty(props.fontSize)?
                           props.theme.fontSizes[props.fontSize]
                           : props.theme.fontSizes.base 
    };

    &::after {
        position: absolute;
        top: 0px;
        right: 0;
        font-family: FontAwesome;
        content: '\f0d7';
        font-size: 13px;
    }
`;