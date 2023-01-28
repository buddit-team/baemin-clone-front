import React from 'react'
import { Link } from 'react-router-dom'

type ScrollSectionProps = {
    title: string | React.ReactElement;
    children: React.ReactElement,
    titleIcon?: string;
    qMark?: boolean;
    qText?: string;
    more?: boolean;
    moreText?: string;
    moreLink?: string;
    fix?: boolean;
}

export default function ScrollSection({
    title,
    qMark=false,
    qText,
    more=false,
    moreLink,
    moreText,
    children,
    fix=false
}: ScrollSectionProps) {
    
    const wrapCss = fix
                    ? 'block w-full h-auto'
                    : 'w-max h-auto flex flex-row gap-4'

  return (
    <section className="w-full grid grid-rows-none gap-2 bg-white py-4 px-2">
        <div className="flex w-full content-between items-center">
            <div className="flex items-center gap-2">
                <h2 className="font-bold text-xl">{title}</h2>    
                {
                    qMark &&
                    <div className="relative overflow-visible group">
                        <i 
                            className="block w-[14px] h-[14px] leading-[12px] rounded-full border-[1px] border-gray400 text-[10px] text-center text-gray500 cursor-pointer"
                        >?</i>
                        <p 
                            className="hidden absolute bottom-[20px] left-[-100px] w-[200px] bg-gray200 rounded-sm drop-shadow-sm p-2 whitespace-pre-wrap leading-2 text-xxs text-gray600 group-focus:block group-hover:block hover:block"
                        >{qText}</p>
                    </div>
                    
                }
            </div>
            {
                more &&
                <Link 
                    to={moreLink!}
                    className=""
                >{moreText}</Link>
            }
        </div>
        <div className="w-full overflow-x-scroll overflow-y-hidden">
            <div className={wrapCss}>
                {children}
            </div>
        </div>
    </section>
  )
}
