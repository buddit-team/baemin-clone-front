import React from 'react';
import { SearchBar as StyledSearchBar } from './style';

export type SearchBarProps = {
    themeType: 'main' | 'sub';
    onInputClick?: () => void;
}

const SearchBar = ({
    themeType,
    ...props
}: SearchBarProps) => {
    const [searchText, setSearchText] = React.useState<string>('팟타이 나와라 뚝딱!');

    return (
        <StyledSearchBar 
            themeType={themeType}
        >
            <span 
                className="input"
                onClick={() => { props.onInputClick && props.onInputClick()} }
            >{searchText}</span>
        </StyledSearchBar>
    )

};

export default SearchBar;