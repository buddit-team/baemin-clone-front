import React from 'react';
import { SearchBar as StyledSearchBar } from './style';

export type SearchBarProps = {
    type: 'main' | 'sub';
}

const SearchBar = ({
    type
}: SearchBarProps) => {
    const [searchText, setSearchText] = React.useState<string>('팟타이 나와라 뚝딱!');

    return (
        <StyledSearchBar type={type} />
    )

};

export default SearchBar;