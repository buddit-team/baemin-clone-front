import React from 'react';
import { Address as StyledAddress } from './style';

type AddressProps = {
    type: 'main' | 'sub';
    address: string;
    fontSize?: string;
    fontColor?:string;
}

const Address = ({
    ...props
}: AddressProps) => {
    return (
        <StyledAddress
            fontColor={props.fontColor}
            fontSize={props.fontSize}
        >
            <span>{props.address}</span>
        </StyledAddress>
    )
};

export default Address;