import { FC, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setArconnect, setAddress } from '../../redux/redux.marketplace';
import { initArweave, Contract } from '../../arweave';

declare const window: any;

export const ArconnectContainer = styled.div`
    width: 100%;

    &.invisible { display: none ;}

    div.title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 15px 0;
        border-bottom: 2px dashed rgb(230, 230, 230);

        img {
            height: 42px;
            margin: 0 15px 0 0;
        }

        h2 {
            font-size: 18px;
            font-weight: 300;
            letter-spacing: 1px;
            padding: 5px 0 0 0;
        }
    }

    div.links {
        display: flex;
        align-items: center;
        border-bottom: 2px dashed rgb(230, 230, 230);

        a.link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50%;
            height: 70px;
            cursor: pointer;
            color: #B9B1FE;

            &:first-of-type {
                border-right: 2px dashed rgb(230, 230, 230);
            }
            
            img {
                height: 42px;
                margin: 0 15px 0 0;
            }

            font-size: 18px;
            font-weight: 600;
            letter-spacing: 0.5px;
        }
    }
`;

export const ArconnectState = (state) => ({
    arconnect: state.marketplace.arconnect,
    address: state.marketplace.address,
})

export interface ArconnectI {
    arconnect: boolean;
    address: string;
    setArconnect(payload: boolean): void;
    setAddress(payload: string): void;
}

export const ArconnectComponent: FC<ArconnectI> = ({ arconnect, setArconnect, address, setAddress }) => {
    useLayoutEffect(() => {
        window.addEventListener('loadWallet', async () => {
            await window.arweaveWallet.connect(
                ['ACCESS_ADDRESS', 'ACCESS_ALL_ADDRESSES', 'SIGN_TRANSACTION'],
                {
                    name: 'Amplify',
                    logo: 'https://amplify.host/image/amplify.png',
                },
            )

            const activeAddress = await window.arweaveWallet.getActiveAddress();

            console.log('ArConnect connected with', activeAddress);

            setArconnect(true);
            setAddress(activeAddress);

            await window.arweaveWallet.addToken(Contract);

            initArweave();
        })

        window.addEventListener('walletSwitch', (e) => {
            const newAddress = e.detail.address;

            console.log('ArConnect connected with', newAddress);

            setAddress(newAddress);
        })
    }, []);

    return(
        <ArconnectContainer className={arconnect ? 'invisible' : 'visible'}>
            <div className="title">
                <img src="/image/arconnect.png"/>
                <h2>Use this dApp with ArConnect</h2>
            </div>
            <div className="links">
                <a className="link" href="https://addons.mozilla.org/en-US/firefox/addon/arconnect/" target="arfirefox">
                    <img src="/image/firefox.png"/>
                    Download for Firefox
                </a>
                <a className="link" href="https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap" target="archrome">
                    <img src="/image/chrome.png"/>
                    Download for Chrome
                </a>
            </div>
        </ArconnectContainer>
    )
}

export const Arconnect = connect(ArconnectState, { setArconnect, setAddress })(ArconnectComponent);