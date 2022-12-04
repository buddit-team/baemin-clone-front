import React from 'react'
import RoundButton, { RoundButtonProps } from '../uiCommon/Button';

type ScrollListProps = {
    items: Array<{
        contents: string | React.ReactElement;
        onClick?: () => void;
    }>;
    itemStyle?: RoundButtonProps;
}

export default function ScrollList({
    items,
    itemStyle
}: ScrollListProps) {

  return (
    <div className="w-full overflow-x-auto whitespace-nowrap">
        <ul>
            {
                items.map((item, any) => (
                    <RoundButton
                        key={any}
                        tag="li"
                    >{item.contents}</RoundButton>
                ))
            }
        </ul>
    </div>
  )
}
