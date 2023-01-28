import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

type DropDownProps = {
    default?: boolean;
    step?: number;
    showIcon?: boolean;
    button: React.ReactElement | string;
    contents: React.ReactElement | string;
    icon?: React.ReactElement;
}

export default function DropDown(props: DropDownProps) {

    const [active, setActive] = React.useState<-1|0|1>(-1);
    const [contentsH, setContentsH] = React.useState<number>(0);

    const wrapperRef = React.useRef<HTMLDivElement | null>(null);
    const contentsRef = React.useRef<HTMLDivElement | null>(null);

    const getClientHeight =(target: HTMLElement|null) => {
        if(target) {
            return target.getBoundingClientRect().height;
        } else {
            return 0;
        }
    };

    const resetContententsHeight = React.useCallback(() => {
        const changedCh = getClientHeight(contentsRef.current);
        if(changedCh !== contentsH ) {
            wrapperRef.current!.style.height = changedCh + 'px';
        }
        setContentsH(changedCh);
    }, [contentsRef.current])

    const animation = (startH: number, endH: number) => {
        let nowH = startH;
        let nextH = 0;
        let hAnimtaion: number|null = null;
        let step: number = (props.step && props.step > 0)
                            ? props.step 
                            : 3;
        let count = Math.ceil(Math.abs(endH - startH)/step);
        const getNextH = (endH - startH >= 0)
                        ? () => (nowH + step <= endH)? nowH + step : endH
                        : () => (nowH - step >= 0) ? nowH - step : endH;

        const animate = () => {
            if(hAnimtaion && count <= 0) {
                cancelAnimationFrame(hAnimtaion!);
                return;
            }
            nextH = getNextH();
            wrapperRef.current!.style.height = nextH + 'px';
            count--;
            nowH = nextH;
            hAnimtaion = requestAnimationFrame(animate);
        };

        animate();
    };

    const showContents = () => {
        animation(0, contentsH);
    };

    const hideContets = () => {
        animation(contentsH, 0);
    };

    React.useEffect(() => {
        if(active === 1) {
            showContents();
        } 
        if(active === 0) {
            hideContets();
        }
    }, [active]);

    React.useEffect(() => {
        if(contentsRef.current) {
            setContentsH(getClientHeight(contentsRef.current));
            window.addEventListener('resize', resetContententsHeight);
        }
    }, [contentsRef.current])

  return (
    <div className="flex flex-col">
        <button
            onClick={() => { setActive(active => active <= 0? 1 : 0); }}
            className="flex flex-row gap-2 items-center"
        >
            {props.button}
            {
                props.showIcon &&
                <div className={`text-s rotate-${active? 180 : 0}`}>
                    { 
                        props.icon
                        || <FontAwesomeIcon icon={faCaretDown} />
                    }
                </div>
            }
        </button>
        <div
            ref={wrapperRef}
            className="h-0 overflow-hidden"
        >
            <div
                ref={contentsRef}
                className="h-auto"
            >{props.contents}</div>
        </div>
    </div>
  )
}
