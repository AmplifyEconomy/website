import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setSearchInput } from '../../redux/redux.app';

export const MarketplaceSearchContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    border-bottom: 2px dashed rgb(230, 230, 230);

    input {
        width: calc(100% - 180px);
        height: 100%;
        border: none;
        font-size: 18px;
        padding: 0 30px;
        outline: none;
    }

    a.button {
        background: hsla(202, 100%, 84%, 1);
        background: linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
        background: -moz-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
        background: -webkit-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ADE1FF", endColorstr="#B9B1FE", GradientType=1 );

        display: flex;
        align-items: center;
        justify-content: center;
        width: 180px;
        height: 100%;
        font-size: 24px;
        font-weight: 600;
        color: white;
        cursor: pointer;
    }

    a.link {
        position: absolute;
        right: 0px;
        top: -60px;

        background: hsla(202, 100%, 84%, 1);
        background: linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
        background: -moz-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
        background: -webkit-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
        filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ADE1FF", endColorstr="#B9B1FE", GradientType=1 );

        display: flex;
        align-items: center;
        justify-content: center;
        width: 240px;
        height: 40px;
        font-size: 18px;
        font-weight: 400;
        color: white;
        cursor: pointer;
        text-decoration: none;
        border-radius: 5px;
    }
`;

export const MarketplaceSearchState = state => ({
    input: state.app.search.input,
})

export interface MarketplaceSearchI {
    input: string;
    setSearchInput(state: string): void;
}

export const MarketplaceSearchComponent: FC<MarketplaceSearchI> = ({ input, setSearchInput }) => {
    return(
        <MarketplaceSearchContainer>
            <Link href="/marketplace/create">
                <a className="link">
                    Create a network
                </a>
            </Link>

            <input type="text" placeholder="Type To Search For Apps..." value={input} onChange={e => setSearchInput(e.target.value)}/>

            <a className="button">
                Search
            </a>
        </MarketplaceSearchContainer>
    )
}

export const MarketplaceSearch = connect(MarketplaceSearchState, { setSearchInput })(MarketplaceSearchComponent);