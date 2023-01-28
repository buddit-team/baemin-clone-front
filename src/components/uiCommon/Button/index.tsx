import React from 'react'

export type RoundButtonProps = {
    pY?: number;
    pX?: number;
    bgColor?: string;
    fColor?: string;
    fSize?: string;
    tag?: React.ElementType;
    twClass?: string;
    onClick?: () => void;
    children: string | React.ReactElement;
}

export default function RoundButton({
    pY=2,
    pX=3,
    bgColor='main',
    fColor="white",
    fSize="s",
    tag= 'button',
    ...props
}: RoundButtonProps) {

    const Tag = tag;
    const twClassName = `flex flex-row gap-1 items-center w-auto py-${pY} px-${pX} rounded-full bg-${bgColor} cursor-pointer` 
                        + (props.twClass? ' ' + props.twClass : '');

    return (
        <Tag 
            className={twClassName}
            {
                ...(
                    props.onClick &&
                    { onClick: function(event: React.MouseEvent) {
                        event.preventDefault();
                        props.onClick!();
                    } }
                )
            }
        >
            { props.children }
        </Tag>
    )
};



