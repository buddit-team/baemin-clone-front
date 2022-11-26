import React from 'react';
import { Address, Header, Menus, RandomBox, Utils } from '../style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCells, faBell, faFaceGrinTongue } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../../../features/SearchBar';

interface Props {
    address: string;
    user: any;
}

const MainHeader = (): JSX.Element => {

    const [address, setAddress] = React.useState<string>('서울시 강서구 염창동');
    

    return (
        <>
            <Header type="main">
                <Utils>
                    <Address>{address}</Address>
                    <Menus>
                        <ul>
                            <li>
                                <FontAwesomeIcon 
                                    icon={faTableCells}
                                    color="#FFF"
                                />
                            </li>
                            <li>
                                <FontAwesomeIcon 
                                    icon={faBell}
                                    color="#FFF"
                                />
                            </li>
                            <li>
                                <FontAwesomeIcon 
                                    icon={faFaceGrinTongue}
                                    color="#FFF"
                                />
                            </li>
                        </ul>
                    </Menus>
                </Utils>
                <RandomBox
                    height={0}
                >
                </RandomBox>
            </Header>
            <SearchBar type="main" />
        </>
    )
};

export default MainHeader;