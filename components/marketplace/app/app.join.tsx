import { FC, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setJoinUrl, setJoinAddress } from '../../../redux/redux.app';

export const AppJoinContainer = styled.div`
    input {
        font-size: 18px;
        width: 100%;
        height: 60px;
        padding: 0 15px;
        margin: 0 0 30px 0;
        border: 2px solid #B9B1FE;
        border-radius: 5px;
        outline: none;
    }

    div.request {
        div.request-button {
            display: flex;
            justify-content: flex-end;

            a.button {
                background: hsla(202, 100%, 84%, 1);
                background: linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
                background: -moz-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
                background: -webkit-linear-gradient(90deg, hsla(202, 100%, 84%, 1) 0%, hsla(246, 97%, 85%, 1) 100%);
                filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#ADE1FF", endColorstr="#B9B1FE", GradientType=1 );
        
                display: flex;
                align-items: center;
                justify-content: center;
                width: 240px;
                height: 50px;
                font-size: 24px;
                font-weight: 400;
                color: white;
                cursor: pointer;
                border-radius: 5px;

                text-decoration: none;
            }
        }
    }
`;

export const AppJoinState = state => ({
    arAddress: state.marketplace.address,
    url: state.app.join.url,
    address: state.app.join.address,
})

export interface AppJoinI {
    arAddress: string;
    url: string;
    address: string;
    setJoinUrl(state: string): void;
    setJoinAddress(state: string): void;
}

export const AppJoinComponent: FC<AppJoinI> = ({ arAddress, url, address, setJoinUrl, setJoinAddress }) => {
    return(
        <AppJoinContainer>
            <div className="request">
                <h3>Request To Join</h3>

                <p>Node URL</p>
                <input type="text" placeholder="192.168.0.1" value={url} onChange={e => setJoinUrl(e.target.value)}/>

                <p>
                    Wallet Address
                    <a className="mini-button" onClick={e => setJoinAddress(arAddress)}>
                        Use ArConnect Address
                    </a>
                </p>
                <input type="text" placeholder="Arweave Address" value={address} onChange={e => setJoinAddress(e.target.value)}/>

                <div className="request-button">
                    <a className="button">
                        Join
                    </a>
                </div>
            </div>
        </AppJoinContainer>
    )
}

export const AppJoin = connect(AppJoinState, { setJoinUrl, setJoinAddress })(AppJoinComponent);