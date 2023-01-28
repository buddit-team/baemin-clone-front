import React from "react";
import { Link } from "react-router-dom";
import { JsxElement } from "typescript";

type Size = 'md' | 'lg';

type BoxCategoryProps = {
	category: string;
	text?: string;
	link: string;
    size?: Size;
    bg?: string;
    bgPos?: string;
    bgSize?: string;
};
const BoxCss: {[S in Size]: string} = {
    md: 'w-full h-24',
    lg: 'w-full h-40'
};
export function BoxCategory({
    size='md',
    ...props
}: BoxCategoryProps) {

	return (
        <div className={`z-0 relative ${BoxCss[size]} rounded-lg bg-[#FFF] overflow-hidden`}>
            <div 
                className="z-1 absolute w-full h-full bg-no-repeat" 
                style={{
                    background: props.bg? `url(${props.bg})` : '#FFF',
                    backgroundPosition: props.bgPos || 'center',
                    backgroundSize: props.bgSize || 'auto',
                    backgroundRepeat: 'no-repeat'
                }} 
            />
            <Link
                className="z-2 relative block w-full h-full p-3"
                to={props.link}
            >
                <strong
                    className="text-xl font-bold"
                >{props.category}</strong>
                <p
                    className="text-xs whitespace-pre-wrap"
                >{props.text}</p>
            </Link>
        </div>
    )
}

type IconCategoryProps = {
    category: string;
    link: string;
    icon: React.ReactElement;
}
export function IconCategory (props: IconCategoryProps) {

    return (
        <div className={`w-full h-20 rounded-lg bg-[#FFF] overflow-hidden`}>
            <Link
                className="flex flex-col gap-2 items-center justify-center w-full h-full p-2"
                to={props.link}
            >
                {props.icon}
                <strong
                    className="text-s font-bold text-center"
                >{props.category}</strong>
            </Link>
        </div>
    )
}


