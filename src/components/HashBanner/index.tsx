import React from 'react'
import RoundButton, { RoundButtonProps } from '../uiCommon/Button';
import { Link } from 'react-router-dom';

const dummy = [
    {
        contents: '오늘의 추천1',
        onClick: function() {
            alert(`${this.contents}로 이동`);
        }
    },
    {
        contents: '오늘의 추천2',
        onClick: function() {
            alert(`${this.contents}로 이동`);
        }
    },
    {
        contents: '오늘의 추천3',
        onClick: function() {
            alert(`${this.contents}로 이동`);
        }
    },
    {
        contents: '오늘의 추천4',
        onClick: function() {
            alert(`${this.contents}로 이동`);
        }
    },
    {
        contents: '오늘의 추천5',
        onClick: function() {
            alert(`${this.contents}로 이동`);
        }
    },
    {
        contents: '오늘의 추천6',
        onClick: function() {
            alert(`${this.contents}로 이동`);
        }
    },
]

type HashBannerProps = {
    items: Array<{
        contents: string | React.ReactElement;
        onClick?: () => void;
    }>;
    itemStyle?: RoundButtonProps;
    animation?: boolean;
}

export default function HashBanner({
    items,
    itemStyle,
    animation=true
}: HashBannerProps) {

    const wrapperRef = React.useRef<HTMLDivElement|null>(null);
    const contentsRef = React.useRef<HTMLUListElement|null>(null);

    // const [mouseDown, setMouseDown] = React.useState<boolean>(false);
    // const [scrollX, setScrollX] = React.useState<number>(0);
    // const [moveX, setMoveX] = React.useState<number>(0);
    // const [animationId, setAnimationId] = React.useState<number>(-1);

    const playAnimation = () => {
        let scrollX = wrapperRef.current!.scrollWidth - wrapperRef.current!.getBoundingClientRect().width;
        let aniId: number = -1;
        let isMouseDown:boolean = false;

        if(scrollX <= 0) {
            return;
        }

        let moveX = 0;
        const xAnimation = () => {
            if(moveX >= scrollX) {
                cancelAnimationFrame(aniId);
                return;
            }

            if(contentsRef.current) {
                contentsRef.current!.style.transform = `translateX(-${++moveX}px)`;
                aniId = requestAnimationFrame(xAnimation);
            }
        };

        // mouse scroll start
        let startX: number, 
            scrollGap: number, 
            scrollToRight: boolean, 
            scrollMoveX: number;

        // mouse on:  mouse scroll start
        contentsRef.current!.addEventListener('mousedown', function(event) {
            event.stopPropagation();
            isMouseDown = true;
            startX = event.clientX;
            cancelAnimationFrame(aniId);
        });
        // mouse off:  mouse scroll end
        contentsRef.current!.addEventListener('mouseup', function() {
            isMouseDown = false;
            aniId = requestAnimationFrame(xAnimation);
        });
        // mouse move:  mouse scrolling on
        contentsRef.current!.addEventListener('mousemove', function(event) {
            if(isMouseDown) {
                event.preventDefault();
                // 15에서 시작 => 10까지 끌면
                scrollGap = startX- event.clientX;
                scrollToRight = scrollGap >= 0;
                scrollMoveX = scrollToRight && (moveX + scrollGap > scrollX)
                            ? scrollX // 멈추기
                            : !scrollToRight && (moveX + scrollGap <= 0)
                            ? 0
                            : moveX + scrollGap; // 멈추기

                contentsRef.current!.style.transform = `translateX(-${scrollMoveX}px)`;
                moveX = scrollMoveX;
                startX = event.clientX;
            }
        });
        // mouse out: mosue scrolling end
        contentsRef.current!.addEventListener('mouseleave', function(event) {
            if(isMouseDown) {
                isMouseDown = false;
                aniId = requestAnimationFrame(xAnimation);
            }
        });

        // init
        aniId = requestAnimationFrame(xAnimation);
    };

    React.useEffect(() => {
        if(animation) {
            playAnimation();
        }
    }, [animation]);
    

  return (
    <div 
        className="w-full py-2 overflow-x-hidden whitespace-nowrap"
        {
            ...(
                animation &&
                { ref: wrapperRef }
            )
        }
    >
        <ul 
            className="flex flex-row gap-3 flex-nowrap cursor-pointer"
            {
                ... (
                    animation &&
                    { ref: contentsRef }
                )
            }
        >
            {
                dummy.map((item, idx) => (
                    <RoundButton
                        key={idx}
                        tag="li"
                    >
                        <Link to="/as">{item.contents}</Link>
                        
                    </RoundButton>
                ))
            }
        </ul>
    </div>
  )
}
